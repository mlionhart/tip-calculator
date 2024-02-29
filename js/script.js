//click to call function
$('#calculate').on('click', function() {

    // clear dom outputs
    $('#output').html('');
    $('#errors').html('');

    // creating handles to user input values
    var billCost = $('#billcost').val();
    var peopleNum = $('#peoplenumber').val();
    var tipPercentage = $('#percentagetip').val();

    var errors = $('#errors');
    errorOutput = ''

    // Validation
    if (billCost == 0 || '') {
        console.log(billCost)
        $('#output').css('display', 'none')
        $('#errors').css('color', 'red');
        $('#billcost').css('border', '4px solid red');
        errorOutput += '<br><br>' + '<strong>' + 'Enter a valid bill amount' + '<strong>';
        errors.html(errorOutput);
    }

    if (peopleNum < 1 || '') {
        console.log(peopleNum)
        $('#output').css('display', 'none')
        $('#errors').css('color', 'red');
        $('#peoplenumber').css('border', '4px solid red');
        errorOutput += '<br><br>' + '<strong>' + 'Enter a valid number of people' + '<strong>';
        errors.html(errorOutput);
    }

    if (tipPercentage == '0') {
        console.log(tipPercentage)
        $('#output').css('display', 'none')
        $('#errors').css('color', 'red');
        $('#percentagetip').css('border', '4px solid red');
        errorOutput += '<br><br>' + '<strong>' + 'Select a valid tip percentage' + '<strong>';
        errors.html(errorOutput);
    } // end of validation
  
    // Calculate tip
    var total = (billCost * tipPercentage) / peopleNum;
    // round to two decimal places
    total = Math.round(total * 100) / 100;
    // next line allows two digits after decimal point
    total = total.toFixed(2);
    console.log('tip percentage: ' + tipPercentage);
    console.log('people number: ' + peopleNum);
    console.log('bill cost: ' + billCost);
    // Display the tip
    $('#output').css('font-size', '24px');
    $('#output').html('<br>' + '<strong>' + '$' + total + ' Tip' + '</strong>');
  
});
  