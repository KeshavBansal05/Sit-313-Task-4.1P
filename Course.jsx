

import React from 'react';
import './Course.css'; // Import the corresponding CSS file

const FeaturedArticles = () => {
    const articles = [
      {
        name: 'The Great Gatsby',
        description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraways interactions with mysterious millionaire Jay Gatsby and Gatsbys obsession to reunite with his former lover, Daisy Buchanan',
        rating: 4.5,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg',
      },
      {
        name: 'Beloved',
        description: 'Beloved is a 1987 novel by American novelist Toni Morrison. Set in the period after the American Civil War, the novel tells the story of a dysfunctional family of formerly enslaved people whose Cincinnati home is haunted by a malevolent spirit',
        rating: 4.8,
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWNr8JJo6yKLjSlxsOMZkHICpInZmOWLSch2raLfLsHpEZXbQ-',
      },
      {
        name: 'Lolita',
        description: 'Lolita is a 1955 novel written by Russian-American novelist Vladimir Nabokov that addresses the controversial subject of hebephilia.',
        rating: 4.2,
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRikRhFvkJtM_NMAd5dClj-jUefW4KhAqRpN1oc8piaGpu20xS',
      },
    ];
    const tutorials = [
      {
        title: 'C# Course',
        description: 'Best For Begginers!',
        link: 'https://www.youtube.com/watch?v=CgkZ7MvWUAA&pp=ygUMUmVhY3QgQ291cnNl',
        image: 'https://img.youtube.com/vi/CgkZ7MvWUAA/maxresdefault.jpg', 
      },
      {
        title: 'Fastest way to become a Web Developer',
        description: 'Best course for Web Developer!',
        link: 'https://youtu.be/NWnBxQjssvQ?feature=shared',
        image: 'https://img.youtube.com/vi/NWnBxQjssvQ/maxresdefault.jpg', 
      },
      {
        title: 'React Tutorial',
        description: 'Learn React by building eight real-world projects and solving 140+ coding challenges.',
        link: 'https://youtu.be/bMknfKXIFA8?feature=shared',
        image: 'https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg', 
      },
    ];


    return (
      <div className="featured-articles">
        <h2>Featured Articles</h2>
        <div className="article-list">
          {articles.map((article, index) => (
            <div className="article" key={index}>
              <img
                src={article.image}
                alt={article.name}
                className="article-image"
              />
              <h3>{article.name}</h3>
              <p>{article.description}</p>
              <div className="rating">Rating: {article.rating}</div>
            </div>
          ))}
        </div>
        <button className="see-more-button">See More Articles</button>
        <div className="featured-tutorials">
          <h2 className="section-title">Featured Tutorials</h2>
          <div className="tutorial-list">
            {tutorials.map((tutorial, index) => (
        
        
        <div className="tutorial" key={index}>
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="tutorial-image"
                />
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
                <a
                  href={tutorial.link}
                  className="tutorial-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Tutorial
                </a>
              </div>
            ))}
          </div>
        </div>
        <button className="see-more-tutorials">See More Tutorials</button>
  
        <div className="newsletter-signup">
          <h2 className="section-title">Sign Up for the Newsletter</h2>
          <p>Stay updated with the latest articles and tutorials.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your Email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default FeaturedArticles;