const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.email-area');
const messageInput = document.querySelector('.message-area');
const formData = { email: '', message: '' };
const keyLocal = 'feedback - form - state';
const localUserDate = localStorage.getItem(keyLocal);
if (localUserDate !== null) {
  const localDate = JSON.parse(localUserDate);
  formData.email = localDate.email;
  formData.message = localDate.message;
}
emailInput.value = formData.email;
messageInput.value = formData.message;
form.addEventListener('input', event => {
  const name = event.target.name;
  const value = event.target.value.trim();
  console.log(name, value);
  formData[name] = value;
  const localValue = JSON.stringify(formData);
  localStorage.setItem(keyLocal, localValue);
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(keyLocal);
    form.reset();
    formData.email = '';
    formData.message = '';
  }
});
