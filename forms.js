function selectFormType() {
    var x = document.getElementById("selectForm");
    var i = x.selectedIndex;
    document.getElementById("formTitle1").innerHTML = x.options[i].text;


    if (i === 1) {
        document.getElementById("div1").style.display = "block";
        document.getElementById("div2").style.display = "none";
        document.getElementById("div3").style.display = "none";
    } else if (i === 2) {
        document.getElementById("div1").style.display = "none";
        document.getElementById("div2").style.display = "block";
        document.getElementById("div3").style.display = "none";
    } else if (i === 3) {
        document.getElementById("div1").style.display = "none";
        document.getElementById("div2").style.display = "none";
        document.getElementById("div3").style.display = "block";
    }
}
