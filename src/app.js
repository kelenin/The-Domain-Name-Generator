/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let sustant = ["jogger", "racoon"];
  let extensions = ["com", "es", "net", "io", "us"];

  document
    .querySelector(".dominio")
    .classList.add(GenerarDominios(pronoun, adj, sustant, extensions));
};

function GenerarDominios(pronoun, adj, sustant, extensions) {
  let pronunciacion = pronoun[Math.floor(Math.random() * pronoun.length)];
  let adjetivo = adj[Math.floor(Math.random() * adj.length)];
  let sustantivo = sustant[Math.floor(Math.random() * sustant.length)];
  let extension = extensions[Math.floor(Math.random() * extensions.length)];
  let domin = pronunciacion + "" + adjetivo + "" + sustantivo + "." + extension;

  //return domin[domin];
  console.log(domin);
}
