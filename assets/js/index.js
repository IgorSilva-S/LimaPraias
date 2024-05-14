document.getElementById("cpfInp").addEventListener("input", (caractere) => {
  var value = caractere.target.value;
  var cpfPattern = value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
  caractere.target.value = cpfPattern;
});

document.getElementById("cepInp").addEventListener("input", function(caractere) {
  var value = caractere.target.value;
  var cepPattern = value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1"); 
  caractere.target.value = cepPattern;
});

document.getElementById("numberInp").addEventListener("input", function(caractere) {
  var value = caractere.target.value;
  var numberPattern = value
    .replace(/(\D{1})(\D)/g, "$1").toUpperCase()
    .replace(/(\d{1})(\D)/g, "$1")
    .replace(/(\d{5})\d+?$/, "$1");
  caractere.target.value = numberPattern;
});

document.getElementById("dateInp").addEventListener("input", function(caractere) {
  var value = caractere.target.value;
  var datePattern = value
  .replace(/\D/g, "")
  .replace(/(\d{2})(\d)/, "$1/$2")
  .replace(/(\d{2})(\d)/, "$1/$2")
  .replace(/(\d{4})\d+?$/, "$1"); 
  caractere.target.value = datePattern;
});

document.getElementById("phoneInp").addEventListener("input", function (caractere) {
  var value = caractere.target.value;
  var phonePattern = value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
  caractere.target.value = phonePattern;
});