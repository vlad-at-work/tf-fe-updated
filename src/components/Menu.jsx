import React from "react";
import PropTypes from 'prop-types';

export default function Menu({ menu }) {
  return (
    <article className="menu">
      <h1>{menu?.name}</h1>
      <img src={menu?.photo} alt="menu description" />
      <ul className="instructions">
        <li>{menu?.description}</li>
        <li>{menu?.recipes?.length} recipes</li>
      </ul>
    </article>
  );
};

Menu.propTypes = {
  menu: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    recipes: PropTypes.arrayOf(PropTypes.object),
  }),
};
