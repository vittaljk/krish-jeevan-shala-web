import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { Button } from 'flowbite-react';
import PropTypes from 'prop-types';
import styles from './Banner.module.scss';

function Banner(props) {
  const { image, title, description, showCta, backgroundPosition } = props;

  return (
    <div
      className={clsx(`relative ${styles.bannerContainer}`)}
      style={{ backgroundImage: `url('/images/${image}')`, backgroundPosition }}
    >
      <div className=" text-white opacity-90 flex gap-8 flex-col w-full lg:w-[40%] m-auto py-5 md:py-36 min-h-[inherit] items-center justify-center">
        <div className="text-3xl md:text-5xl font-bold">{title}</div>
        {description && (
          <div className="px-5 md:px:0 text-xl md:text-3xl font-light">
            {description}
          </div>
        )}
        {showCta && (
          <div className="banner-cta-container">
            <Link href="/contact-us">
              <Button size="xl" className="uppercase bg-primary">
                get started today
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;

Banner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  showCta: PropTypes.bool,
  backgroundPosition: PropTypes.string,
};

Banner.defaultProps = {
  image: 'banners/home-banner.jpg',
  title: 'We Are Unique',
  showCta: true,
  backgroundPosition: 'right 0 bottom 0',
};
