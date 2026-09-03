console.log("Git practice project started"); 
 
function login(username, password) { 
  if (username && password) { 
    return "Welcome to the application";  
  } 
 
  return "Username and password are required"; 
} 
 
console.log(login("intern", "git123")); 