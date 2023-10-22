document.getElementById("bill").addEventListener("click", function () {
    const sub_tot = parseInt(document.getElementById("sub_tot").value);
    const tip = parseInt(document.getElementById("tip").value);
    const total = (sub_tot * tip * 0.01) + sub_tot;
    alert("The total bill is:"+total);
}
);