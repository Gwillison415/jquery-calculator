$(document).ready(function() {



  let display = [];

  $('span').click(function() {

    if ($(this).is('#equals')) {
      eval();
    } else {
      display.push($(this).text());
      showDisplay();
    }
  })

  function showDisplay() {
    $('#screen').text(display.join(""));
  }



  function eval() {
    if (display.length === 0 || isNaN(display[0])) {
      return error();
    }

      display.forEach( (element) => {
        if (isNaN(parseInt(element))) {

          let operator = element;
          let result;
          let terms = display.join("").split(operator).map(element => parseInt(element));

          if (operator === '÷') {
            result = terms[0] / terms[1];
          } else if (operator === 'x') {
            result = terms[0] * terms[1];
          } else if (operator === '-') {
            result = terms[0] - terms[1];
          } else if (operator === '+') {
            result = terms[0] + terms[1];
          } else {
            return error();
          }
          display = [result];
          return $('#screen').text(result);

        }
      } )
  }


  $('#clear').click(function () {
    display = [];
    return showDisplay();
  })



  function error() {
    console.log('ERROR');
    return $('#screen').text('ERROR');
  }

});
