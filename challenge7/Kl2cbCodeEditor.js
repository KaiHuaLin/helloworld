var isCss = false;


function eraseClick() {
    document.getElementById("cssTextArea").value = "";
    document.getElementById("htmlTextArea").value = "";
    document.getElementById("resultDiv").innerHTML = "";
}


function cssClick() {
    var buttom = document.getElementById("cssButton");
    if(!isCss){
        buttom.style.backgroundColor = "#edc998";
        isCss = true;

        var content = document.getElementById("cssTextArea").value;
        document.getElementById("resultCss").innerHTML = content;
    }
    else {
        buttom.style.backgroundColor = "antiquewhite";
        isCss = false;
        
        var content = document.getElementById("cssTextArea").value;
        document.getElementById("resultCss").innerHTML = "";
    }
}


function defaultText(x) {
    if(x == "css"){
        document.getElementById("cssTextArea").value = 
            "h3 {\n\tcolor: blue;\n\ttext-align: center;\n}"
            +
            "\n\np {\n\tfont-family:cursive; \n\tfont-size: 22pt;\n\tcolor: green;\n} ";
    }
    else {
        document.getElementById("htmlTextArea").value = 
            "<h3> Greetings! </h3>\n"
            +
            "<p>Start by adding some HTML and CSS</p>";
    }
}


function loadHtml() {
    var content = document.getElementById("htmlTextArea").value;
    document.getElementById("resultDiv").innerHTML = content;
}



function changeTitle() {
    var input;
    input = prompt("Enter a new title");
    if(input != null){
        document.getElementById("nameH1").innerHTML = input;
        document.getElementById("nameTitle").innerHTML = input;
    }
}

