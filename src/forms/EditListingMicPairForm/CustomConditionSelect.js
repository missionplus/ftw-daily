import React from 'react';
import { FieldSelect } from '../../components';

import css from './EditListingMicPairForm.module.css';

const CustomConditionSelect = props => {
  const { name, id, condition, conditionMicPairA, conditionMicPairB, intl } = props;
  const conditionLabel = intl.formatMessage({
    id: 'EditListingPoliciesForm.conditionLabel',
  });
  const conditionPlaceholder = intl.formatMessage({
    id: 'EditListingPoliciesForm.conditionPlaceholder',
  });
  return condition ? (
    <FieldSelect className={css.condition} name={name} id={id} label={conditionLabel}>
      <option disabled value="">
        {conditionPlaceholder}
      </option>
      {condition.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : conditionMicPairA ? (
    <FieldSelect className={css.condition} name={name} id={id} label={conditionLabel}>
      <option disabled value="">
        {conditionPlaceholder}
      </option>
      {conditionMicPairA.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : conditionMicPairB ? (
    <FieldSelect className={css.condition} name={name} id={id} label={conditionLabel}>
      <option disabled value="">
        {conditionPlaceholder}
      </option>
      {conditionMicPairB.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomConditionSelect;
