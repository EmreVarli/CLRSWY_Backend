$(document).ready(function () {
  setTimeout(fillFormInput, 500);
 
});

const fillFormInput = () => {
  let email = document.getElementById("email").value = "eve.holt@reqres.in";
  let password = document.getElementById("password").value = "pistol";
  if (email != "" && password != "") {
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
    window.sessionStorage.setItem("email", email);
    window.sessionStorage.setItem("password", password);
    // window.localStorage.setItem("userData", EncryptStringAES(email + "|" + password));
    // window.sessionStorage.setItem("userData", EncryptStringAES(email + "|" + password));
  }
}

// const apiRegister = () =>  {
//     let email =  document.getElementById("email").value;
//     let password =  document.getElementById("password").value;
//     const bodyData = {
//       email: email,
//       password: password
//     }
//     var req = new XMLHttpRequest();
//     req.open("POST", "https://reqres.in/api/register/", true);
//     req.setRequestHeader("Content-Type", "application/json");
//     req.send(JSON.stringify(bodyData));
//     req.onload = function () {
//       console.log(req.responseText);
//       let data = JSON.parse(req.responseText);
//       if (data.id != "0") {
//         console.log(data);
//         alert("Welcome " + email.split("@")[0]);
//         // window.location.href = "userList.html?email=" + email + "&password=" + password; // Redirecting to other page.
//       } else {
//         alert("User not found!");
//       }
//     }
//   }

// const apiRegister = () => {
//   let email =  document.getElementById("email").value;
//   let password =  document.getElementById("password").value;
//   const bodyData = { email:email, password:password };
//     fetch("https://reqres.in/api/register/", {
//     method: 'POST',
//     // mode: 'cors',
//     headers: {
//     'Content-Type': 'application/json'},
//     body: JSON.stringify(bodyData)
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (data.id != "0") {
//         console.log(data);
//         alert("Welcome " + email.split("@")[0]);
//         // window.location.href = ""; // Redirecting to other page.
//       }
//       else {
//         alert("User not found!");
//       }
//     })
//     .catch((e)=> console.log(e));
// }

const apiRegister = async () => {
  let email =  document.getElementById("email").value;
  let password =  document.getElementById("password").value;
  const data  = await axios({
    baseURL: 'https://reqres.in',
    url: '/api/register',
    method: 'post',
    data: {
      email: email,
      password: password
    }
  });
  if (data.data.id != "0") {
    window.localStorage.setItem("token", data.token);
    console.log(data.data);
    alert("Welcome " + email.split("@")[0]);
  }
  else{
    alert("Bilgilerinizi kontrol ediniz");

  }
}


// fconst apiRegister = () =>  {
//   let email =  document.getElementById("email").value;
//   let password =  document.getElementById("password").value;
//   const formData = {
//     email: email,
//     password: password
//   }
//   $.ajax({
//     type: "POST",
//     url: "https://reqres.in/api/register",
//     data: JSON.stringify(formData),
//     contentType: 'application/json; charset=utf-8',
//     success: function (data) {
//       if (data.id != "0") {
//         console.log(data);
//         alert("Welcome " + email.split("@")[0]);
//         // window.location.href = ""; // Redirecting to other page.
//       }
//       else {
//          alert("User not found!");
//        }
//     },
//     beforeSend: function (request) {
//       console.log("apiRegister ajax send request before");
//     },
//     complete: function () {
//       console.log("apiRegister ajax send request finished");

//     },
//     error: function (XMLHttpRequest, textStatus, errorThrown) {
//       // postErrorLog("app-" + window.location.pathname, XMLHttpRequest.responseText, XMLHttpRequest.status, textStatus, errorThrown); 

//       if (XMLHttpRequest.readyState == 4) {
//         // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
//       }
//       else if (XMLHttpRequest.readyState == 0) {

//       }
//       else {
//         // something weird is happening
//       }

//     }
//   });
// }
