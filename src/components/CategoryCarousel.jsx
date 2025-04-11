import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CategoryCarousel = () => {
  const navigate = useNavigate();
  
  // Categories data (you can replace with your actual categories)
  const categories = [
    { name: 'Fruits & Vegetables', image: '/images/categories/fruits-vegetables.jpg' },
    { name: 'Dairy, Bread & Eggs', image: '/images/categories/dairy.jpg' },
    { name: 'Atta, Rice, Oil & Dals', image: '/images/categories/atta-rice.jpg' },
    { name: 'Meat, Fish & Eggs', image: '/images/categories/meat.jpg' },
    { name: 'Masala & Dry Fruits', image: '/images/categories/masala-dryfruits.jpg' },
    { name: 'Breakfast & Sauces', image: '/images/categories/breakfast.jpg' },
    { name: 'Packaged Food', image: '/images/categories/packaged-food.jpg' },
    { name: 'Cold Drinks & Juices', image: '/images/categories/drinks.jpg' }
  ];

  // Split categories into chunks of 4 for carousel slides
  const chunkSize = 4;
  const categoryChunks = [];
  for (let i = 0; i < categories.length; i += chunkSize) {
    categoryChunks.push(categories.slice(i, i + chunkSize));
  }

  return (
    <div className="category-carousel mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title">Shop by Category</h2>
        <Button 
          variant="zepto-outline" 
          onClick={() => navigate('/categories')}
        >
          View All
        </Button>
      </div>
      
      <Carousel indicators={false} interval={null}>
        {categoryChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around">
              {chunk.map((category, idx) => (
                <Card 
                  key={idx} 
                  className="category-card" 
                  style={{ width: '18rem' }}
                  onClick={() => navigate(`/categories/${category.name.toLowerCase().replace(/ /g, '-')}`)}
                >
                  <Card.Img 
                    variant="top" 
                    src={category.image} 
                    alt={category.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/categories/placeholder.jpg';
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">{category.name}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;