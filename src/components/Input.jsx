// src/components/Input/Input.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, name, value, onChange, placeholder, inputClassName, labelClassName }) => {
  const [show, setShow] = useState(false);
  const inputType = show ? 'text' : type;

  const toggleShow = () => setShow((prevShow) => !prevShow);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={name} className={labelClassName} style={{ display: 'block', marginBottom: '0.5rem', color:'black' }}>
        {placeholder}
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type={inputType}
          id={name}
          name={name}
          value={value}
          className={inputClassName}
          onChange={onChange}
          placeholder={placeholder}
          required
          style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={toggleShow}
            style={{
              position: 'absolute',
              right: '0.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
            }}
          >
            {show ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string
};


export default Input;
