import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';


import css from './SectionProduct.module.css';
import { ListingProduct } from '../../components';

const SectionProduct = props => {
  const { rootClassName, className, listings } = props;
  console.log(listings);
  const classes = classNames(rootClassName || css.root, className);
  let id;
  switch (props.category) {
    case 'hero':
      id = 'SectionProduct.hero';
      break;
    case 'newlyList':
      id = 'SectionProduct.newlyList';
      break;
    case 'mostView':
      id = 'SectionProduct.mostView';
      break;
    case 'watching':
      id = 'SectionProduct.watching';
      break;
  }

  // Panel width relative to the viewport
  const panelMediumWidth = 50;
  const panelLargeWidth = 62.5;
  const cardRenderSizes = [
    '(max-width: 767px) 100vw',
    `(max-width: 1023px) ${panelMediumWidth}vw`,
    `(max-width: 1920px) ${panelLargeWidth / 2}vw`,
    `${panelLargeWidth / 3}vw`,
  ].join(', ');
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id={id} />
      </div>
      <div className={css.listingCards}>
        <div className={css.listingCardsInner}>
          <ul className={css.rowList}>
            {listings.map(l => (
              <li className={css.colList}>
                <ListingProduct
                  className={css.listingCard}
                  key={l.id.uuid}
                  listing={l}
                  renderSizes={cardRenderSizes}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

SectionProduct.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionProduct.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionProduct;
