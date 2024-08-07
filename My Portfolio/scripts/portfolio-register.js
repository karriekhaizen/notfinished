document.getElementById('register').addEventListener('submit', function(event) {
  event.preventDefault();

    const fullName = document.getElementById('fullName').value;

    const userName = document.getElementById('userName').value;

    const email = document.getElementById('email').value;

    const password = document.getElementById('password').value;


    localStorage.setItem('saveUsername', userName);
    localStorage.setItem('savePasswrd', password);
    localStorage.setItem('saveEmail', email);
    localStorage.setItem('saveFullname', fullName);

    document.getElementById('image-register-container').innerHTML = ` <img class="image-register" src="/pictures/p2.jpg" alt="">`;
});

