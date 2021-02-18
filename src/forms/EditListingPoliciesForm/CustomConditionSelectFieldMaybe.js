import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingPoliciesForm.module.css';

const CustomConditionSelectFieldMaybe = props => {
  const { name, id, condition, intl } = props;
  const conditionLabel = intl.formatMessage({
    id: 'EditListingPoliciesForm.conditionLabel',
  });
  const conditionPlaceholder = intl.formatMessage({
    id: 'EditListingPoliciesForm.conditionPlaceholder',
  });
  const conditionRequired = required(
    intl.formatMessage({
      id: 'EditListingPoliciesForm.conditonRequired',
    })
  );
  return condition ? (
    <FieldSelect
      className={css.condition}
      name={name}
      id={id}
      label={conditionLabel}
      validate={conditionRequired}
    >
      <option disabled value="">
        {conditionPlaceholder}
      </option>
      {condition.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomConditionSelectFieldMaybe;
