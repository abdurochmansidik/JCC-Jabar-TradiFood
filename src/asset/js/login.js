// let loginEmail = document.getElementById ('loginEmail')
// let loginPassword = document.getElementById ('loginPassword')
// let loginBtn = document.getElementById ('loginBtn')

// loginBtn.onclick = () => {
//     const data = JSON.parse(localStorage.getItem("registrasiData"));
//     const isRegistered = data.findIndex((value, index) => {
//         return value.email === loginEmail.value && value.password == loginPassword.value
//     })
//     if (isRegistered == -1) {
//         alert('Username atau Password Anda Salah !')
//     }
//     if (data[isRegistered].role == 1) {
//         window.location.href = '/landing-page-login-admin.html'
//     } else {
//         window.location.href = '/landing-page-login-user.html'
//     }
// };