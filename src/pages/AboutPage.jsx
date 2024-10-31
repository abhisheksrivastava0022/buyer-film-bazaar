import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData, fetchBannerData } from '../store/actions/homeActions';
import Banner from '../components/Banner';

const AboutPage = () => {
  const dispatch = useDispatch();
  const { homeData, loading, error, title, subtitle, videoSrc } = useSelector(state => state.home);

  useEffect(() => {
    dispatch(fetchHomeData());
    dispatch(fetchBannerData());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Pass the subtitle correctly */}
      <Banner title={title} subtitle={subtitle} videoSrc={videoSrc} />
      
      {homeData && (
        <div>
          <h1>{homeData.title}</h1>
          <p>{homeData.description}</p>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
