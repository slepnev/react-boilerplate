import React from 'react';
import { Link } from 'react-router-dom';
import { LinkItem, LinkList } from './menu.styled';

const Menu = () => {
  return (
    <nav>
      <LinkList>
        <LinkItem>
          <Link to="/">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/login">Login</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/not-found">Not found</Link>
        </LinkItem>
      </LinkList>
    </nav>
  );
};

export default Menu;

