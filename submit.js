
// Table insertdata 

function replaceFunction() {

    var fullname = document.getElementById('Fullname').value;
    var email = document.getElementById('Email').value;
    var number = document.getElementById('Number').value;
    var city = document.getElementById('City').value;
    var action = document.getElementById('Action');

    if(fullname == "" && email=="" && number=="" && city==""){
        document.getElementById("fnameError").innerHTML = "*Please Filed Your Input!";
        document.getElementById("emailError").innerHTML = "*Please Filed Your Input!";
        document.getElementById("numberError").innerHTML = "*Please Filed Your Input!";
        document.getElementById("cityError").innerHTML = "*Please Filed Your Input!";
        
    } else {
        let detail = document.getElementById("tableBody").insertRow();
        document.getElementById("fnameError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("numberError").innerHTML = "";
        document.getElementById("cityError").innerHTML = "";

    // let formDetail = detail.insertCell(-1);
    // formDetail.innerHTML = fullname.value;

    var formDetail = detail.insertCell();
    formDetail.innerHTML = document.getElementById('Fullname').value;
    var formDetail = detail.insertCell();
    formDetail.innerHTML = document.getElementById('Email').value;
    var formDetail = detail.insertCell();
    formDetail.innerHTML = document.getElementById('Number').value;
    var formDetail = detail.insertCell();
    formDetail.innerHTML = document.getElementById('City').value;
    var action = detail.insertCell();
    action.innerHTML =
        `<div class="btn"><button type="button" class="btnEdit" onclick="onEdit(this)">Edit</button>
        <button type="button" class="btnDelete" onclick="onDelete(this)">Delete</button></div>`;
    btnReset();
        
    }


    

}

//Delete Function
function onDelete(e) {
    if (confirm('Are you sure to delete this record ?')) {
        e.parentElement.parentElement.parentElement.remove();
        //btnReset();
    }
}


function btnReset() {

    document.getElementById("Fullname").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Number").value = "";
    document.getElementById("City").value = "";

    document.getElementById("btnButton").innerHTML = "Submit";

    if (fullname == "" && email == "" && number == "" && city == "") {

        document.getElementById("Fullname").value = "";
        document.getElementById("Eamil").value = "";
        document.getElementById("Number").value = "";
        document.getElementById("City").value = "";


        document.getElementById("btnButton").innerHTML = "Submit";

    } else {
        document.getElementById("Fullname").innerHTML = "";
        document.getElementById("Email").innerHTML = "";
        document.getElementById("Number").innerHTML = "";
        document.getElementById("City").innerHTML = "";

    }

}


function onEdit(td) {
    editRow = td.parentElement.parentElement.parentElement;
    console.log(editRow);

    document.getElementById("Fullname").value = editRow.children[0].innerHTML;
    document.getElementById("Email").value = editRow.children[1].innerHTML;
    document.getElementById("Number").value = editRow.children[2].innerHTML;
    document.getElementById("City").value = editRow.children[3].innerHTML;

    document.getElementById("submit").value = "Update";
    document.getElementById("submit").setAttribute("onclick", "updateData()");

    let Fullname = document.getElementById('Fullname').value;
    if (Fullname == "") {
        document.getElementById("fnameError").innerHTML = "*Please Filed Your Input!";
    } else {
        document.getElementById("fnameError").innerHTML = "";
    }
    let Email = document.getElementById('Email').value;
    if (Email == "") {
        document.getElementById("emailError").innerHTML = "*Please Filed Your Input!";
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
    let Number = document.getElementById('Number').value;
    if (Number == "") {
        document.getElementById("numberError").innerHTML = "*Please Filed Your Input!";
    } else {
        document.getElementById("numberError").innerHTML = "";
    }
    let City = document.getElementById('City').value;
    if (City == "") {
        document.getElementById("cityError").innerHTML = "*Please Filed Your Input!";
    } else {
        document.getElementById("cityError").innerHTML = "";
    }


}


function updateData() {
    console.log("Hello", editRow.children[0], "llll");

    var fullname = document.getElementById('Fullname').value;
    if(fullname == ""){
        document.getElementById("fnameError").innerHTML = "*Please Filed Your Input!";
    }else{
        document.getElementById("fnameError").innerHTML = "";
    }

    var email = document.getElementById('Email').value;
    if(email == ""){
        document.getElementById("emailError").innerHTML = "*Please Filed Your Input!";
    }else{
        document.getElementById("emailError").innerHTML = "";
    }

    var number = document.getElementById('Number').value;
    if(number == ""){
        document.getElementById("numberError").innerHTML = "*Please Filed Your Input!";
    }else{
        document.getElementById("numberError").innerHTML = "";
    }

    var city = document.getElementById('City').value;
    if(city == ""){
        document.getElementById("cityError").innerHTML = "*Please Filed Your Input!";
    }else{
        document.getElementById("cityError").innerHTML = "";
    }



    if (fullname != "" && email != "" && number != "" && city != "") {
        document.getElementById("submit").value = "Login";

        editRow.children[0].innerHTML = document.getElementById("Fullname").value;
        editRow.children[1].innerHTML = document.getElementById("Email").value;
        editRow.children[2].innerHTML = document.getElementById("Number").value;
        editRow.children[3].innerHTML = document.getElementById("City").value;

        document.getElementById("submit").setAttribute("onclick", "replaceFunction()");
        btnReset();
    }
}



// function myFunction(value) {
//     let data = value.value.trim();
//     if (data == "") {
//         document.getElementById(`${value.name}`).innerHTML = "*Please Filed Your Input!";
//     } else {
//         document.getElementById(`${value.name}`).innerHTML = "";
//     }
// }

const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});



