function how_to_play()
{
    window.location = "help.html";
}

function user_value()
{
    localStorage.setItem("player1", document.getElementById("name_input1").value);
    localStorage.setItem("player2", document.getElementById("name_input2").value);
    window.location = "game.html";
}
