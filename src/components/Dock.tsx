import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import { getDockApps } from '../constants';
import { useLanguage } from '../hooks/useLanguage';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useWindowStore from '../store/window';
import type { DockApp, WindowKey } from '../types/constants';

const Dock = () => {
  const { t } = useLanguage();
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockApps = getDockApps(t);
  const dockRef = useRef<HTMLDivElement>(null);

  const isValidWindowKey = (id: string): id is WindowKey => {
    return Object.prototype.hasOwnProperty.call(windows, id);
  };

  const toggleApp = (app: DockApp) => {
    if (!app.canOpen) return;

    if (!isValidWindowKey(app.id)) return;

    const window = windows[app.id];

    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll('.dock-icon');

    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach(icon => {
        const { left: iconLeft, width: iconWidth } =
          icon.getBoundingClientRect();
        const center = iconLeft - left + iconWidth / 2;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.exp(-(distance ** 2.5) / 15000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: 'power1.out',
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();

      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach(icon =>
        gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: 'power1.out' })
      );

    dock.addEventListener('mousemove', handleMouseMove);
    dock.addEventListener('mouseleave', resetIcons);

    return () => {
      dock.removeEventListener('mousemove', handleMouseMove);
      dock.removeEventListener('mouseleave', resetIcons);
    };
  }, []);

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(app => (
          <div key={app.id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={t(app.name)}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={t(app.name)}
              disabled={!app.canOpen}
              onClick={() => toggleApp(app)}
            >
              <img
                src={`/images/${app.icon}`}
                alt={app.name}
                loading="lazy"
                className={app.canOpen ? '' : 'opacity-60'}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
