import React, {useCallback} from 'react';
import { useValidatedState } from "@teragon/react-form-validator";

import styles from './Input.module.css';

const Input = ({ initialValue, fieldName, validators }) => {
  const [ value, errors, setValue ] = useValidatedState(initialValue, validators, { fieldName });

  const onChange =  useCallback(event => setValue(event.target.value), [setValue]);

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>Field Name</label>
      <input className={[ styles.input, errors.length > 0 && styles.error]} value={value} onChange={onChange} />
      {
        errors.length > 0 && (
          <div className={styles.errors}>
            {errors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )
      }
    </div>

  );
};

export default Input;
