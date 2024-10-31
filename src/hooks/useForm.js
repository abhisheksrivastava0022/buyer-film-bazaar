import { useState } from 'react';

const useForm = (initialValues, validate = null) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Handle checkbox separately
    const newValue = type === 'checkbox' ? (checked ? 1 : 0) : 
                     type === 'date' ? new Date(value).toISOString().split('T')[0] : // Format date as YYYY-MM-DD
                     value;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));

    // Validate the current field if validation function exists
    if (validate) {
      const currentErrors = validate({
        ...values,
        [name]: newValue,
      });

      // Remove error for the current field if it is now valid
      setErrors((prevErrors) => {
        const { [name]: removedError, ...restErrors } = prevErrors;
        return currentErrors[name] ? currentErrors : restErrors;
      });
    }
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();

    // If validate exists, validate the values
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        callback(); // If no errors, call the submit function
      }
    } else {
      callback(); // If no validation, directly submit
    }
  };

  return { values, errors, handleChange, handleSubmit, setValues, setErrors };
};

export default useForm;