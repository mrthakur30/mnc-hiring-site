  
    var searchLocation = document.getElementById("searchLocation");
    searchLocation.addEventListener("input", getCandidateByLocation);

    
    var searchRole = document.getElementById("searchRole");
    searchRole.addEventListener("input", getCandidateByRole); 

  const getCandidates = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    const candidates = data.users;
    return candidates;
  }
  
  async function displayUsers() {
    var candidateList = document.getElementById("candidateList");
    candidateList.innerHTML = "";
  
    try {
      var candidates = await getCandidates();
      console.log(candidates);
  
      candidates.forEach(function(user) {
        var li = document.createElement("li");
        var textNode = document.createTextNode("Name: " +user.firstName+" "+user.lastName+ ", Location: " + user.address.city ,"Role: " +user.company.title );
        var roleNode = document.createTextNode(" Role: " +user.company.title );
        li.appendChild(textNode);
        li.appendChild(roleNode);
        candidateList.appendChild(li);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  
  displayUsers();

  async function getCandidateByRole(){
 
     var role = document.getElementById("searchRole").value.toLowerCase();

     var searchResults = document.getElementById("candidateList");
     searchResults.innerHTML = "";
     try {
       var candidates = await getCandidates();
       
       candidates = candidates.filter((user)=>{
            return user.company.title.toLowerCase().includes(role);
       })

       candidates.forEach(function(user) {
         var li = document.createElement("li");
         var textNode = document.createTextNode("Name: " +user.firstName+" "+user.lastName+ ", Location: " + user.address.city ,"Role: " +user.company.title );
         var roleNode = document.createTextNode(" Role: " +user.company.title );
         li.appendChild(textNode);
         li.appendChild(roleNode);
         searchResults.appendChild(li);
       });
     } catch (error) {
       console.log("Error:", error);
     }
  }

  async function getCandidateByLocation(){

    var location = document.getElementById("searchLocation").value.toLowerCase();

    var searchResults = document.getElementById("candidateList");
    searchResults.innerHTML = "";
    try {
      var candidates = await getCandidates();
      
      candidates = candidates.filter((user)=>{
           return user.address.city.toLowerCase().includes(location);
      })

      candidates.forEach(function(user) {
        var li = document.createElement("li");
        var textNode = document.createTextNode("Name: " +user.firstName+" "+user.lastName+ ", Location: " + user.address.city ,"Role: " +user.company.title );
        var roleNode = document.createTextNode(" Role: " +user.company.title );
        li.appendChild(textNode);
        li.appendChild(roleNode);
        searchResults.appendChild(li);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  }

  