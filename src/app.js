/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let sustant = ["jogger", "racoon"];
  let extensions = ["com", "es", "net", "io", "us"];

  document.querySelector(".dominio").innerHTML = GenerarDominios(
    pronoun,
    adj,
    sustant,
    extensions
  );
};

function GenerarDominios(pronoun, adj, sustant, extensions) {
  let pronunciacion = Math.floor(Math.random() * pronoun.length);
  let adjetivo = Math.floor(Math.random() * adj.length);
  let sustantivo = Math.floor(Math.random() * sustant.length);
  let extension = Math.floor(Math.random() * extensions.length);
  let domin =
    pronoun[pronunciacion] +
    "" +
    adj[adjetivo] +
    "" +
    sustant[sustantivo] +
    "." +
    extensions[extension];

  return domin;
}
