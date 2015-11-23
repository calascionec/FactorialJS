var factorial = function(num) {
  // var total = 1;
  // while(num>0) {
  //   total *= num;
  //   num -= 1;
  // }
  // return total;
  if (num < 0) {
    return -1;
  }
  else if (num === 0) {
    return 1;
  }
  else {
    return (num * factorial(num-1));
  }
};


$(document).ready(function() {
  $('form#factorial').submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = factorial(number);
    $('.not').empty();
    $('.answer').empty();
    $('.number').text(number);

    if (result !== -1 && result !== Infinity) {
      $('.answer').text(result);
    }  else if (result === Infinity) {
      $('.answer').text("really really big! Try a smaller number");
    } else {
      $('.not').text("No factorial");
    }

    $('#result').show();
    event.preventDefault();
  });
});
