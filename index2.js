document.getElementById("palinb").addEventListener("click", function () {
    const num = document.getElementById("num").value;
    const list1 = num.split(" ");
    const list2 = [];
    for (let i=0; i < list1.length; i++) {
        const a1 = list1[i];
        const a2 = a1.split("").reverse().join("");
        if (a1 == a2) {
            alert(a1+" is a plaindrome");
        }
        else {
            alert(a1+" is not a palindrome");
        }
    }
});