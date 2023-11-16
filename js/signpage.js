
const passwordInputunsure = document.getElementById("password-unsure");
const passwordToggleunsure = document.getElementById("password-toggle-unsure");

let passwordVisibleunsure = false;

passwordToggleunsure.addEventListener("click", () => {
    passwordVisibleunsure = !passwordVisibleunsure;
    if (passwordVisibleunsure) {
        passwordInputunsure.type = "text";
        passwordToggleunsure.innerHTML = '<img src="img/eye-outline.svg" alt="Toggle Password">';
    } else {
        passwordInputunsure.type = "password";
        passwordToggleunsure.innerHTML = '<img src="img/eye-off-outline.svg" alt="Toggle Password">';
    }
});



const passwordInputsure = document.getElementById("password-sure");
const passwordTogglesure = document.getElementById("password-toggle-sure");

let passwordVisiblesure = false;

passwordTogglesure.addEventListener("click", () => {
    passwordVisiblesure = !passwordVisiblesure;
    if (passwordVisiblesure) {
        passwordInputsure.type = "text";
        passwordTogglesure.innerHTML = '<img src="img/eye-outline.svg" alt="Toggle Password">';
    } else {
        passwordInputsure.type = "password";
        passwordTogglesure.innerHTML = '<img src="img/eye-off-outline.svg" alt="Toggle Password">';
    }
});


const signtologin = document.getElementById("sign-to-login");

signtologin.addEventListener("click", () => {
    window.location.href = "LogPage.html";
});





const signButton = document.getElementById("sign-button");
// 添加按钮点击事件监听器
signButton.addEventListener("click", function () {
    // 获取用户输入的用户名和密码
    const usernameSign = document.getElementById("username").value;
    const passwordunsure = document.getElementById("password-unsure").value;
    const passwordsure = document.getElementById("password-sure").value;

    // 验证用户名和密码
    if (passwordsure == passwordunsure) {
        // 密码和密码匹配
        // 从本地存储中获取现有的用户名和密码数据
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // 将新的用户名和密码添加到数据中
        users.push({ usernameSign, passwordsure });

        // 将更新后的数据保存回本地存储
        localStorage.setItem("users", JSON.stringify(users));

        // 提示用户注册成功
        alert("注册成功！");
    } else {
        alert("注册失败，请检查用户名和密码。");
    }
});