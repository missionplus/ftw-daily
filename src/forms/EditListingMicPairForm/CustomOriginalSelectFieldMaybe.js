import React from 'react';
import { FieldSelect } from '../../components';

import css from './EditListingMicPairForm.module.css';

const CustomOriginalSelectFieldMaybe = props => {
  const {
    name,
    id,
    originalTube,
    originalCapsule,
    originalTransformer,
    originalSupply,
    originalCabling,
    originalShockMount,
    originalMicCase,
    originalCarryCase,
    originalTubeA,
    originalTubeB,
    originalCapsuleA,
    originalCapsuleB,
    originalTransformerA,
    originalTransformerB,
    originalSupplyA,
    originalSupplyB,
    originalCablingA,
    originalCablingB,
    originalShockMountA,
    originalShockMountB,
    originalMicCaseA,
    originalMicCaseB,
    originalCarryCaseA,
    originalCarryCaseB,
    intl,
  } = props;
  const originalLabel = intl.formatMessage({
    id: 'EditListingMicPairForm.originalLabel',
  });
  const originalPlaceholder = intl.formatMessage({
    id: 'EditListingMicPairForm.originalPlaceholder',
  });
  return originalTube ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalTube.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalCapsule ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalCapsule.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalTransformer ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalTransformer.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalSupply ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalSupply.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalCabling ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalCabling.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalShockMount ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalShockMount.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalMicCase ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalMicCase.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalCarryCase ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalCarryCase.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalTubeA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalTubeA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalTubeB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalTubeB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalCapsuleA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalCapsuleA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalCapsuleB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalCapsuleB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalTransformerA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalTransformerA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalTransformerB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalTransformerB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalSupplyA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalSupplyA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalSupplyB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalSupplyB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalCablingA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalCablingA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalCablingB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalCablingB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalShockMountA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalShockMountA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalShockMountB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalShockMountB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalMicCaseA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalMicCaseA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalMicCaseB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalMicCaseB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalCarryCaseA ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalCarryCaseA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : originalCarryCaseB ? (
    <FieldSelect className={css.micPair} name={name} id={id} label={originalLabel}>
      <option disabled value="">
        {originalPlaceholder}
      </option>
      {originalCarryCaseB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomOriginalSelectFieldMaybe;
