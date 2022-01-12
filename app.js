setAgesArray()

//oluşturulan fonksiyon sayfa ilk açıldığında çalışması için
//başa eklendi.

var loginForm = document.getElementById("loginForm");

// loginform değişkenini çektik, gönderme butonuna
//tıklandığında şunları yap dedik

loginForm.addEventListener("submit", function(e){
  e.preventDefault()

  // form elementi yapısı gereği başka sayfaya ya da kendine 
  //veriyi göndermeye çalışır, bu durumu devre dışı brakmak için
  //prevent default kullandık
  
  // on submitted butona basıldığında function içindekiler çalışır.
  var fullnameInput = document.getElementById("fullnameInput");
  var ageInput = document.getElementById("ageInput");
  var privacyInput = document.getElementById("privacyInput");
  if (fullnameInput.value.length <= 2) {
    alert("your name can be at least 3 characters")
  } else if (ageInput.value < 18) {
    alert("under the age of 18"); 
  } else if (!privacyInput.checked) {
    alert("you need to read and confirm");
  } else {
    alert("Fullname : " + fullnameInput.value + " " + " , " + " " +  "Age :" + " " + ageInput.value );
  }
})

function setAgesArray(){
  var agesArr = []
  for (let index = 0; index <= 150; index++) {
    agesArr.push(index);
  }
  var ageInput = document.getElementById("ageInput");
  
  for (const ageIndex in agesArr) {
    var ageOption = document.createElement("option");
    ageOption.setAttribute("value",agesArr[ageIndex]);
    ageOption.textContent = agesArr[ageIndex];
    ageInput.appendChild(ageOption);
  }
}