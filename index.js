
/* the < fieldset > element provides a grouping for a part of an HTML form, 
with a nested < legend > element providing a caption for the<fieldset>.
It takes few attributes, the most notable of which are form, 
which can contain the id of a < form > on the same page, allowing you to 
make the < fieldset > part of that < form > even if it is not nested inside it, 
and disabled, which allows you to disable the < fieldset > and all its contents in one go.
https://developer.mozilla.org/en-us/docs/web/html/element/fieldset
*/
document.addEventListener("DOMContentLoaded", function (event) {
    // disable the lower part of the form until we have user input for all values
    document.getElementById("newCust").disabled = true;
    document.getElementById("existingCust").disabled = true;
})

function newUserButton() {
    document.getElementById("buttons").disabled = true;
    document.getElementById("newCust").disabled = false;
    document.getElementById("existingCust").disabled = true;
}

function existingUserButton() {
    document.getElementById("buttons").disabled = true;
    document.getElementById("newCust").disabled = true;
    document.getElementById("existingCust").disabled = false;
}

function newUserSubmitEvent() {
    let name = document.getElementById("custname").value;
    alert("Welcome " + name + "!");
}

function existingUserSubmitEvent() {
    let name = document.getElementById("custname2").value;
    alert("Welcome back " + name + "!!");
}
