$(document).ready(function() {
    
    $('#range').on('input', function() {
        $('#rangeNumber').text($(this).val());
    });


    $('#generate').on('click', function() {
        var rangeNumber = $('#range').val();
        var includeUppercase = $('#check1').is(':checked');
        var includeLowercase = $('#check2').is(':checked');
        var includeNumbers = $('#check3').is(':checked');
        var includeSymbols = $('#check4').is(':checked');

        var code = '';
        var code2 = '';

        if (includeUppercase) code += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) code += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) code += '0123456789';
        if (includeSymbols) code += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

        for (var i = 0; i < rangeNumber; i++) {
            code2 += code.charAt(Math.floor(Math.random() * code.length));
        }

        $('#text').val(code2);
    });


    $('#copy').on('click', function() {
        var copyText = document.getElementById("text");
        copyText.select();
        document.execCommand("copy");
    });
});