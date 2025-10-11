import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image, {StaticImageData} from 'next/image';
import {FC, memo, MouseEvent, useCallback, useRef, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const openModal = useCallback((img: string | StaticImageData | {src?: string}) => {
    if (typeof img === 'string') {
      setModalSrc(img);
    } else {
      const obj = img as {src?: string} | StaticImageData;
      setModalSrc(obj && 'src' in obj ? obj.src || null : null);
    }
  }, []);

  const closeModal = useCallback(() => setModalSrc(null), []);

  const scrollByAmount = useCallback((amount: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({left: amount, behavior: 'smooth'});
  }, []);

  const handlePrev = useCallback(() => {
    const el = trackRef.current;
    scrollByAmount(-(el?.clientWidth || 0));
  }, [scrollByAmount]);

  const handleNext = useCallback(() => {
    const el = trackRef.current;
    scrollByAmount(el?.clientWidth || 0);
  }, [scrollByAmount]);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className="relative">
          {/* gradient edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-800 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-800 to-transparent" />

          {/* controls */}
          <button
            aria-label="Previous"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-neutral-900/60 p-2 text-white backdrop-blur transition hover:bg-neutral-900/80"
            onClick={handlePrev}
            type="button">
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-neutral-900/60 p-2 text-white backdrop-blur transition hover:bg-neutral-900/80"
            onClick={handleNext}
            type="button">
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          {/* slider track */}
          <div
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            ref={trackRef}>
            {portfolioItems.map((item, index) => {
              const {title, image} = item;
              return (
                <div
                  className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-1/2 lg:w-[40%] xl:w-[33%]"
                  key={`${title}-${index}`}>
                  <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
                    <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                    <ItemOverlay image={image} onOpen={openModal} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal */}
        {modalSrc && (
          <div
            aria-modal
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={closeModal}
            role="dialog">
            <div className="max-h-[90vh] max-w-[90vw] p-4" onClick={e => e.stopPropagation()}>
              <Image alt="portfolio" className="object-contain" height={800} src={modalSrc} width={1200} />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{
  image: string | StaticImageData | {src?: string};
  onOpen: (img: string | StaticImageData | {src?: string}) => void;
}> = memo(({image, onOpen}) => {
  const handleClick = useCallback((e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onOpen(image as string);
  }, [image, onOpen]);

  return (
    <button
      aria-label="Open image"
      className={classNames('absolute inset-0 h-full w-full bg-transparent')}
      onClick={handleClick}
    >
      {/* empty overlay - clicking opens modal */}
    </button>
  );
});
