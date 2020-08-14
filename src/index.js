import $ from 'jquery';
import shoppingList from './shopping-list';
import './index.css';

function main() {
  console.log('DOM is loaded');

  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

const main2 = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main2);
