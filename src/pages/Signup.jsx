import React from 'react'; 
import useForm from '../hooks/useForm';
import useAuth from '../hooks/useAuth';
import Button from '../components/Button';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { signupUser, loading, error } = useAuth();
  const navigate = useNavigate(); 

  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      title:1,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate
  );

  const onSubmit = async () => {
    console.log("Form submitted"); // Debuggin

    if (values.password !== values.confirmPassword) {
      // Handle password mismatch here
      return;
    }

    try {
      await signupUser({
        title: 1,
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
      });

      // Set cookie upon successful signup
      // document.cookie = "filmmaker_access_token=true; path=/"; // Replace with your actual logic for cookie setting
      document.cookie = "filmbuyer_access_token=true; path=/"; // Replace with your actual logic for cookie setting

      // Navigate to the login page after successful signup
      navigate('/login');
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '3rem auto' }}>
      <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Please fill the form below to create a new account.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          type="text"
          name="first_name"
          value={values.first_name}
          onChange={handleChange}
          placeholder="First Name"
          labelClassName='custom-label'
        />
        {errors.first_name && (
          <p style={{ color: 'red' }}>{errors.first_name}</p>
        )}

        <Input
          type="text"
          name="last_name"
          value={values.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          labelClassName='custom-label'
        />
        {errors.last_name && (
          <p style={{ color: 'red' }}>{errors.last_name}</p>
        )}

        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && (
          <p style={{ color: 'red' }}>{errors.email}</p>
        )}

        <Input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password}</p>
        )}

        <Input
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
          <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
        )}

        {error && (
          <p style={{ color: 'red' }}>{error}</p>
        )}

        <Button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </Button>
      </form>
    </div>
  );
};

// Validation Function
const validate = (values) => {
  const errors = {};
  if (!values.first_name.trim()) {
    errors.first_name = 'First name is required';
  }
  if (!values.last_name.trim()) {
    errors.last_name = 'Last name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
};

export default Signup;
