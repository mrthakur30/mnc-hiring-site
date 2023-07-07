  
    var savedCandidates = [] ;
    
    var allCandidates= [] ;
    var searchLocation = document.getElementById("searchLocation");
    searchLocation.addEventListener("input", getCandidateByLocation);

    
    var searchRole = document.getElementById("searchRole");
    searchRole.addEventListener("input", getCandidateByRole); 
  
    
   

  const getCandidates = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    const candidates = data.users;
    allCandidates = candidates;
    return candidates;
  }
  
   function displayCandidates(candidates) {

    var candidatesList = document.getElementById("candidatesList");
    candidatesList.innerHTML = "";

      candidates.map((user)=> {
        var candidateCard = document.createElement("div");
        candidateCard.classList.add("candidate-card");
        candidateCard.innerHTML = "<h3>" + user.firstName+" "+user.lastName + "</h3>" +
          "<p>Location: " + user.address.city + "</p>" +
          "<p>Job Role: " + user.company.title + "</p>" +
          "<button onclick='saveCandidate(\"" + user.id + "\")'>Save</button>";
        candidatesList.appendChild(candidateCard);
      });
    
  }
  
  async function getAllCandidates(){
    var candidates = await getCandidates();
    console.log(candidates);
    displayCandidates(candidates);
  }

  async function getCandidateByRole(){
 
     var role = document.getElementById("searchRole").value.toLowerCase();

     var candidates = await getCandidates();
       
     candidates = candidates.filter((user)=>{
          return user.company.title.toLowerCase().includes(role);
     })

     displayCandidates(candidates);
  }

  async function getCandidateByLocation(){
      var location = document.getElementById("searchLocation").value.toLowerCase();
      var candidates = await getCandidates();
      
      candidates = candidates.filter((user)=>{
           return user.address.city.toLowerCase().includes(location);
      })

     displayCandidates(candidates);
  }
  getAllCandidates();
  
  function toggleSaved(){
     
     const savedSection = document.getElementById("saved");
     const mainSection = document.getElementById("main");
     savedSection.style.display = "block";
     mainSection.style.display = mainSection.style.display==="block"?"none" :"block";
  }
  

  function displaySavedCandidates(){
    var savedList = document.getElementById("savedList");
    savedList.innerHTML = "";

      savedCandidates.map((user) => {
        var candidateCard = document.createElement("div");
        candidateCard.classList.add("candidate-card");
        candidateCard.innerHTML = "<h3>" + user.firstName+" "+user.lastName + "</h3>" +
          "<p>Location: " + user.address.city + "</p>" +
          "<p>Job Role: " + user.company.title + "</p>"+
          "<button onclick='removeCandidate(\"" + user.id + "\")'>Remove</button>";
        savedList.appendChild(candidateCard);
      });
  }
 
  function saveCandidate(id){
    
     if(savedCandidates.includes(allCandidates[id-1])) return ;
     savedCandidates.push(allCandidates[id-1]);
    
     displaySavedCandidates();
     console.log(savedCandidates);
  }

  function removeCandidate(id){
    savedCandidates = savedCandidates.filter((item) => {
        return item.id !== +id; 
    });
    displaySavedCandidates();
  }