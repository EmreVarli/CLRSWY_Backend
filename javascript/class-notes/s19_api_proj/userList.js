$(document).ready(function () {
  // setTimeout(getApiData(), 500);
  setTimeout(getApiUserList, 500);
  // setInterval(() => {
  //   getApiUserList();
  // }, 6000);
});

// const getApiUserList = () => {
//   fetch("https://reqres.in/api/users?page=2", {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .then((response) => {
//       if (response.data[0].id != "0") {
//         for (var i = 0; i < response.data.length; i++) {
//           $("#tbodyUserList").append(
//             `<tr>
//                         <td>
//                         <img src="${response.data[i].avatar}"/>
//                         </td>
//                         <td>
//                         ${response.data[i].id}
//                         </td>
//                         <td>
//                         ${response.data[i].email}
//                         </td>
//                         <td>
//                         ${response.data[i].first_name}
//                         </td>
//                         <td>
//                         ${response.data[i].first_name}
//                         </td>
//               </tr>`
//           );
//           console.log(response.data[i]);
//         }
//       } else {
//         alert("Bilgilerinizi kontrol ediniz");
//       }
//     });
// }



// const getApiUserList = async () => {
//   const response  = await axios({
//     // baseURL: "https://reqres.in",
//     url: "https://reqres.in/api/users?page=2",
//     method: "get",
//   });
//   console.log(response.data.data[0]);
//   if (response.data.data[0].id != "0") {
//     for (var i = 0; i < response.data.data.length; i++) {
//       $("#tbodyUserList").append(
//           `<tr>
//                 <td>
//                 <img src="${response.data.data[i].avatar}"/>
//                 </td>
//                 <td>
//                 ${response.data.data[i].id}
//                 </td>
//                 <td>
//                 ${response.data.data[i].email}
//                 </td>
//                 <td>
//                 ${response.data.data[i].first_name}
//                 </td>
//                 <td>
//                 ${response.data.data[i].first_name}
//                 </td>
//         </tr>`);
//     }
//   } else {
//     alert("Bilgilerinizi kontrol ediniz");
//   }
// }



const getApiUserList = () => {
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/todos",
    dataType: 'json',
    success: function (veri) {
      console.log(veri);
      if (veri[0].id != "0") {
        for (var i = 0; i < veri.length; i++) {
          $('#tbodyUserList').append(
                            `<tr>
                                    <td>
                                       ${veri[i].userId}
                                    </td>
                                    <td>
                                        ${veri[i].id}
                                    </td>
                                    <td>
                                        ${veri[i].title}
                                    </td>
                                    <td>
                                        ${veri[i].completed}
                                    </td>
        
                            </tr>`);
        }
      }
      else {
        console.log("getApiUserList ajax send request nodata");
      }









      // if (veri.data[0].id != "") {
      //     for (var i = 0; i < veri.data.length; i++) {
      //             $('#tbodyUserList').append(
      //                 `<tr>
      //                         <td>
      //                             <img src="${veri.data[i].avatar}"/>
      //                         </td>
      //                         <td>
      //                             ${veri.data[i].id}
      //                         </td>
      //                         <td>
      //                             ${veri.data[i].email}
      //                         </td>
      //                         <td>
      //                             ${veri.data[i].first_name}
      //                         </td>
      //                         <td>
      //                             ${veri.data[i].first_name}
      //                         </td>
      //                 </tr>`);
      //     }
      // }
      // else {
      //     console.log("getApiUserList ajax send request nodata");
      // }

    },
    beforeSend: function (request) {
      // request.setRequestHeader("token", localStorage.getItem("token"));
      document.getElementById("loading").style.display = "block";
      console.log("getApiUserList ajax send request before");
    },
    complete: function () {
      console.log("getApiUserList ajax send request finished");
      document.getElementById("loading").style.display = "none";

    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      // postErrorLog("app-" + window.location.pathname, XMLHttpRequest.responseText, XMLHttpRequest.status, textStatus, errorThrown);

      if (XMLHttpRequest.readyState == 4) {
        // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
      }
      else if (XMLHttpRequest.readyState == 0) {

      }
      else {
        // something weird is happening
      }

    }
  });
}

// const getApiUserList = () => {
//   $("#example").DataTable({
//     ajax: {
//       url: "https://reqres.in/api/users?page=1",
//       dataSrc: "data",
//     },
//     type: "GET",
//     dataType: "json",
//     contentType: "application/json; charset=utf-8",
//     columns: [
//       {
//         data: "id",
//       },
//       {
//         data: "email",
//       },
//       {
//         data: "first_name",
//       },
//       {
//         data: "last_name",
//       },
//     ],
//   });
// }
