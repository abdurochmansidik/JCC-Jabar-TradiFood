// let regitrasiNama = document.getElementById('registrasiNama')
// let regitrasiEmail = document.getElementById('registrasiEmail')
// let regitrasiPassword = document.getElementById('registrasiPassword')
// let regitrasiRole = document.getElementById('registrasiRole')
// let regitrasiBtn = document.getElementById('registrasiBtn')

// // regitrasiBtn.onclick = () => {
// //     alert (`Nama : ${registrasiNama.value}`)
// //     alert (`Email : ${registrasiEmail.value}`)
// //     alert (`Password : ${registrasiPassword.value}`)
// //     alert (`Role : ${registrasiRole.value}`)
// //     alert ('Sukses')
// // }

// regitrasiBtn.onclick = () => {
//     if (localStorage.getItem('registrasiData')) {
//         var registrasiData = JSON.parse(localStorage.getItem('registrasiData'))
//     } else {
//         var registrasiData = []
//     }
//     regitrasiRole = parseInt (regitrasiRole.value)
//     registrasiData.push ({
//         nama:regitrasiNama.value,
//         email:regitrasiEmail.value,
//         password:regitrasiPassword.value,
//         role:regitrasiRole,
//     })
//     localStorage.setItem('registrasiData',JSON.stringify(registrasiData))
//     regitrasiNama.value = ''
//     regitrasiEmail.value = ''
//     regitrasiPassword.value = ''
//     regitrasiRole.value = 'init'
//     alert(`${regitrasiNama.value} Anda telah berhasil mendaftar !`)
//     console.log("udh smpeeeeee");
//     window.location.href = 'login.html'
// }