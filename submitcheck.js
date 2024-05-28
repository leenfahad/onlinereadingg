const fname = document.getElementById('fname');
function validateForm() {
    var fnameValue = document.getElementById("fname").value;
    if (fnameValue.trim() === "") {
        alert("Please enter the fields!");
        return false;
    }
    return true; 
}