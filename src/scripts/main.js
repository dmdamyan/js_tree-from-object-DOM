'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const key1 in food) {
    const ol = document.createElement('ol');

    ol.textContent = key1;
    document.body.appendChild(ol);

    if (typeof food[key1] === 'object') {
      for (const key2 in food[key1]) {
        if (key2 !== undefined) {
          const li1 = document.createElement('li');

          li1.textContent = key2;

          ol.appendChild(li1);

          for (const key3 in food[key1][key2]) {
            if (typeof key3 === 'string') {
              const li2 = document.createElement('li');

              li2.textContent = key3;

              li1.appendChild(li2);
            }
          }
        }
      }
    }
  }
}

createTree(tree, food);
