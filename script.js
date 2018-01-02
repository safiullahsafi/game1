var first=0;
var options=0;
var stat=false;
var lastclick=false;
var firstChoice;
var secondChoice;
var thirdChoice;
var forthChoice;
document.addEventListener('click', function(evt){
  var btnValue=evt.target;
  if(first===0){
    firstfun();
  }

  else if (lastclick) {
       var btnId=Number(btnValue.textContent);
       if(btnId===firstChoice)
         up(btnId);
       else if(btnId===secondChoice)
        down(btnId);
       else if(btnId===thirdChoice)
        left(btnId);
       else if(btnId===forthChoice)
        down(btnId);
        lastclick=false;
        options=0;
  }
  else {
    firstChoice="";
    secondChoice="";
    thirdChoice="";
    forthChoice="";
    stat=downTest(btnValue.id);
    if(stat===true ){
      firstChoice=Number(btnValue.id)+2;
      stat=false;
      options++
    }
    stat=upTest(btnValue.id);
    if(stat===true){
      secondChoice=Number(btnValue.id)-2;
      stat=false;
      options++;
    }
    stat=rightTest(btnValue.id);
    if(stat===true){
      thirdChoice=Number(btnValue.id)+20;
      stat=false;
      options++;
    }
    stat=leftTest(btnValue.id);
    if(stat===true){
      forthChoice=Number(btnValue.id)-20;
      stat=false;
      options++;
    }


    if(options>1){

      if(firstChoice)
      selections(firstChoice);
      if(secondChoice)
      selections(secondChoice);
      if(thirdChoice)
      selections(thirdChoice);
      if(forthChoice)
      selections(forthChoice);
      lastclick=true;

    }
    else {

      if(firstChoice)
      down(btnValue.id);
      if(secondChoice)
      up(btnValue.id);
      if(thirdChoice)
      right(btnValue.id);
      if(forthChoice)
      left(btnValue.id);

    }

   options=0;
  }


  function firstfun(){
    if(btnValue.getAttribute('class')==="ball"){
      btnValue.style.display = "none";
      first++;

    }
  }

  function down(n){

    n=Number(n)+1;
    var a =document.getElementById(n);
    n+=1;
    var b =document.getElementById(n);
    if(lastclick){

      a.style.display="none";
      b.style.display="none";
      clearselection();
    }
    else {
      btnValue.style.display="none";
      a.style.display="none";
      b.style.display="block";
    }

  }
  function up(n){

    n=Number(n)-1;
    var a =document.getElementById(n);
    n-=1;
    var b =document.getElementById(n);
    if(lastclick){

      a.style.display="none";
      b.style.display="none";
      clearselection();
    }
    else {
      btnValue.style.display="none";
      a.style.display="none";
      b.style.display="block";
    }
  }

  function right(n){

    n=Number(n)+10;
    var a =document.getElementById(n);
    n+=10;
    var b =document.getElementById(n);
    if(lastclick){

      a.style.display="none";
      b.style.display="none";
      clearselection();
    }
    else {
      btnValue.style.display="none";
      a.style.display="none";
      b.style.display="block";
    }
  }
  function left(n){

    n=Number(n)-10;
    var a =document.getElementById(n);
    n-=10;
    var b =document.getElementById(n);
    if(lastclick){

      a.style.display="none";
      b.style.display="none";
      clearselection();
    }
    else {
      btnValue.style.display="none";
      a.style.display="none";
      b.style.display="block";
    }
  }


  function selections(bToSelect){
    document.getElementById(bToSelect).parentElement.style.borderColor = "red";
    document.getElementById(bToSelect).parentElement.style.color= "grey";
    document.getElementById(bToSelect).parentElement.textContent = bToSelect;

  };

  function downTest(n){

    n=Number(n)+1;
    var a =document.getElementById(n);
    n+=1;
    var b =document.getElementById(n);
    if(a!==null && b!==null){
      if(btnValue.className==="ball"){
        if(b.style.display==="none"){
          if(a.style.display!=="none"){

            return true;
          }
          return false;
        }
      }
    }

  }
  function upTest(n){

    n=Number(n)-1;
    var a =document.getElementById(n);
    n-=1;
    var b =document.getElementById(n);
    if(a!==null && b!==null){
      if(btnValue.className==="ball"){
        if(b.style.display==="none"){
          if(a.style.display!=="none"){

            return true;

          }
          return false;
        }
      }
    }
  }

  function rightTest(n){

    n=Number(n)+10;
    var a =document.getElementById(n);
    n+=10;
    var b =document.getElementById(n);
    if(a!==null && b!==null){
      if(btnValue.className==="ball"){
        if(b.style.display==="none"){
          if(a.style.display!=="none"){

            return true;
          }
          return false;
        }
      }
    }

  }
  function leftTest(n){

    n=Number(n)-10;
    var a =document.getElementById(n);
    n-=10;
    var b =document.getElementById(n);
    if(a!==null && b!==null){
      if(btnValue.className==="ball"){
        if(b.style.display==="none"){
          if(a.style.display!=="none"){

            return true;

          }
          return false;
        }
      }
    }
  }

  function clearselection() {

    var elements = document.getElementsByClassName("placeholder");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.borderColor = "black";
    }

  }
});
