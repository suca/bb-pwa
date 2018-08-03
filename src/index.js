import React from 'react';
import ReactDOM from 'react-dom';
//require('./main.scss');
import './main.scss';
import coupon from  './assets/coupon-background.jpg';
const title = 'My way... My mode...';
const description = 'Oh I have no connection but how can I still see the BetBright site!? cool! :P';

ReactDOM.render(
    <div>
        <h2 className='pwa-bb-title'> { title } </h2>
        <img src={coupon} alt=""/>
        <h4 className='pwa-bb-description'> { description } </h4>
    </div>,
    document.getElementById('app')
);

/**
 * Links to check it out
 *
 * Current Basic environment:
 * https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
 *
 * https://engineering.musefind.com/build-your-first-progressive-web-app-with-react-8e1449c575cd
 * https://github.com/webpack-contrib/sass-loader#apply-via-webpack-config
 * https://codeburst.io/simple-beginner-guide-for-webpack-2-0-from-scratch-part-ii-66beb5dbccc2
 */

