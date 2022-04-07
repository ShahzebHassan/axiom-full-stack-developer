
var userContacts;

    if(localStorage.getItem("phoneData") == null)
    {
        userContacts = [];
    }
    else
    {
        userContacts = JSON.parse(localStorage.getItem("phoneData"));
    }

    displayData();    

    var userNameInp = document.getElementById("userName");
    var userPhoneInp = document.getElementById("userPhone");
    var userEmailInp = document.getElementById("userEmail");
    
    var inps = document.getElementsByTagName("input");


function addContact()
{
    
    if(validateName() == true && validatePhone() == true && validateEmail() == true){
        
    var contacts = { name:userNameInp.value , phone:userPhoneInp.value , email:userEmailInp.value};
    
    userContacts.push(contacts);
    
    displayData();
    
    clearData();

    localStorage.setItem("phoneData" , JSON.stringify(userContacts));    
        
    }
    else
    {
        alert("please fill in the form");
    }
    
    
    
}



function displayData()
{
    var temp = "";
    for(var i=0 ; i<userContacts.length ; i++)
    {
        temp += "<tr><td >"+userContacts[i].name+"</td><td>"+userContacts[i].phone+"</td><td>"+userContacts[i].email+"</td><td>"+'<a onclick="deleteContact('+userContacts[i].name+')" class="text-danger"><i class="fas fa-minus-circle"></i></a>'+"</td></tr>";
    }
    document.getElementById("tableBody").innerHTML = temp;
    
}

function showForm(){ 
   
    document.getElementById('btn').style.display="flex";
    document.getElementById('userPhone').style.display="flex";
    document.getElementById('userName').style.display="flex";
    document.getElementById('userEmail').style.display="flex";
    document.getElementById('head').style.display="flex";
    document.getElementById('btn1').style.display="flex";


    }

function clearData()
{
    for(var i=0; i<inps.length; i++)
    {
        inps[i].value="";
    }
}


function deleteContact(name)
{
    var i=0;
    for(var i=0; i<userContacts.length; i++)
    {
        if(userContacts[i].name == name)
        { console.log();
            userContacts.splice(i , 1);
        }
    }
    
    
    localStorage.setItem("phoneData" , JSON.stringify(userContacts));
    
    displayData();
    
}


function searchFunction() 
{
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

searchFunction();

function validateName()
{
    var regex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    if(regex.test(userNameInp.value) == true)
    {
        document.getElementById("nameAlert").style.display="none";
        return true;
    }
    else
    {
        document.getElementById("nameAlert").style.display="block";
        return false;
    }
}

function validatePhone()
{
    var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(regex.test(userPhoneInp.value) == true)
    {
        document.getElementById("phoneAlert").style.display="none";
        return true;
    }
    else
    {
        document.getElementById("phoneAlert").style.display="block";
        return false;
    }
}


function validateEmail()
{
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(regex.test(userEmailInp.value) == true)
    {
        document.getElementById("mailAlert").style.display="none";
        return true;
    }
    else
    {
        document.getElementById("mailAlert").style.display="block";
        return false;
    }
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  window.location.reload("http://127.0.0.1:5500/AphoneBook/index.html")

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.reload("http://127.0.0.1:5500/AphoneBook/index.html")
  }
}



// api url
const api_url = "http://10.2.1.148:5000/get";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
    let tab = "";
    // Loop to access all rows 
    for (let r of data.resultAll) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.phone}</td>
    <td>${r.email}</td> 
    <input type="hidden" id="deleteValuee" name="del" value="${r.name}">
    <td><a onclick="deleteapi('${r._id}')" class="text-danger"><i class="fas fa-minus-circle"></i></a></td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("tableBody").innerHTML = tab;
}

// api url
var add_url = "http://10.2.1.148:5000/add";
  
// Defining async function
async function addapi(url) {
  
    if(userNameInp.value && userEmailInp.value && userPhoneInp.value){
    user = { 
        name: userNameInp.value, 
        phone: userPhoneInp.value,
        email: userEmailInp.value
    }
  
   console.log(user)
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 
                'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }

    // Fake api for making post requests
    let fetchRes = fetch("http://10.2.1.148:5000/add",options);
    console.log(fetchRes)
    fetchRes.then(res =>
        res.json()).then(d => {   
            getapi();
           clearData();
          getapi(api_url);

            // window.location.reload("http://127.0.0.1:5500/AphoneBook/index.html")
        })
    }else{
     
        validateName();
        validateEmail();
        validatePhone();
     
    }
}

 
// Defining async function
async function deleteapi(id) {
 var getv = document.getElementById("deleteValuee").value;
 
 console.log(getv)
 var del= fetch(`http://10.2.1.148:5000/delete/${id}`,{
  method: 'GET',
  
})
getapi(api_url);
}

