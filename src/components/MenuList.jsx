import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';

export default function MenuList({ menuData }) {
  return (
    <main>
      <section className="nutrients">
        <h1>PICK YOUR FOOD</h1>
        <p>
          We deliver fresh, delicious goodness twice a week, so go on and fill up your basket for
          our next deliveries.
        </p>
      </section>

      <section className="menus">
        {menuData && menuData.map((menu) => {
          return <Menu key={menu.id} menu={menu} />;
        })}
      </section>
    </main>
  );
};

MenuList.propTypes = {
  menuData: PropTypes.arrayOf(PropTypes.object),
};
