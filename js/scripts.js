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
  } else if ((this.tl !== "") && (this.tm !== "") && (this.tr !== "") && (this.ml !== "") && (this.mm !== "") && (this.ml !== "") && (this.br !== "") && (this.bm !== "") && (this.br !== "")) {
      return "cat";
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

function showWin(z) {
  if (z === true) {
    $(".winText").text("Player 1 Wins!");
    $("#playAgain").show();
  } else if (z === "cat") {
    $(".winText").text("Cat's Game!");
    $("#playAgain").show();
  }
}


// FRONT END
$(document).ready(function() {
  var player = 1;
  var newBoard = new Board();
  console.log(newBoard);
  var didWin = false;

  // top left
  $(".tl").click(function() {
    if (newBoard.tl === "") {
      if (player === 1) {
        $("#tl").text("X");
        newBoard.tl = "X";
        didWin = newBoard.win(player);
        showWin(didWin);
      } else {
        $("#tl").text("O");
        newBoard.tl = "O";
        didWin = newBoard.win(player);
        showWin(didWin);
      }
      player = playerTurn(player);
    }
  }); // .tl click

  // top middle
  $(".tm").click(function(){
    if (newBoard.tm === "") {
      if (player === 1) {
        $("#tm").text("X");
        newBoard.tm = "X";
        didWin = newBoard.win(player);
        showWin(didWin);
      } else {
        $("#tm").text("O");
        newBoard.tm = "O";
        didWin = newBoard.win(player);
        showWin(didWin);
      }
      player = playerTurn(player);
    }
  }); // .tm click

  // top right
  $(".tr").click(function(){
    if (newBoard.tr === "") {
      if (player === 1) {
        $("#tr").text("X");
        newBoard.tr = "X";
        didWin = newBoard.win(player);
        showWin(didWin);
      } else {
        $("#tr").text("O");
        newBoard.tr = "O";
        didWin = newBoard.win(player);
        showWin(didWin);
      }
      player = playerTurn(player);
    }
  }); // .tm click

  // middle left
  $(".ml").click(function() {
    if (newBoard.ml === "") {
      if (player === 1) {
        $("#ml").text("X");
        newBoard.ml = "X";
        didWin = newBoard.win(player);
        showWin(didWin);
      } else {
        $("#ml").text("O");
        newBoard.ml = "O";
        didWin = newBoard.win(player);
        showWin(didWin);
      }
      player = playerTurn(player);
    }
  });

  // middle middle
  $(".mm").click(function() {
    if (newBoard.mm === "") {
      if (player === 1) {
        $("#mm").text("X");
        newBoard.mm = "X";
        didWin = newBoard.win(player);
        showWin(didWin);
      } else {
        $("#mm").text("O");
        newBoard.mm = "O";
        didWin = newBoard.win(player);
        showWin(didWin);
      }
      player = playerTurn(player);
    }
  });

  // middle right
  $(".mr").click(function() {
    if (newBoard.mr === "") {
      if (player === 1) {
        $("#mr").text("X");
        newBoard.mr = "X";
        didWin = newBoard.win(player);
        showWin(didWin);
      } else {
        $("#mr").text("O");
        newBoard.mr = "O";
        didWin = newBoard.win(player);
        showWin(didWin);
      }
      player = playerTurn(player);
    }
  });

  // bottom left
  $(".bl").click(function() {
    if (newBoard.bl === "") {
      if (player === 1) {
        $("#bl").text("X");
        newBoard.bl = "X";
        didWin = newBoard.win(player);
        showWin(didWin);
      } else {
        $("#bl").text("O");
        newBoard.bl = "O";
        didWin = newBoard.win(player);
        showWin(didWin);
      }
      player = playerTurn(player);
    }
  });

  // bottom middle
  $(".bm").click(function() {
    if (newBoard.bm === "") {
      if (player === 1) {
        $("#bm").text("X");
        newBoard.bm = "X";
        didWin = newBoard.win(player);
        showWin(didWin);
      } else {
        $("#bm").text("O");
        newBoard.bm = "O";
        didWin = newBoard.win(player);
        showWin(didWin);
      }
      player = playerTurn(player);
    }
  });

  // bottom right
  $(".br").click(function() {
    if (newBoard.br === "") {
      if (player === 1) {
        $("#br").text("X");
        newBoard.br = "X";
        didWin = newBoard.win(player);
        showWin(didWin);
      } else {
        $("#br").text("O");
        newBoard.br = "O";
        didWin = newBoard.win(player);
        showWin(didWin);
      }
      player = playerTurn(player);
    }
  });

  $("button").click(function(){
    location.reload();
  });


}); // doc ready
