console.log("Git practice project started"); 
 
function login(username, password) { 
  if (username && password) { 
    return "Login successful"; 
  } 
 
  return "Username and password are required"; 
} 
 
console.log(login("intern", "git123")); 