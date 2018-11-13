let titre = document.getElementById('titre');
let p_accroche = document.getElementById('p_accroche');
let description = document.getElementById('description');
let btn = document.getElementById('btn');

function Product(titre, p_accroche, description) {
  this.titre = titre;
  this.p_accroche = p_accroche;
  this.description = description;
}



Product.prototype.writeProduct = function(){

    let product1 = document.getElementById("product1");
    //create div in order to display new carts every time
    let createDiv = document.createElement("div");
    product1.appendChild(createDiv);

    let createTitre = document.createElement("p");
    createTitre.innerHTML = this.titre;
    createDiv.appendChild(createTitre);

    let createDesc = document.createElement("p");
    createDesc.innerHTML = this.description;
    createDiv.appendChild(createDesc);

    let createAccroche = document.createElement("p");
    createAccroche.innerHTML = this.p_accroche;
    createDiv.appendChild(createAccroche);
        //style for new carts
        createDiv.style.borderStyle= "solid #F8F7FF";
        createDiv.style.background = "#F8F8FF";
        createDiv.style.marginTop = "20px";


}

function products() {//function for recovering the form
    var titre1 = document.getElementById("titre").value;
    var p_accroche1 = document.getElementById("p_accroche").value;
    var description1 = document.getElementById("description").value;

    var object = new Product(titre1, p_accroche1, description1);

    document.getElementById("Product").value = "";
    document.getElementById("accroche").value = "";
    document.getElementById("description").value = "";

    object.writeProduct();

}



















// let produit = {
//   titre: "",
//   p_accroche: "",
//   description: "",
//   getProd: function(object){
//     this.titre = object.titre
//     this.p_accroche = object.p_accroche
//     this.description = object.description
//   }
// }
//
//
//
//
// let htmlManager = {
//   titre: document.getElementById('titre'),
//   p_accroche: document.getElementById('p_accroche'),
//   description: document.getElementById('description'),
//   setTitre: function(object){
//     this.titre.innerHTML = object.titre
//   },
//   setP_accroche: function(object){
//     this.p_accroche.innerHTML = object.p_accroche
//   },
//   setDescription: function(object){
//     this.description.innerHTML = object.description
//   }
// }
