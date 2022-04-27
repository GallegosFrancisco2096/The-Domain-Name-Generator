let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".cl", ".com", ".us", ".pe"];
var texto = "";

for (let I of pronoun) {
  for (let S of adj) {
    for (let F of noun) {
      for (let D of domain) {
        texto = I + S + F + D;
        console.log(texto);
      }
    }
  }
}
