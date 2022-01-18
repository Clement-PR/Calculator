const buttons = document.querySelectorAll('.btn');
const result = document.querySelector('h3');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    result.textContent += e.target.id

  })
})

equal.addEventListener('click', (e) => {
  result.textContent = eval(result.textContent);
})

clear.addEventListener('click', () => {
  result.textContent = "";
})

/* ********************** END ********************* */