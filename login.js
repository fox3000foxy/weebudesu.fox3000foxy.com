document.addEventListener("DOMContentLoaded", () => {
    if(!document.querySelector("#error").innerHTML.includes("error")) {
        document.querySelector("#error").style.display = "block";
    }
});