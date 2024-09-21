import React from 'react';
import PropTypes from 'prop-types';
import * as Organisms from '@/components/Organisms';
import * as Molecules from '@/components/Molecules';

function Layout(props) {
  const { children, bannerProps } = props;
  return (
    <>
      <Organisms.Header />
      <Molecules.Banner {...bannerProps} />
      <div className="bg-bodyBg">{children}</div>
      <Organisms.Footer />
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  bannerProps: {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    showCta: PropTypes.bool,
  },
};
