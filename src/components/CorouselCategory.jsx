import React, { useState, useEffect } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import axios from 'axios';

const CorouselCategory = () => {
  const [categories, setCategories] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts');
        // Get first 5 unique categories
        const uniqueCategories = [...new Set(response.data.map(product => product.category))].slice(0, 5);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Split categories into chunks of 4 for each carousel item
  const chunkSize = 4;
  const categoryChunks = [];
  for (let i = 0; i < categories.length; i += chunkSize) {
    categoryChunks.push(categories.slice(i, i + chunkSize));
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      {categoryChunks.map((chunk, chunkIndex) => (
        <Carousel.Item key={chunkIndex}>
          <div className="d-flex justify-content-around">
            {chunk.map((category, index) => (
              <Card key={index} className="category-card" style={{ width: '18rem' }}>
                <Card.Img 
                  variant="top" 
                  src={`https://source.unsplash.com/random/300x200/?${category}`} 
                  alt={category}
                />
                <Card.Body>
                  <Card.Title className="text-center">{category}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CorouselCategory;