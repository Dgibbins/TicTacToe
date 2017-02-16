$(function(){
  var array1 = [];
  var array2 = [];
  $('#playerone').addClass('selected');
  $('#playertwo').addClass('notselected');
  $('td').on('click', function(){
    if ($(this).html()==="") {
      if ($('#playerone').attr('class')==='selected'){
        $(this).html("X");
        array1.push($(this).attr('class'));

        console.log(array1);
      }else{
        $(this).html("O");
        array2.push($(this).attr('class'));

        console.log(array2);
      }
      $('#playerone').toggleClass('selected notselected');
      $('#playertwo').toggleClass('notselected selected');
    }

    if (win(array1)) {
      setTimeout(function(){alert("Player One WINS!");}, 100);

    }else if (win(array2)) {
      setTimeout(function(){alert("Player Two WINS!");}, 100);

    }else if ((array1.length + array2.length) >= 9) {
      setTimeout(function(){alert("Tie!");}, 100);
      
    }

  });

  function win(array){
    var countFirstRow = 0,
        countSecondRow = 0,
        countThirdRow = 0,
        countFirstColumn = 0,
        countSecondColumn = 0,
        countThirdColumn = 0,
        diagonals = [],
        reDiagonals = [];
    for (var i = 0; i < array.length; i++) {
      switch (array[i][0]) {
        case "1":
          if (array[i][1] === "1") {
            diagonals.push(array[i]);
          }
          countFirstRow++;
          break;
        case "2":
          if (array[i][1] === "2") {
            diagonals.push(array[i]);
            reDiagonals.push(array[i]);
          }
          countSecondRow++;
          break;
        case "3":
          if (array[i][1] === "3") {
            diagonals.push(array[i]);
          }
          countThirdRow++;
          break;
      }
      switch (array[i][1]) {
        case "1":
          if (array[i][0] === "3") {
            reDiagonals.push(array[i]);
          }
          countFirstColumn++;
          break;
        case "2":
          countSecondColumn++;
          break;
        case "3":
          if (array[i][0] === "1") {
            reDiagonals.push(array[i])
          }
          countThirdColumn++;
          break;
      }
    }
    if (countFirstRow > 2 || countSecondRow > 2 || countThirdRow > 2 || countFirstColumn > 2 || countSecondColumn > 2 || countThirdColumn > 2 || diagonals.length > 2 || reDiagonals.length > 2) {
      return true;
    }else {
      return false;
    }
  }


});
