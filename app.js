

 let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
 let apiKey = checkApiKey()
  
  function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
      window.open("key.html", "_self");
    }
    return localStorage.getItem("apiKey");
  }
 
  function fetchContacts(){
  fetch(rootPath + "controller/get-contacts/")
  .then(function(response){
    return response.json()
  })
  .then(function(data){

    console.log(data)
  })
 }
