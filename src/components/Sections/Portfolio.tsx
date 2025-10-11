import classNames from 'classnames';
import Image, {StaticImageData} from 'next/image';
import {FC, memo, MouseEvent, useCallback, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [modalSrc, setModalSrc] = useState<string | null>(null);

  const openModal = useCallback((img: string | StaticImageData | {src?: string}) => {
    if (typeof img === 'string') {
      setModalSrc(img);
    } else {
      const obj = img as {src?: string} | StaticImageData;
      setModalSrc(obj && 'src' in obj ? obj.src || null : null);
    }
  }, []);

  const closeModal = useCallback(() => setModalSrc(null), []);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                  <ItemOverlay image={image} onOpen={openModal} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {modalSrc && (
          <div
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={closeModal}
            role="dialog"
          >
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
