import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import CardContainer from '../../components/CardContainer';

import AxiosApi from '../../services/api';
const MoviesPage = () => {
  const MoviesAPI = AxiosApi('movie');
  const [movies, setMovies] = useState([]);

  const [isBlurred, setIsBlurred] = useState(false);

  const handleMouseEnter = () => {
    setIsBlurred(true);
  };

  const handleMouseLeave = () => {
    setIsBlurred(false);
  };

  const handleGetSeries = async () => {
    const response = await MoviesAPI.get('/');
    setMovies();
    console.log(response.data.results);
    setMovies(response.data.results);
  };

  useEffect(() => {
    handleGetSeries();
  }, []);
  return (
    <CardContainer>
      {movies &&
        movies.map((media) => (
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

export default MoviesPage;
