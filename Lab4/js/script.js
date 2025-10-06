document.querySelector("#zip").addEventListener("change", displayCity)
document.querySelector("#pass").addEventListener("click", displaySuggestedPass)
document.querySelector("#user").addEventListener("change", displayUserN)
document.querySelector("#state").addEventListener("change", displayCounties);
document.querySelector("#signupForm").addEventListener("submit", validateForm);


displayState();

async function displayCity() {
    let zipCode = document.querySelector("#zip").value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let zipMsg = document.querySelector("#zipMsg");
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        if (data && data.city) {
            document.querySelector("#city").textContent = data.city;
            document.querySelector("#lat").textContent = data.latitude;
            document.querySelector("#lon").textContent = data.longitude;
            zipMsg.textContent = "";
        } else {
            document.querySelector("#city").textContent = "";
            document.querySelector("#lat").textContent = "";
            document.querySelector("#lon").textContent = "";
            zipMsg.textContent = "Zip code not found";
        }
    } catch (error) {
        console.log("County list error " + error);
    }
}
async function displayState() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        let stateSelect = document.querySelector("#state");
        for (let i of data) {
            let optionElement = document.createElement("option");
            optionElement.value = i.usps;
            optionElement.textContent = i.state;
            stateSelect.append(optionElement);
        }
    } catch (parseError) {
        console.log("JSON parsing " + parseError);
    }
}
async function displayCounties() {
    let state = document.querySelector("#state").value;
    let url = "https://csumb.space/api/countyListAPI.php?state=" + state;
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        let countySelect = document.querySelector("#county");
        countySelect.innerHTML = "";
        for (let c of data) {
            let optionElement = document.createElement("option");
            optionElement.value = c.county;
            optionElement.textContent = c.county;
            countySelect.append(optionElement);
        }
    } catch (error) {
        console.log("County list error " + error);
    }
}
async function displaySuggestedPass() {
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        document.querySelector("#suggested").textContent = " " + data.password;

    } catch (parseError) {
        console.log("JSON parsing " + parseError);
    }

}
async function displayUserN() {
    let userN = document.querySelector("#user").value;
    let url = "https://csumb.space/api/usernamesAPI.php?username=" + userN;
    let invalidSpan = document.querySelector("#invalid");

    if (userN.length < 3) {
        invalidSpan.textContent = "Username too short";
        invalidSpan.style.color = "red";
        return;
    }

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        if (data.available == false) {
            invalidSpan.textContent = "Username Unavailable";
            invalidSpan.style.color = "red";
        } else {
            invalidSpan.textContent = "Available";
            invalidSpan.style.color = "green";
        }
    } catch (parseError) {
        console.log("JSON parsing " + parseError);
    }
}
function validateForm(e) {
  let user = document.querySelector("#user").value;
  let pass = document.querySelector("#pass").value;
  let retype = document.querySelector("#retype").value;

  if (user.length < 3) {
    alert("Username must be at least 3 characters long.");
    e.preventDefault();
    return;
  }
  if (pass.length < 6) {
    alert("Password must be at least 6 characters long.");
    e.preventDefault();
    return;
  }
  if (pass !== retype) {
    alert("Passwords do not match.");
    e.preventDefault();
    return;
  }
}