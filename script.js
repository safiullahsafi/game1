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

    var btnID=Number(btnValue.id);
    if(btnID===firstChoice)
    up(btnID);
    else if(btnID===secondChoice)
    down(btnID);
    else if(btnID===thirdChoice)
    left(btnID);
    else if(btnID===forthChoice)
    right(btnID);
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
      btnValue.style.backgroundColor = "grey";
      first++;

    }
  }

  function down(n){

    n=Number(n)+1;
    var a =document.getElementById(n);
    n+=1;
    var b =document.getElementById(n);
    if(lastclick){
      btnValue.style.backgroundColor = "#663B22";
      a.style.backgroundColor = "grey";
      b.style.backgroundColor = "grey";
      clearselection();


    }
    else {
      btnValue.style.backgroundColor = "grey";
      a.style.backgroundColor = "grey";
      b.style.backgroundColor = "#663B22";
        clearselection();
    }

  }
  function up(n){

    n=Number(n)-1;
    var a =document.getElementById(n);
    n-=1;
    var b =document.getElementById(n);
    if(lastclick){

      a.style.backgroundColor = "grey";
      b.style.backgroundColor = "grey";
      btnValue.style.backgroundColor = "#663B22";
      clearselection();

    }
    else {
      btnValue.style.backgroundColor = "grey";
      a.style.backgroundColor = "grey";
      b.style.backgroundColor = "#663B22";
        clearselection();
    }
  }

  function right(n){

    n=Number(n)+10;
    var a =document.getElementById(n);
    n+=10;
    var b =document.getElementById(n);
    if(lastclick){

      a.style.backgroundColor = "grey";
      b.style.backgroundColor = "grey";
      btnValue.style.backgroundColor = "#663B22";
      clearselection();

    }
    else {
      btnValue.style.backgroundColor = "grey";
      a.style.backgroundColor = "grey";
      b.style.backgroundColor = "#663B22";
        clearselection();
    }
  }
  function left(n){

    n=Number(n)-10;
    var a =document.getElementById(n);
    n-=10;
    var b =document.getElementById(n);
    if(lastclick){

      a.style.backgroundColor = "grey";
      b.style.backgroundColor = "grey";
      btnValue.style.backgroundColor = "#663B22";
      clearselection();
    }
    else {
      btnValue.style.backgroundColor = "grey";
      a.style.backgroundColor = "grey";
      b.style.backgroundColor = "#663B22";
        clearselection();
    }
  }


  function selections(bToSelect){
    document.getElementById(bToSelect).style.border = "solid";
    document.getElementById(bToSelect).style.borderColor = "yellow";

  };

  function downTest(n){

    n=Number(n)+1;
    var a =document.getElementById(n);
    n+=1;
    var b =document.getElementById(n);
    if(a!==null && b!==null){
      if(btnValue.className==="ball"){
        if(b.style.backgroundColor==="grey"){
          if(a.style.backgroundColor!=="grey"){

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
        if(b.style.backgroundColor==="grey"){
          if(a.style.backgroundColor!=="grey"){

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
        if(b.style.backgroundColor==="grey"){
          if(a.style.backgroundColor!=="grey"){

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
        if(b.style.backgroundColor==="grey"){
          if(a.style.backgroundColor!=="grey"){

            return true;

          }
          return false;
        }
      }
    }
  }

  function clearselection() {

    var elements = document.getElementsByClassName("ball");
    for (var i = 0; i < elements.length; i++) {
         if(elements[i].style.backgroundColor==="grey")
            elements[i].style.borderColor = "grey";
            else {
              elements[i].style.borderColor = "#663B22";
            }


    }

  }
});
