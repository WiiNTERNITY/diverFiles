function nouveauContenu() {
  document.write("chargement du nouveau contenu");
  document.open();
  document.write(
    "<h1>Assez de l'ancien contenu, passons au nouveau&nbsp;!</h1>"
  );
  document.close();
}

function changeColor() {
  document.getElementByTag("h1");
}

function postForm(params) {
  var inName = document.getElementById("inName").value;
  var inEmail = document.getElementById("inEmail").value;
  var inPwd = document.getElementById("inPwd").value;

  console.log("nom recuperer de l utilisateur", inName, inEmail, inPwd);
  console.log("email recuperer de l utilisateur", inEmail);
  console.log("Password recuperer de l utilisateur", inPwd);
}
