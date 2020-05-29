import React from 'react';
import head from './Header.module.css';

const Header = () => {
    return (
        <header className={head.header}>
            <img src='https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png' />
        </header>
    );
}
export default Header;