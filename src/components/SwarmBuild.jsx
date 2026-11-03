import { useEffect, useRef } from 'react';

export default function SwarmBuild({ autoTour, onFinish, onStatus }) {
  const autoTourRef = useRef(autoTour);

  useEffect(() => {
    autoTourRef.current = autoTour;
  }, [autoTour]);

  useEffect(() => {
    let active = true;
    let pollTimer;
    let revealTimer;
    let sawHost = false;
    let engineReady = false;
    let startedTour = false;
    let startedAutoLive = false;
    const script = document.createElement('script');
    script.src = `${import.meta.env.BASE_URL}swarm.js`;
    script.async = true;
    const report = message => { if (active) onStatus(message); };
    const fail = message => {
      report(message);
      window.clearInterval(pollTimer);
      window.__swarmRebuild?.stop(false);
      onFinish();
    };
    script.onerror = () => {
      script.remove();
      fail('Could not load swarm.js. Confirm the public folder is served with the site.');
    };
    script.onload = () => {
      script.remove();
      report('Local engine loaded. Preparing a snapshot of the page.');
      const startedAt = Date.now();
      pollTimer = window.setInterval(() => {
        const engine = window.__swarmRebuild;
        const app = engine?.app;
        const host = document.querySelector('swarm-rebuild');
        const tourButton = host?.shadowRoot?.querySelector('[data-a="tour"]');
        const liveButton = host?.shadowRoot?.querySelector('[data-a="live"]');

        if (host) sawHost = true;
        if (!revealTimer && app?.view?.bg?.classList.contains('on')) {
          revealTimer = window.setTimeout(() => {
            document.documentElement.removeAttribute('data-swarm-startup');
          }, 550);
        }
        if (!engineReady && app?.engine?.ready) {
          engineReady = true;
          if (!autoTourRef.current) {
            report('Swarm is ready. Scroll down to guide the agents as they rebuild the page.');
          }
        }
        if (tourButton && autoTourRef.current && !startedTour && app?.engine?.ready) {
          startedTour = true;
          tourButton.click();
          report('Swarm rebuild is touring the page. Press Escape to stop early.');
        }
        if (app?.complete && startedTour && liveButton && !startedAutoLive) {
          startedAutoLive = true;
          report('Swarm rebuild complete. Returning to the live portfolio.');
          liveButton.click();
        }

        if (sawHost && !host && !app) {
          window.clearInterval(pollTimer);
          if (active) {
            report('Swarm rebuild finished.');
            onFinish(startedAutoLive);
          }
        } else if (!app?.engine?.ready && Date.now() - startedAt > 90000) {
          fail('The local swarm engine did not finish preparing the page. Check the browser console.');
        }
      }, 250);
    };
    document.head.appendChild(script);

    return () => {
      active = false;
      window.clearInterval(pollTimer);
      window.clearTimeout(revealTimer);
      script.remove();
      if (window.__swarmRebuild?.app) window.__swarmRebuild.stop(false);
    };
  }, [onFinish, onStatus]);

  return null;
}
