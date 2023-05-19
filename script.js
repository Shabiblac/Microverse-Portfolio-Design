const desktopMenu = document.querySelector('.desktop-menu');
const closeMobile = document.querySelector('.cancle-mobile');
const mobileMenu = document.querySelector('.menu');
const coverMenu = document.querySelector('.nav-cover');
const hero = document.querySelector('.hero-section');

const tags = document.querySelectorAll('.menu-link');
tags.forEach((tag) => {
  tag.addEventListener('click', () => {
    coverMenu.classList.toggle('cover-mobile');
    mobileMenu.classList.remove('hide');
    desktopMenu.classList.toggle('hide');
    closeMobile.classList.toggle('hide');
    hero.classList.toggle('blur');
  });
});

function toggleMenu() {
  coverMenu.classList.toggle('cover-mobile');
  mobileMenu.classList.toggle('hide');
  closeMobile.classList.toggle('hide');
  desktopMenu.classList.toggle('hide');
  hero.classList.toggle('blur');
}

mobileMenu.addEventListener('click', toggleMenu);

function closeMenu() {
  closeMobile.classList.toggle('hide');
  hero.classList.toggle('blur');
  coverMenu.classList.toggle('cover-mobile');
  desktopMenu.classList.toggle('hide');
  mobileMenu.classList.toggle('hide');
}
closeMobile.addEventListener('click', closeMenu);

// FORM VALIDATION
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const submitError = document.querySelector('#submit-error');
function validate() {
  const name = document.getElementById('user-name').value;
  if (name.lenght === 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Invalid name';
    return false;
  }
  nameError.innerHTML = '<img src="images/checkbox-checked-solid-24 (1).png" alt="check icon">';
  return true;
}

function validateEmail() {
  const email = document.getElementById('user-email').value;

  if (email.lenght === 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if (!email.match(/^([a-za-z0-9_\-.])+@([a-za-z0-9_\-.])+\.([a-za-z]{2,4})$/)) {
    emailError.innerHTML = 'Invalid email';
    return false;
  }
  emailError.innerHTML = '<img src="images/checkbox-checked-solid-24 (1).png" alt="check icon">';
  return true;
}

// LOCAL SRORAGE
const formName = document.getElementById('user-name');
const email = document.getElementById('user-email');
const formText = document.getElementById('user-text');

const localData = () => {
  const userData = {
    userName: formName.value,
    UserMail: email.value,
    txt: formText.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
};
function validateForm() {
  if (!validate() || !validateEmail()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix errors to submit';
    setTimeout(() => { submitError.style.display = 'none'; }, 3000);
    return false;
  }
  localData();
  return true;
}
validateForm();

const storedDetails = () => {
  if (localStorage.getItem('formData')) {
    const formData = JSON.parse(localStorage.getItem('formData'));
    formName.value = formData.formName;
    email.value = formData.email;
    formText.value = formData.formText;
  }
};

document.getElementById('user-name').addEventListener('change', localData);
document.getElementById('user-email').addEventListener('change', localData);
document.getElementById('user-text').addEventListener('change', localData);

// Event listener for form submission
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  localData();
});

window.onload = storedDetails();