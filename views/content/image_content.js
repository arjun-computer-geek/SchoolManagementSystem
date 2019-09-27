function classrooms(selected){
    document.getElementsByClassName("trips").style.display="none"
    document.getElementsByClassName("education").style.display= "none";
   selected.style.display = "flex";
}

function trips(selected){
    document.getElementsByClassName("classrooms").style.display="none"
    document.getElementsByClassName("education").style.display= "none";
   selected.style.display = "flex";
}

function classrooms(selected){
    document.getElementsByClassName("trips").style.display="none"
    document.getElementsByClassName("classrooms").style.display= "none";
   selected.style.display = "flex";
}