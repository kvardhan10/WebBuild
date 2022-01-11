// function addpass(){
//   alert('hi');
//   var newdiv = createElement('div');
//   newdiv.classList.add('main_content');
//   document.body.appendChild(newdiv);
// }
// // line 25 in html

pass_array = new Array(6);
child_array = new Array(2);
i = 0;
j = 0;

// add newforms


function appendpass(){
   var br = document.createElement("br");
   var form = document.createElement("form");

   form.setAttribute("method", "post");
   form.setAttribute("action", "submit.php");

    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");

     var DOB = document.createElement("input");
     DOB.setAttribute("type", "date");
     DOB.setAttribute("name", "dob");
     DOB.setAttribute("placeholder", "DOB");

     var GEN = document.createElement("input");
     GEN.setAttribute("type", "text");
     GEN.setAttribute("name", "gender");
     GEN.setAttribute("placeholder", "Gender: M/F/O");

     var EID = document.createElement("input");
     EID.setAttribute("type", "email");
     EID.setAttribute("name", "emailID");
     EID.setAttribute("placeholder", "E-Mail ID");

     var PN = document.createElement("input");
     PN.setAttribute("type", "tel");
     PN.setAttribute("name", "phone");
     PN.setAttribute("placeholder", "Contact Number");

     FN.classList.add('input');
     DOB.classList.add('input');
     GEN.classList.add('input');
     EID.classList.add('input');
     PN.classList.add('input');
     form.appendChild(FN);
     form.appendChild(br.cloneNode());
     form.appendChild(DOB);
     form.appendChild(br.cloneNode());
     form.appendChild(GEN);
     form.appendChild(br.cloneNode());
     form.appendChild(EID);
     form.appendChild(br.cloneNode());
     form.appendChild(PN);
     form.appendChild(br.cloneNode());

     form.classList.add('form-shadow');
     return form;
}

function appendchild(){
  var br = document.createElement("br");
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "submit.php");

   var FN = document.createElement("input");
   FN.setAttribute("type", "text");
   FN.setAttribute("name", "FullName");
   FN.setAttribute("placeholder", "Full Name");

   var GN = document.createElement("input");
   GN.setAttribute("type", "text");
   GN.setAttribute("name", "FullName");
   GN.setAttribute("placeholder", "Parent/Guardian Name");

    var DOB = document.createElement("input");
    DOB.setAttribute("type", "date");
    DOB.setAttribute("name", "dob");
    DOB.setAttribute("placeholder", "DOB");

    FN.classList.add('input');
    GN.classList.add('input');
    DOB.classList.add('input');
    form.appendChild(FN);
    form.appendChild(br.cloneNode());
    form.appendChild(GN);
    form.appendChild(br.cloneNode());
    form.appendChild(DOB);

    return form;
}


// add forms ends here

function addpass(){
  if(i<6){
    var newcont = document.getElementById("newcontainers");
    // pass_array[i] = document.createElement('div');
    pass_array[i] = appendpass();
    pass_array[i].classList.add('pass-shadow');

    newcont.appendChild(pass_array[i]);
    i++;
    console.log(i);
    console.log(pass_array);
  }
  else{
    alert('Maximum 6 passengers can be added in a single ticket!');
  }
}


function addchild(){
  if(i<1){
    alert('Cannot add a child passenger without having atleast one adult.');
  }
  else{
    if(j<2){
        var newcont = document.getElementById("newcontainers");
        // child_array[j] = document.createElement('div');
        child_array[j] = appendchild();
        child_array[j].classList.add('child-shadow');
        // child_array[j].innerHTML = j+1;
        newcont.appendChild(child_array[j]);
        j++;
        console.log(j);
        console.log(child_array);
      }
      else{
        alert('Maximum 2 children can be added in a single ticket!');
      }
    }
}

function delpass(){
  if(i>0){
    popped = pass_array.pop();
    console.log(popped);
    popped.remove();
    i--;
  }
  else{
    alert('No adult passengers to delete');
  }
}

function delchild(){
  if(j>0){
    popped = child_array.pop();
    popped.remove();
    j--;
  }
  else{
    alert('No child passengers to delete');
  }
}
// ends

