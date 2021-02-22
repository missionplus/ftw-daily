import React from 'react';
import { FieldSelect } from '../../components';

import css from './EditListingMicPairForm.module.css';

const CustomMicPairSelectFieldMaybe = props => {
  const {
    name,
    id,
    powerSupply,
    cabling,
    shockMount,
    micCase,
    carryCase,
    powerSupplyA,
    powerSupplyB,
    cablingA,
    cablingB,
    shockMountA,
    shockMountB,
    micCaseA,
    micCaseB,
    carryCaseA,
    carryCaseB,
    intl,
  } = props;
  const powerSupplyLabel = intl.formatMessage({
    id: 'EditListingMicPairForm.powerSupplyLabel',
  });
  const cablingLabel = intl.formatMessage({
    id: 'EditListingMicPairForm.cablingLabel',
  });
  const shockMountLabel = intl.formatMessage({
    id: 'EditListingMicPairForm.shockMountLabel',
  });
  const micCaseLabel = intl.formatMessage({
    id: 'EditListingMicPairForm.micCaseLabel',
  });
  const carryCaseLabel = intl.formatMessage({
    id: 'EditListingMicPairForm.carryCaseLabel',
  });
  const micPairPlaceholder = intl.formatMessage({
    id: 'EditListingMicPairForm.micPairPlaceholder',
  });
  return powerSupply ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={powerSupplyLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {powerSupply.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : cabling ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={cablingLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {cabling.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : shockMount ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={shockMountLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {shockMount.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : micCase ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={micCaseLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {micCase.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : carryCase ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={carryCaseLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {carryCase.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : powerSupplyA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={powerSupplyLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {powerSupplyA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : powerSupplyB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={powerSupplyLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {powerSupplyB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : cablingA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={cablingLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {cablingA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : cablingB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={cablingLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {cablingB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : shockMountA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={shockMountLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {shockMountA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : shockMountB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={shockMountLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {shockMountB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : micCaseA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={micCaseLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {micCaseA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : micCaseB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={micCaseLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {micCaseB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : carryCaseA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={carryCaseLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {carryCaseA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : carryCaseB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={carryCaseLabel}>
      <option disabled value="">
        {micPairPlaceholder}
      </option>
      {carryCaseB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomMicPairSelectFieldMaybe;
