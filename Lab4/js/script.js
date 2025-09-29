//alert("working");
document.querySelector("#zip").addEventListener("change", displayCity)
//document.querySelector("#state").addEventListener("click",displayCity)
document.querySelector("#pass").addEventListener("click", displaySuggestedPass)
document.querySelector("#user").addEventListener("change", displayUserN)
displayState();

async function displayCity() {
    let zipCode = document.querySelector("#zip").value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    try {
        let response = await fetch(url);
        try{
            let data = await response.json();
            console.log(data);
            document.querySelector("#city").textContent = data.city;
            document.querySelector("#lat").textContent = data.latitude;
            document.querySelector("#lon").textContent = data.longitude;
        }catch (parseError) {
            console.log("Json Parisng error " + error);
        }
    }catch (error) {
        console.log("Network error " + error);        
    }

        //alert(zipCode);
}
async function displayState() {
    //let state = document.querySelector("#state").value;
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            for(i of data){
                let optionElement = document.createElement("option");
                optionElement.value = i.usps;
                optionElement.textContent = i.state;
                document.querySelector("#state").append(optionElement);
            }
    }catch (parseError) {
        console.log("Json parsing " + parseError);        
    }
        //alert(zipCode);
}
async function displaySuggestedPass() {
    //let state = document.querySelector("#state").value;
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    try {
        let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            document.querySelector("#suggested").textContent = " "+ data.password;
            //for(i of data){
              //  let optionElement = document.createElement("option");
               // optionElement.value = i.state;
                //optionElement.textContent = i.usps;
                //document.querySelector("#state").append(optionElement);
            
    }catch (parseError) {
        console.log("Json parsing " + parseError);        
    }
        //alert(zipCode);
}
async function displayUserN() {
    //let state = document.querySelector("#state").value;
    let userN = document.querySelector("#user").value;
    let url = "https://csumb.space/api/usernamesAPI.php?username=" + userN;
    try {
        let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            //document.querySelector("#invalid").textContent = " "+ data.available;
            if(data.available == false){
                document.querySelector("#invalid").textContent = "Username Unavailable";
               invalid.style.color = "red";
            }else{
                document.querySelector("#invalid").textContent = "Available";
                invalid.style.color = "green";
                //
            }
            
            
                //for(i of data){
              //  let optionElement = document.createElement("option");
               // optionElement.value = i.state;
                //optionElement.textContent = i.usps;
                //document.querySelector("#state").append(optionElement);
            
    }catch (parseError) {
        console.log("Json parsing " + parseError);        
    }
        //alert(zipCode);

    
}