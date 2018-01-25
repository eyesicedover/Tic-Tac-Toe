// BACK END
function Board() {
  this.tl = "";
  this.tm = "";
  this.tr = "";
  this.ml = "";
  this.mm = "";
  this.mr = "";
  this.bl = "";
  this.bm = "";
  this.br = "";
}

Board.prototype.win = function(player) {
  var char = "B"
    if (player === 1) {
      char = "X";
    } else {
      char = "O";
    }
    debugger;
  if (this.tl === char && this.tm === char && this.tr === char ) {
    return true;
  } else if (this.ml === char && this.mm === char && this.mr === char) {
    return true;
  } else if (this.bl === char && this.bm === char && this.br === char) {
    return true;
  } else if (this.tl === char && this.ml === char && this.bl === char) {
    return true;
  } else if (this.tm === char && this.mm === char && this.bm === char) {
    return true;
  } else if (this.tr === char && this.mr === char && this.br === char) {
    return true;
  } else if (this.tr === char && this.mm === char && this.bl === char) {
    return true;
  } else if (this.tl === char && this.mm === char && this.br === char) {
    return true;
  } else {
    return false;
  }
}

function playerTurn(player) {
  if (player === 1) {
    return 2;
  } else {
    return 1;
  }
}

// FRONT END
$(document).ready(function() {
  var player = 1;
  var newBoard = new Board();
  console.log(newBoard);

  // top left
  $(".tl").click(function() {
    if (player === 1) {
      $("#tl").text("X");
      newBoard.tl = "X";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 1 Wins!");
      }
    } else {
      $("#tl").text("O");
      newBoard.tl = "O";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 2 Wins!");
      }
    }
    player = playerTurn(player);
  }); // .tl click

  // top middle
  $(".tm").click(function(){
    if (player === 1) {
      $("#tm").text("X");
      newBoard.tm = "X";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 1 Wins!");
      }
    } else {
      $("#tm").text("O");
      newBoard.tm = "O";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 2 Wins!");
      }
    }
    player = playerTurn(player);
  }); // .tm click

  // top right
  $(".tr").click(function(){
    if (player === 1) {
      $("#tr").text("X");
      newBoard.tr = "X";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 1 Wins!");
      }
    } else {
      $("#tr").text("O");
      newBoard.tr = "O";
      var didWin = newBoard.win(player);
      debugger;
      if (didWin === true) {
        $(".winText").text("Player 2 Wins!");
      }
    }
    player = playerTurn(player);
  }); // .tm click

  // middle left
  $(".ml").click(function() {
    if (player === 1) {
      $("#ml").text("X");
      newBoard.ml = "X";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 1 Wins!");
      }
    } else {
      $("#ml").text("O");
      newBoard.ml = "O";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 2 Wins!");
      }
    }
    player = playerTurn(player);
  });

  // middle middle
  $(".mm").click(function() {
    if (player === 1) {
      $("#mm").text("X");
      newBoard.mm = "X";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 1 Wins!");
      }
    } else {
      $("#mm").text("O");
      newBoard.mm = "O";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 2 Wins!");
      }
    }
    player = playerTurn(player);
  });

  // middle right
  $(".mr").click(function() {
    if (player === 1) {
      $("#mr").text("X");
      newBoard.mr = "X";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 1 Wins!");
      }
    } else {
      $("#mr").text("O");
      newBoard.mr = "O";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 2 Wins!");
      }
    }
    player = playerTurn(player);
  });

  // bottom left
  $(".bl").click(function() {
    if (player === 1) {
      $("#bl").text("X");
      newBoard.bl = "X";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 1 Wins!");
      }
    } else {
      $("#bl").text("O");
      newBoard.bl = "O";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 2 Wins!");
      }
    }
    player = playerTurn(player);
  });

  // bottom middle
  $(".bm").click(function() {
    if (player === 1) {
      $("#bm").text("X");
      newBoard.bm = "X";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 1 Wins!");
      }
    } else {
      $("#bm").text("O");
      newBoard.bm = "O";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 2 Wins!");
      }
    }
    player = playerTurn(player);
  });

  // bottom right
  $(".br").click(function() {
    if (player === 1) {
      $("#br").text("X");
      newBoard.br = "X";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 1 Wins!");
      }
    } else {
      $("#br").text("O");
      newBoard.br = "O";
      var didWin = newBoard.win(player);
      if (didWin === true) {
        $(".winText").text("Player 2 Wins!");
      }
    }
    player = playerTurn(player);
  });


}); // doc ready
