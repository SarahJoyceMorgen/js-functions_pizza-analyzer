console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value
  const pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1, pizzaSize2)
  updatePizzaDisplay (pizza1, pizzaSize1)
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value
  const pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1,pizzaSize2)
  updatePizzaDisplay (pizza2, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const radius1 = diameter1 / 2
  const quad1 = radius1 * radius1
  const area1 = Math.PI * quad1

  const radius2 = diameter2 / 2
  const quad2 = radius2 * radius2
  const area2 = Math.PI * quad2
  const gain = (area2 - area1) / area1 * 100
  output.textContent = Math.round(gain);
}


// Task 2
function updatePizzaDisplay(pizzaElement, newSize) {
  const displaySize =newSize / 24* 100;
  pizzaElement.style.width = displaySize + "px";
}

// Task 3
// define the function updateOutputColor here
