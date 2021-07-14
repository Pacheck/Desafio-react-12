
import React, { useState, useEffect } from 'react';

import api from '../services/api';

import { Container, CardsWrapper, ActionsWrapper } from './styles';

import Card from '../components/Card';

import Button from '../components/Button';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isBlurred, setIsBlurred] = useState(false);

  const handleGetMoviesFromAPI = async() => {
    const response = await api.get(`/page=${page}`);
    console.log(response);
    setMovies(response.data.results)
  }

  const handleActionPage = (actionValue) => {
    if(page + actionValue > 1)
      setPage(prevState => prevState + actionValue)
  };

  const handleMouseEnter = () => {
    setIsBlurred(true);
  }

  const handleMouseLeave = () => {
    setIsBlurred(false);
  }

  useEffect(() => {
    handleGetMoviesFromAPI();
  }, [page])

  return (
    <Container>
      <CardsWrapper>
        { 
          movies.map(movie => (
            <Card movieInfo={movie} key={movie.id} isBlurred={isBlurred} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
          )) 
        }
      </CardsWrapper>
      <ActionsWrapper>
        <Button text="Previous page" handleClick={() => handleActionPage(-1)} />
        <Button text="Next page" handleClick={() => handleActionPage(1)} />
        {/* Fiz o sistema de paginação pra depois descobrir que independente da página que eu faça request, sempre retorna o mesmo JSON *triste* */}
      </ActionsWrapper>
    </Container>
  );
}

export default App;
