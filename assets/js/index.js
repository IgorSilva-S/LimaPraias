document.getElementById("cpfInp").addEventListener("input", function(caractere) {
  var value = caractere.target.value;
  var cpfPattern = value
    .replace(/\D/g, "") // Remove qualquer coisa que não seja número
    .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona ponto após o terceiro dígito
    .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona ponto após o sexto dígito
    .replace(/(\d{3})(\d)/, "$1-$2") // Adiciona traço após o nono dígito
    .replace(/(-\d{2})\d+?$/, "$1"); // Impede entrada de mais de 11 dígitos
  caractere.target.value = cpfPattern;
});

document.getElementById("cepInp").addEventListener("input", function(caractere) {
  var value = caractere.target.value;
  var cepPattern = value
    .replace(/\D/g, "") // Remove qualquer coisa que não seja número
    .replace(/(\d{5})(\d)/, "$1-$2") // Adiciona traço após o quinto dígito
    .replace(/(-\d{3})\d+?$/, "$1"); // Impede entrada de mais de 8 dígitos
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