function IfCdpnNotWork(){
  <button class="addpass" onclick="addpass()">Add New Passenger</button>
  <button class="addchild" onclick="addchild()">Add New Child</button>
  <button class="delbtn" onclick="delpass()">Delete Passenger</button>
  <button class="delbtn2" onclick="delchild()">Delete Child</button>

<hr> <h3>Passenger Details</h3>
  <div class="newcontainers" id="newcontainers"></div>

  button{
  padding:3px 25px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: #1a75ff;
  transition: all 0.5s ease 0s;
}
button:hover{
  background-color: #005ce6;
}

hr{
  margin-top: 1rem;
}
input{
  margin: 1rem;
  width:15vw;
  padding:.5rem;
}
.newcontainers{
  /* display: flex;
  flex-wrap: wrap; */
  display: block;
  width: 80vw;
  margin: 0 auto;
  border: 4px solid #1a75ff;
  border-radius: 20px;
}
.pass-shadow{
  position: relative;
  padding:2rem;
  background-color:  #4747d1 !important;
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.8);
  margin:1rem auto;
  width:70vw;
  border: 2px solid red;
}
.pass-shadow::after{
  content: 'PASSENGER TICKET';
  position: absolute;
  top:5%;
}
.child-shadow{
  position: relative;
  background-color: #6699ff !important;
  margin:1rem auto;
  width:70vw;
  border-radius: 10px;
  border: 2px solid red;
  padding: 2rem;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.8);
}
.child-shadow::after{
  content: 'CHILD TICKET';
  font-variant: small-caps;
  position: absolute;
  top:5%;
  left:3.65%;
}

pass_array = new Array(6);
child_array = new Array(2);
i = 0;
j = 0;

function appendpass(){
   var br = document.createElement("br");
   var form = document.createElement("form");

   form.setAttribute("method", "post");
   form.setAttribute("action", "submit.php");

    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");

     var AGE = document.createElement("input");
     AGE.setAttribute("type", "tel");
     AGE.setAttribute("name", "age");
     AGE.setAttribute("placeholder", "Age");

     var GEN = document.createElement("input");
     GEN.setAttribute("type", "text");
     GEN.setAttribute("name", "gender");
     GEN.setAttribute("placeholder", "Gender: M/F/O");

     var EID = document.createElement("input");
     EID.setAttribute("type", "email");
     EID.setAttribute("name", "emailID");
     EID.setAttribute("placeholder", "E-Mail ID");

     var PN = document.createElement("input");
     PN.setAttribute("type", "tel");
     PN.setAttribute("name", "phone");
     PN.setAttribute("placeholder", "Contact Number");

     FN.classList.add('input');
     AGE.classList.add('input');
     GEN.classList.add('input');
     EID.classList.add('input');
     PN.classList.add('input');
     form.appendChild(FN);
     // form.appendChild(br.cloneNode());
     form.appendChild(AGE);
     // form.appendChild(br.cloneNode());
     form.appendChild(GEN);
     form.appendChild(br.cloneNode());
     form.appendChild(EID);
     // form.appendChild(br.cloneNode());
     form.appendChild(PN);
     form.appendChild(br.cloneNode());

     form.classList.add('form-shadow');
     return form;
}

function appendchild(){
  var br = document.createElement("br");
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "submit.php");

   var FN = document.createElement("input");
   FN.setAttribute("type", "text");
   FN.setAttribute("name", "FullName");
   FN.setAttribute("placeholder", "Full Name");

   var GN = document.createElement("input");
   GN.setAttribute("type", "text");
   GN.setAttribute("name", "FullName");
   GN.setAttribute("placeholder", "Parent/Guardian Name");

    var AGE = document.createElement("input");
     AGE.setAttribute("type", "tel");
     AGE.setAttribute("name", "age");
     AGE.setAttribute("placeholder", "Age");

    FN.classList.add('input');
    GN.classList.add('input');
    AGE.classList.add('input');
    form.appendChild(FN);
    // form.appendChild(br.cloneNode());
    form.appendChild(GN);
    // form.appendChild(br.cloneNode());
    form.appendChild(AGE);

    return form;
}


// add forms ends here

function addpass(){
  if(i<6){
    var newcont = document.getElementById("newcontainers");
    // pass_array[i] = document.createElement('div');
    pass_array[i] = appendpass();
    pass_array[i].classList.add('pass-shadow');

    newcont.appendChild(pass_array[i]);
    i++;
    console.log(i);
    console.log(pass_array);
  }
  else{
    alert('Maximum 6 passengers can be added in a single ticket!');
  }
}


function addchild(){
  if(i<1){
    alert('Cannot add a child passenger without having atleast one adult.');
  }
  else{
    if(j<2){
        var newcont = document.getElementById("newcontainers");
        // child_array[j] = document.createElement('div');
        child_array[j] = appendchild();
        child_array[j].classList.add('child-shadow');
        // child_array[j].innerHTML = j+1;
        newcont.appendChild(child_array[j]);
        j++;
        console.log(j);
        console.log(child_array);
      }
      else{
        alert('Maximum 2 children can be added in a single ticket!');
      }
    }
}

function delpass(){
  if(i>0){
    popped = pass_array.pop();
    console.log(popped);
    popped.remove();
    i--;
  }
  else{
    alert('No adult passengers to delete');
  }
}

function delchild(){
  if(j>0){
    popped = child_array.pop();
    popped.remove();
    j--;
  }
  else{
    alert('No child passengers to delete');
  }
}
// ends

}

//hehe :)
