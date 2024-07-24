//Search Bar
function search_motorcycle() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('motor-list');

    for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)){
        x[i].style.display = "none";
        }
    else {
        x[i].style.display = "list-item";
        }
    }
}

//Tab Button
function openCity(evt, tabName){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    document.getElementById("defaultOpen").click();
}