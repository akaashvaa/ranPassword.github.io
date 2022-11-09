const password = document.querySelector('.input-text');
const copyPassword = document.querySelector('.copy-icon');
const slider = document.querySelector('.slider');
const sliderNumber = document.querySelector('.span-val');
const generateBtn = document.querySelector('.teer');

/////////////////////////////////////////////////////////////

let allCharacters =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$%&#@';
// slider and it's value

sliderNumber.innerText = slider.value;
slider.addEventListener('input', () => {
  sliderNumber.innerText = slider.value;
});

generateBtn.addEventListener('click', function () {
  let newPassword = '';
  for (let i = 0; i < slider.value; i++) {
    let randomNumber = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters[randomNumber];
  }
  password.value = newPassword;
  if (copyPassword.classList.contains('fa-file-circle-check'))
    copyPassword.classList.replace('fa-file-circle-check', 'fa-copy');
});
copyPassword.addEventListener('click', () => {
  navigator.clipboard.writeText(password.value);
  copyPassword.classList.replace('fa-copy', 'fa-file-circle-check');
});
