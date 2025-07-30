const form = document.getElementById("form");
const message =document.getElementById("data");

form.addEventListener("submit", function(event){
    event.preventDefault();//stop actual form submit

  const name =document.getElementById("name").value.trim();
  const email =document.getElementById("email").value.trim();
  const password =document.getElementById("password").value.trim();
  
  if (name ===""){
    message.style.color ="red";
    message.textContent ="Name is required!";
    return;
  }

  if (!email.includes("@") || !email.includes(".")){
    message.style.color= "red";
    message.textContent ="Enter a valid email";
    return;
  }
  if(password.length < 6){
    message.style.color= "red";
    message.textContent ="Password must be at least 6 characters!";
    return;
  }
  if(phone.length =10){
    message.style.color= "red";
    message.textContent = "phone must be 10 numbers!";
    return;
  }
 
  //If valid -store in LocalStorage
  const userData={
    name: name,
    email: email,
    password: password,
    phone: phone
  };

  //convert to JSON and save
  localStorage.setItem("user", JSON.stringify(userData));

  message.style.color ="green"
  message.textContent ="user registered and saved in Local Storage!";
})

