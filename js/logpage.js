
const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("password-toggle");

let passwordVisible = false;

passwordToggle.addEventListener("click", () => {
    passwordVisible = !passwordVisible;
    if (passwordVisible) {
        passwordInput.type = "text";
        passwordToggle.innerHTML = '<img src="img/eye-outline.svg" alt="Toggle Password">';
    } else {
        passwordInput.type = "password";
        passwordToggle.innerHTML = '<img src="img/eye-off-outline.svg" alt="Toggle Password">';
    }
});




const logintosign = document.getElementById("login-to-sign");

logintosign.addEventListener("click", () => {
    window.location.href = "SignPage.html";
});




// 获取按钮、输入的用户名和密码
const loginButton = document.getElementById("login-button");
const loginUsernameInput = document.getElementById("username");
const loginPasswordInput = document.getElementById("password");

// 添加按钮点击事件监听器
loginButton.addEventListener("click", function () {

    // 获取用户输入的用户名和密码
    const loginUsername = loginUsernameInput.value;
    const loginPassword = loginPasswordInput.value;
    // 从本地存储中获取已注册的用户名和密码数据
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 检查用户名和密码是否匹配
    const user = users.find(user => user.usernameSign === loginUsername && user.passwordsure === loginPassword);

    if (user) {
        // 登录成功
        ert("登录成功!");
    } else {
        // 登录失败
        alert("登录失败，请检查用户名和密码。");
    }
});