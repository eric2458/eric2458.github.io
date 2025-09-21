document.querySelector("button").addEventListener("click", gradeQuiz);

displayq3Options();
function displayq3Options(){
    let q3Options = ["fontcolor","color","textColor"];
    q3Options = _.shuffle(q3Options);

    for(let i of q3Options){

        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "q3";
        inputElement.value = i;
        console.log(inputElement);
    
        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.append(inputElement);

        document.querySelector("#q3Options").append(labelElement);
    }
}

function gradeQuiz(){
    let userAwnser1 = document.querySelector("input[name=q1]:checked").value;
    //alert(userAwnser1);
    if(userAwnser1 == "color"){
        alert("Right!")
    }else{
        alert("Wrong!")
    }
}
