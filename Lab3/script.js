
displayQ3Options();
displayQ5Options();
document.querySelector("#submitBtn").addEventListener("click", gradeQuiz);


let attempts = localStorage.getItem("quizAttempts") || 0;
document.querySelector("#attempts").textContent = "Total quizzes taken: " + attempts;

function displayQ3Options() {
    let q3Options = ["Chiefs", "49ers", "Eagles", "Lakers"];
    q3Options = _.shuffle(q3Options);

    const container = document.querySelector("#q3Options");
    container.innerHTML = "";

    q3Options.forEach((option, index) => {
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "q3";
        input.value = option;
        input.id = "q3_" + index;

        let label = document.createElement("label");
        label.htmlFor = input.id;
        label.textContent = option;

        let feedback = document.createElement("img");
        feedback.id = "q3Feedback_" + index;
        feedback.src = "";

        label.appendChild(feedback);
        container.appendChild(input);
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
    });
}

function displayQ5Options() {
    let q5Options = ["Bryce Young", "Caleb Williams", "C.J. Stroud", "Hassan Haskins"];
    q5Options = _.shuffle(q5Options);

    const container = document.querySelector("#q5Options");
    container.innerHTML = "";

    q5Options.forEach((option, index) => {
        let input = document.createElement("input");
        input.type = "checkbox";
        input.name = "q5";
        input.value = option;
        input.id = "q5_" + index;

        let label = document.createElement("label");
        label.htmlFor = input.id;
        label.textContent = option;

        let feedback = document.createElement("img");
        feedback.id = "q5Feedback_" + index;
        feedback.src = "";

        label.appendChild(feedback);
        container.appendChild(input);
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
    });
}

function gradeQuiz() {
    let score = 0;

    let answer1 = document.querySelector("#numInput").value;
    let q1Feedback = document.querySelector("#q1Feedback");
    if (answer1 == 6) {
        score += 20;
        q1Feedback.src ="img/check.webp";
    } else {
        q1Feedback.src = "img/x.webp";
    }
    q1Feedback.style.display = "inline";

    let answer2 = document.querySelector("#answer2").value;
    let q2Feedback = document.querySelector("#q2Feedback");
    if(answer2 == "Titans"){
        score += 20;
        q2Feedback.src = "img/check.webp";
    } else {
        q2Feedback.src = "img/x.webp";
    }
    q2Feedback.style.display = "inline";

    let answer3 = document.querySelector("input[name=q3]:checked")?.value;
    const q3Inputs = document.querySelectorAll("input[name=q3]");
    q3Inputs.forEach((input, idx) => {
        let feedback = document.querySelector("#q3Feedback_" + idx);
        feedback.style.display = "inline";
        if(input.value == "Eagles" && input.checked){
            score += 20;
            feedback.src = "img/check.webp";
        } else if(input.checked){
            feedback.src = "img/x.webp";
        } else {
            feedback.src = "";
        }
    });

    let answer4 = document.querySelector("#textInput").value.trim();
    let q4Feedback = document.querySelector("#q4Feedback");
    if(answer4.toLowerCase() == "national football league"){
        score += 20;
        q4Feedback.src = "img/check.webp";
    } else {
        q4Feedback.src = "img/x.webp";
    }
    q4Feedback.style.display = "inline";

    const correctQ5 = ["Bryce Young"];
    const q5Inputs = document.querySelectorAll("input[name=q5]");
    q5Inputs.forEach((input, idx) => {
        let feedback = document.querySelector("#q5Feedback_" + idx);
        feedback.style.display = "inline";
        if(correctQ5.includes(input.value) && input.checked){
            score += 20;
            feedback.src = "img/check.webp";
        } else if(!correctQ5.includes(input.value) && input.checked){
            feedback.src = "img/x.webp";
        } else {
            feedback.src = "";
        }
    });

    attempts++;
    localStorage.setItem("quizAttempts", attempts);
    document.querySelector("#attempts").textContent = "Total quizzes taken: " + attempts;

    alert("Your score: " + score);


    if(score > 80){
        alert("Congratulations! You scored above 80!");
    }
}
