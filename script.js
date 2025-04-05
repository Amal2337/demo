function clickSubmitButton(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const welcomemessage = document.getElementById('welcome-message');
    welcomemessage.textContent = 'Welcome,' + username + '!';
    welcomemessage.style.display = 'block';
}