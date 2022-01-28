const earlyForm = document.getElementById('access-form')

earlyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('email')

    if(emailInput.value == '') {
        document.getElementById('early-error').style.visibility = "visible";

        setTimeout(function() {
            document.getElementById('early-error').style.visibility = "hidden";
        }, 4000)
    }
})