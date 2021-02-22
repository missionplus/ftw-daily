import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingMicPairForm.module.css';

const CustomSellingPairSelectFieldMaybe = props => {
  const { name, id, sellingPair, sequentSerial, intl } = props;
  const sellingPairLabel = intl.formatMessage({
    id: 'EditListingMicPairForm.sellingPairLabel',
  });
  const sellingPairPlaceholder = intl.formatMessage({
    id: 'EditListingMicPairForm.sellingPairPlaceholder',
  });
  const sequentSerialLabel = intl.formatMessage({
    id: 'EditListingMicPairForm.sequentSerialLabel',
  });
  const sequentSerialPlaceholder = intl.formatMessage({
    id: 'EditListingMicPairForm.sequentSerialPlaceholder',
  });
  const sellingPairRequired = required(
    intl.formatMessage({
      id: 'EditListingMicPairForm.sellingPairRequired',
    })
  );
  return sellingPair ? (
    <FieldSelect
      className={css.micPair}
      name={name}
      id={id}
      label={sellingPairLabel}
      validate={sellingPairRequired}
    >
      <option disabled value="">
        {sellingPairPlaceholder}
      </option>
      {sellingPair.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : sequentSerial ? (
    <FieldSelect
      className={css.micPair}
      name={name}
      id={id}
      label={sequentSerialLabel}
    >
      <option disabled value="">
        {sequentSerialPlaceholder}
      </option>
      {sequentSerial.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomSellingPairSelectFieldMaybe;
