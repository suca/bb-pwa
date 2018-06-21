import React from 'react';
import ReactDOM from 'react-dom';
//require('./main.scss');
import './main.scss';
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
    <div>{title}</div>,
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

