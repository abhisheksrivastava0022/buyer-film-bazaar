import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../store/actions/filmActions';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get films, loading, and error from Redux state
  const { films, loading, error } = useSelector((state) => state.films);

  useEffect(() => {
    // const authCookie = document.cookie.split('; ').find(row => row.startsWith('filmmaker_access_token'));
    const authCookie = document.cookie.split('; ').find(row => row.startsWith('filmbuyer_access_token'));
    
    if (!authCookie) {
      navigate('/login');
    } else {
      dispatch(fetchFilms());
    }
  }, [navigate, dispatch]);

  return (
    <div style={{ maxWidth: '1200px', margin: '2rem auto', padding: '2rem' }}>
      <h5>Welcome to your Dashboard!</h5>
      <p>This is your project listing.</p>

      {/* Show loading or error state */}
      {loading && <div>Loading films...</div>}
      {error && <div>Error: {error}</div>}

      {/* Show films in a grid of stylish cards */}
      {films.length > 0 ? (
        <Grid container spacing={3}>
          {films.map((film) => (
            <Grid item xs={12} sm={6} md={4} key={film.id}>
              <Card 
                variant="outlined"
                sx={{
                  minHeight: '280px',
                  borderRadius: '15px', // Rounded corners
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
                  transition: 'transform 0.3s ease-in-out', // Animation on hover
                  '&:hover': {
                    transform: 'scale(1.05)', // Slight zoom on hover
                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)', // Stronger shadow on hover
                  },
                  backgroundColor: '#f9f9f9', // Light background
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {film.title} ({film.english_title})
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    <strong>Duration:</strong> {film.duration} minutes
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    <strong>Completion Year:</strong> {film.year_of_completion}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    <strong>Film Complete:</strong> {film.is_film_complete ? 'Yes' : 'No'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : !loading && (
        <p>No films available.</p>
      )}
    </div>
  );
};

export default Dashboard;
