import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionProduct.module.css';

import Electric from './images/electricguitar.jpg';
import Bass from './images/bassGuitar.jpg';
import guitars from './images/guitar.jpg';

class ProductImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(ProductImage);

const productLink = (name, price, image, id, slug) => {
  const nameText = <span className={css.productName}>{name}</span>;
  return (
    <NamedLink name="ListingPage" params={{ id, slug }} className={css.product}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.productImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionProduct.listingsInProduct"
          values={{ product: nameText }}
        />
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionProduct.listingsInPrice"
          values={{ price: price }}
        />
      </div>
    </NamedLink>
  );
};

const SectionProduct = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  let id;
  switch (props.category) {
    case 'hero':
      id = "SectionProduct.hero"
      break;
    case 'newlyList':
      id = "SectionProduct.newlyList"
      break;
    case 'mostView':
      id = "SectionProduct.mostView"
      break;
    case 'watching':
      id = "SectionProduct.watching"
      break;
  }

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id={id} />
      </div>
      <div className={css.products}>
        {productLink(
          'Acoustic Guitars',
          '$32.00',
          guitars,
          '6034c73a-97c7-4836-90eb-88cbf3a4b10f',
          'test'
        )}
        {productLink(
          'Electric Guitars',
          '$132.00',
          Electric,
          '602f6a63-9d1c-4856-886a-bf61063ef899',
          'trung-test-lan-1'
        )}
        {productLink(
          'Bass Guitars',
          '$320.00',
          Bass,
          '602de8e9-af6f-49b5-9a3d-0756a2a441b5',
          'sdfsdfsdfsdfsdf'
        )}
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
