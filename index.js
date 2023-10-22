document.getElementById("reverseb").addEventListener("click", function () {
    const string = document.getElementById("string").value;
    const rstring = string.split("").reverse().join("");
    alert(rstring);
});