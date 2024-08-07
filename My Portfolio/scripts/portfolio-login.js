
function loginPortfolio(){
  document.querySelector('.js-login-button')
    .innerHTML = 'Login Sucess';
  alert('Welcome to My Portfolio');
  }
  
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the input values
    const username = document.getElementById('username').value;
    
    const password = document.getElementById('password').value;
    
    // Hardcoded credentials for demonstration purposes
    const correctUsername = username;
    const correctPassword = password;
    
    // Save the username and password (for demonstration purposes, using localStorage)
    localStorage.setItem('savedUsername', username);
    localStorage.setItem('savedPassword', password);
    
    // Check if the credentials are correct
    if (username === correctUsername && password === correctPassword) {
        document.getElementById('message').innerText = 'Login successful!';
        document.getElementById('message').innerText.style.color = 'green';
    } else {
        document.getElementById('message').innerText = 'Incorrect username or password.';
    }
  });
  
  /* 
  FILTERING LIST OF NAMES
  
  const onSearch = () => {
    const input = document.querySelector("#search");
    const filter = input.value.toUpperCase();
    const list = document.querySelectorAll("#list li");
  
    list.forEach((el) => {
      const text = el.textContent.toUpperCase();
      el.style.display = text.includes(filter) ? "" : "none";
    });
  }; */