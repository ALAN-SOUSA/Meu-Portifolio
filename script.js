// Script para criar usuário
if (document.getElementById('signup')) {
    const form = document.getElementById('signup');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPwd = document.getElementById('confirm');
    const show = document.getElementById('show');
    const msg = document.getElementById('msg');

    show.addEventListener('change', () => {
        const t = show.checked ? 'text' : 'password';
        password.type = t;
        confirmPwd.type = t;
    });
      const btn = form.querySelector('button');
btn.classList.add('clicked');
    function checkMatch() {
        if (!confirmPwd.value) { msg.textContent = ''; return true; }
        if (password.value === confirmPwd.value) {
            msg.textContent = '';
            return true;
        } else {
            msg.textContent = 'Senhas não coincidem.';
            return false;
        }
    }

    password.addEventListener('input', checkMatch);
    confirmPwd.addEventListener('input', checkMatch);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // HTML5 validation
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        if (!checkMatch()) {
            confirmPwd.focus();
            return;
        }
        // Salva os dados no localStorage
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
        console.log('Conta criada para: ' + username.value);
        form.reset();
        msg.textContent = '';

        document.body.classList.add('fade-out');
setTimeout(() => {
window.location.href = 'login.html';
}, 600);

    });
}

// Script para login
if (document.getElementById('login')) {
    const loginForm = document.getElementById('login');
    const loginUsername = document.getElementById('login-username');
    const loginPassword = document.getElementById('login-password');
    const loginMsg = document.getElementById('login-msg');
     
        loginMsg.classList.add('message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtém os dados armazenados no localStorage
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        

        // Verifica se os dados coincidem
        loginMsg.classList.add('show');
setTimeout(() => loginMsg.classList.remove('show'), 2000);
        if (loginUsername.value === storedUsername && loginPassword.value === storedPassword) {
            loginMsg.textContent = 'Login bem-sucedido!';
            loginMsg.style.color = 'green';

            loginMsg.classList.add('show');
            setTimeout(() => loginMsg.classList.remove('show'), 2000);

             document.body.classList.add('fade-out');
            setTimeout(() => {
            document.body.classList.add('fade-out');
            setTimeout(() => {
            window.location.href = 'curriculo.html';
            }, 600);
            }, 700);
 
        } else {
            loginMsg.textContent = 'Usuário ou senha incorretos.';
            loginMsg.style.color = 'red';

            loginMsg.classList.add('show');
setTimeout(() => loginMsg.classList.remove('show'), 2000);
        }
    });
}