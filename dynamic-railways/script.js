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

     // var EID = document.createElement("input");
     // EID.setAttribute("type", "email");
     // EID.setAttribute("name", "emailID");
     // EID.setAttribute("placeholder", "E-Mail ID");

     // var PN = document.createElement("input");
     // PN.setAttribute("type", "tel");
     // PN.setAttribute("name", "phone");
     // PN.setAttribute("placeholder", "Contact Number");

     FN.classList.add('input');
     AGE.classList.add('input');
     GEN.classList.add('input');
     // EID.classList.add('input');
     // PN.classList.add('input');
     form.appendChild(FN);
     // form.appendChild(br.cloneNode());
     form.appendChild(AGE);
     // form.appendChild(br.cloneNode());
     form.appendChild(GEN);
     form.appendChild(br.cloneNode());
     // form.appendChild(EID);
     // // form.appendChild(br.cloneNode());
     // form.appendChild(PN);
     // form.appendChild(br.cloneNode());

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
   FN.setAttribute("name", "ChildName");
   FN.setAttribute("placeholder", "Full Name");

   var GN = document.createElement("input");
   GN.setAttribute("type", "text");
   GN.setAttribute("name", "GuardianName");
   GN.setAttribute("placeholder", "Parent/Guardian Name");

    var AGE = document.createElement("input");
     AGE.setAttribute("type", "tel");
     AGE.setAttribute("name", "ChildAge");
     AGE.setAttribute("placeholder", "Age");

    FN.classList.add('input');
    GN.classList.add('input');
    AGE.classList.add('input');
    form.appendChild(FN);
    // form.appendChild(br.cloneNode());

    // form.appendChild(br.cloneNode());
    form.appendChild(AGE);
    form.appendChild(GN);

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
