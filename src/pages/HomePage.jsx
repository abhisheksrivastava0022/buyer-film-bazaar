import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData, fetchBannerData, fetchHeaderData } from '../store/actions/homeActions';
import Banner from '../components/Banner';
import Header from '../components/Header';
import logo from '../public/assets/images/home-page-logo/logo.png';
const HomePage = () => {
  const dispatch = useDispatch();
  const { homeData, headerData, loading, error, title, subtitle, videoSrc } = useSelector(state => state.home);

  useEffect(() => {
    dispatch(fetchHomeData());
    dispatch(fetchBannerData());
    dispatch(fetchHeaderData());
  }, []);

  if (loading.home || loading.banner || loading.header) return <p>Loading...</p>;
  if (error.home || error.banner || error.header) return <p>Error: {error.home || error.banner || error.header}</p>;



  return (
    <div>
      {headerData && (
      <Header logo={logo} headerData={headerData} />
    )}
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

export default HomePage;
