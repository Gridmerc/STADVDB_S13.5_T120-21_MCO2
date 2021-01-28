$(document).ready(function(){
    $('#submit').prop('disabled', true);
    function isFilled(){
        var userInput = validator.trim($('#userInput').val());
        var inputEmpty = validator.isEmpty(userInput);
        if(inputEmpty)
        {
            $('#submit').prop('disabled', true);
            $('#errorMsg').css('color', 'red');
        }
        else
        {
            $('#submit').prop('disabled', false);
            $('#errorMsg').css('color', '#202020');
        }
    }

    $('#userInput').change(function () {
        isFilled();
    });
});