/*
document.addEventListener('DOMContentLoaded', () => {
  const loginContainer = document.getElementById('login-container');
  const signupContainer = document.getElementById('signup-container');
  const welcomeContainer = document.getElementById('welcome-container');

  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const displayUser = document.getElementById('display-user');
  const logoutBtn = document.getElementById('logout-btn');

  const showSignupLink = document.getElementById('show-signup');
  const showLoginLink = document.getElementById('show-login');

  // Show correct screen on load
  if (localStorage.getItem('isLoggedIn') === 'true') {
    showWelcome(localStorage.getItem('username'));
  } else {
    showLogin();
  }

  // Show sign up form
  showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.classList.add('hidden');
    signupContainer.classList.remove('hidden');
  });

  // Show login form
  showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
  });

  // Handle sign up
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
      alert('Username already exists!');
      return;
    }

    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful! You can now log in.');
    signupForm.reset();
    showLogin();
  });

  // Handle login
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username] === password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      showWelcome(username);
    } else {
      alert('Invalid username or password.');
    }
  });

  // Logout
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    showLogin();
  });

  // Show welcome screen
  function showWelcome(username) {
    loginContainer.classList.add('hidden');
    signupContainer.classList.add('hidden');
    welcomeContainer.classList.remove('hidden');
    displayUser.textContent = username;
  }

  // Show login screen
  function showLogin() {
    loginContainer.classList.remove('hidden');
    signupContainer.classList.add('hidden');
    welcomeContainer.classList.add('hidden');
    loginForm.reset();
  }
});
*/

document.addEventListener('DOMContentLoaded', () => {
  const loginContainer = document.getElementById('login-container');
  const signupContainer = document.getElementById('signup-container');
  const welcomeContainer = document.getElementById('welcome-container');

  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const displayUser = document.getElementById('display-user');
  const logoutBtn = document.getElementById('logout-btn');

  const showSignupLink = document.getElementById('show-signup');
  const showLoginLink = document.getElementById('show-login');

  // Show correct screen on load
  if (localStorage.getItem('isLoggedIn') === 'true') {
    const username = localStorage.getItem('username');
    showWelcome(username);
  } else {
    showLogin();
  }

  // Show sign up form
  showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.classList.add('hidden');
    signupContainer.classList.remove('hidden');
  });

  // Show login form
  showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
  });

  // Handle sign up
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const email = document.getElementById('signup-email').value;
    const dob = document.getElementById('signup-dob').value;
    const role = document.getElementById('signup-role').value;
    const branch = document.getElementById('signup-branch').value;

    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
      alert('Username already exists!');
      return;
    }

    users[username] = {
      password,
      email,
      dob,
      role,
      branch
    };

    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful!');
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    window.location.href = "tpc.html";
  });

  // Handle login
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username] && users[username].password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      showWelcome(username);
      window.location.href = "tpc.html";
    } else {
      const errorMessage = document.getElementById('login-error');
      errorMessage.textContent = "Invalid username or password. Please try again.";
    }
  });

  // Logout
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    showLogin();
  });

  // Show welcome screen
  function showWelcome(username) {
    loginContainer.classList.add('hidden');
    signupContainer.classList.add('hidden');
    welcomeContainer.classList.remove('hidden');
    displayUser.textContent = username;

    // Optional: Log other stored info in console or use it somewhere
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const userData = users[username];

    document.getElementById('email-display').textContent = `Email: ${userData.email}`;
  document.getElementById('dob-display').textContent = `Date of Birth: ${userData.dob}`;
  document.getElementById('role-display').textContent = `Role: ${userData.role}`;
  document.getElementById('branch-display').textContent = `Branch: ${userData.branch}`;
    console.log('User Info:', userData);
  }

  // Show login screen
  function showLogin() {
    loginContainer.classList.remove('hidden');
    signupContainer.classList.add('hidden');
    welcomeContainer.classList.add('hidden');
    loginForm.reset();
  }
});

