import React from 'react';

import { Container, Title, Overview, Image, MovieInfoWrapper } from './styles';

const Card = ({ mediaInfo, handleMouseEnter, handleMouseLeave, isBlurred }) => {
  const { title, name, overview, poster_path } = mediaInfo;
  const ImagePath = `https://image.tmdb.org/t/p/w500`;

  return (
    <>
      <Container
        isBlurred={isBlurred}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MovieInfoWrapper>
          <Image src={`${ImagePath}${poster_path}`} />
          <Title>{title || name}</Title>
        </MovieInfoWrapper>
        <Overview>{overview}</Overview>
      </Container>
    </>
  );
};

export default Card;
