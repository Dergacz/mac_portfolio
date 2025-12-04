import { useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FONT_WEIGHTS = {
  title: { min: 400, max: 900, default: 400 },
  subtitle: { min: 100, max: 400, default: 100 },
};

const setupTextHover = (container: HTMLElement, type: 'title' | 'subtitle') => {
  if (!container) return;
  const { min, max, default: baseWeight } = FONT_WEIGHTS[type];

  const letters = container.querySelectorAll('span');

  const animateLetter = (
    letter: HTMLElement,
    weight: number,
    duration: number = 0.25
  ) => {
    return gsap.to(letter, {
      duration,
      ease: 'power2.out',
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach(letter => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 15000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach(letter => {
      animateLetter(letter, baseWeight, 0.3);
    });
  };

  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('mouseleave', handleMouseLeave);
  };
};

const renderText = (
  text: string,
  className: string,
  baseWeight: number = 400
) => {
  return [...text].map((char, index) => (
    <span
      key={index}
      className={className}
      style={{ fontVariationSettings: `'wght ${baseWeight}` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

const Welcome = () => {
  const { t } = useLanguage();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    if (!titleRef.current || !subtitleRef.current) return;
    const titleClean = setupTextHover(titleRef.current, 'title');
    const subtitleClean = setupTextHover(subtitleRef.current, 'subtitle');

    return () => {
      if (!titleClean || !subtitleClean) return;
      titleClean();
      subtitleClean();
    };
  });

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(t('welcome.subtitle'), 'text-3xl font-georama', 100)}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText(t('welcome.title'), 'text-9xl italic font-georama')}
      </h1>
    </section>
  );
};

export default Welcome;
