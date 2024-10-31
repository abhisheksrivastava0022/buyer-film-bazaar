import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useForm from '../hooks/useForm';
import useAuth from '../hooks/useAuth';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const { loginUser, loading, error } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate
  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      email: '',
      password: '',
    },
    validate
  );

  const onSubmit = async () => {
    try {
      // Call loginUser to handle login
      await loginUser({
        email: values.email,
        password: values.password,
      });

      // Set cookie upon successful login
      // document.cookie = "filmmaker_access_token=true; path=/"; // Replace with your actual logic for cookie setting
      document.cookie = "filmbuyer_access_token=true; path=/"; // Replace with your actual logic for cookie setting
      
      // Navigate to dashboard after successful login
      navigate('/dashboard'); // Update the path as necessary

    } catch (err) {
      // Handle login error
      console.error('Login error:', err);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '3rem auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && (
          <p style={{ color: 'red', marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
            {errors.email}
          </p>
        )}

        <Input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && (
          <p style={{ color: 'red', marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
            {errors.password}
          </p>
        )}

        {error && (
          <p style={{ color: 'red', marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
            {error}
          </p>
        )}

        <Button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </div>
  );
};

// Validation Function
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

export default Login;
