var guest = [];

function submit() {
    var name = document.getElementById("name").value;
    guest.push(name);
    document.getElementById("comma").innerHTML = guest;
}

function display() {
    var remove_commas = guest.join("<br>");
    document.getElementById("list_p").innerHTML = remove_commas;
}

function sorting() {
    guest.sort();
    var sort = guest.join("<br>");
    document.getElementById("sortedNames").innerHTML = sort;
}


function search() {
    var s = document.getElementById("search").value;
    var found = 0;
    var j;
    for (j = 0; j < guest.length; j++) {
        if (s == guest[j]) {found = found + 1;}
        
    }
    document.getElementById("searchResults").innerHTML="Name found" +found+ " time/s";
    console.log("Name found"+found+"time/s");
}