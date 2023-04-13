import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 1rem;
  margin: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Gallery = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pet/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <GalleryContainer>
      {pets.map((pet) => (
        <Image key={pet.id} src={pet.image} alt={pet.name} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
