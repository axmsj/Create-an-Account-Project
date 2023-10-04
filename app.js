const RegistrationForm = document.getElementById('registrationForm');
const fNameInput = document.getElementById('fname');
const lNameInput = document.getElementById('lname');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function () {
  const fNameValue = fNameInput.value;
  const lNameValue = lNameInput.value;
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;

  // Validate the input fields (you can add your own validation logic here)
  const nameRegex = /^[A-Za-z]+$/; // Test for letter for First and Last name.
  const usernameRegex = /^[A-Za-z0-9_]+$/; // test for username letters and numbers.
  const passwordRegex = /^[A-Za-z0-9!@#$%^&*()_+]+$/; // password test for letters. numbers, and symbols.
  let isValid = true;
  let validationMessage = '';

  // Perform some action with the values (e.g., send them to a server)
  if (!nameRegex.test(fNameValue, lNameValue)) {
    isValid = false;
    validationMessage += 'Invalid Try again. Letters only';
  }
  if (!usernameRegex.test(usernameValue) || usernameValue.length < 8) {
    isValid = false;
    validationMessage += 'Username must be at last 8 characters or more!';
  }
  if (!passwordRegex.test(passwordValue) || passwordValue.length < 8) {
    isValid = false;
    validationMessage += 'Password must be 8 characters or more!';
  }
  if (!isValid) {
    alert(validationMessage);
  } else {
    const message = `First Name: ${fNameValue}\nLast Name: ${lNameValue}\nUsername: ${usernameValue}\nPassword: ${passwordValue}`;
    alert(message);
  }
});
