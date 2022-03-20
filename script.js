
function selects(){
    
    const select = document.querySelector('#reason').value;
    alert(select);
    function reset(){
        document.getElementById("input1","input2","input3","input4").removeAttribute("required");
        document.getElementById("form1").style.display = "none";
        document.getElementById("form3").style.display = "none";
        document.getElementById("form4").style.display = "none";
        document.getElementById("form5").style.display = "none";
        document.getElementById("form2").style.opacity = "0";
    }
    if(!select){
        reset();
    }
    else if(select=="offw" || select=="hack"){
        reset();
        document.getElementById("form1").style.display = "block";        
        document.getElementById("input1").setAttribute("required","required");
    } else if(select=="ping"){
        reset();
        document.getElementById("form3").style.display = "block";
        document.getElementById("form2").style.opacity = "1";
        document.getElementById("input2").setAttribute("required","required");
    } else if(select=="bug"){
        reset();
        document.getElementById("form4").style.display = "block";        
        document.getElementById("input4").setAttribute("required","required");
    }



    if(!select || select != "ping"){
        document.getElementById("form5").style.display = "block";        
        document.getElementById("input3").setAttribute("required","required");
    }

}

function cadastrarDados(){
    let form = document.getElementById('survey');
    alert("Form: " + "\n" + form.name.value + "\n" + form.email.value + "\n" + reason.value)
}