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
  height: auto;
`;

const Gallery = () => {
    const images = [
        { id: 1, src: 'https://via.placeholder.com/400x400' },
        { id: 2, src: 'https://via.placeholder.com/200x300' },
        { id: 3, src: 'https://via.placeholder.com/300x200' },
        { id: 4, src: 'https://via.placeholder.com/500x500' },
      ];

  return (
    <GalleryContainer>
      {images.map(image => (
        <Image key={image.id} src={image.src} alt={`Image ${image.id}`} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
