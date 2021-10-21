import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = ({ src, url, title }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${url}`);
  };
  return (
    <div className="box" onClick={handleClick}>
      <img src={src} alt="" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
  );
};

export default Card;
