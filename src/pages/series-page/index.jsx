import React, { useState, useEffect } from 'react';

import AxiosApi from '../../services/api';

import Card from '../../components/Card';
import CardContainer from '../../components/CardContainer';

const SeriesPage = () => {
  const SeriesAPI = AxiosApi('tv');
  const [series, setSeries] = useState([]);

  const [isBlurred, setIsBlurred] = useState(false);

  const handleMouseEnter = () => {
    setIsBlurred(true);
  };

  const handleMouseLeave = () => {
    setIsBlurred(false);
  };

  const handleGetSeries = async () => {
    const response = await SeriesAPI.get('/');
    setSeries();
    console.log(response.data.results);
    setSeries(response.data.results);
  };

  useEffect(() => {
    handleGetSeries();
  }, []);
  return (
    <CardContainer>
      {series &&
        series.map((media) => (
          <Card
            mediaInfo={media}
            key={media.id}
            isBlurred={isBlurred}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        ))}
    </CardContainer>
  );
};

export default SeriesPage;
