import "./styles.css";

let sircard = [
  {
    numar: "31.517",
    categ: "Înscriși pe liste permanente și speciale",
    culoare: "primary"
  },
  {
    numar: "14.130",
    categ: "Votanți pe liste permanente și speciale",
    culoare: "secondary"
  },
  { numar: "928", categ: "Votanți pe liste suplimentare", culoare: "info" },
  { numar: "166", categ: "Votanți cu urnă mobilă", culoare: "danger" },
  { numar: "15,224", categ: "Total votanți", culoare: "warning" },
  { numar: "48,30%", categ: "Prezență la urne", culoare: "success" }
];

document.getElementById("app").innerHTML = `
  <div style="background-color: #32C787;">
    <div class="container" style="position: relative;">
      <h5 class="pt-3 pb-3 mb-0 d-inline-block" style="color: #FFF;">
          Alegeri Europarlamentare 2019
      </h5>
      <div class="dreapta">
      <button type="button" class="btn btn-success"><i class="fa fa-download" aria-hidden="true"></i> DESCARCĂ CSV</button> 
      <button type="button" class="btn btn-success"><i class="fa fa-exchange" aria-hidden="true"></i> REFERENDUM</button>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row pt-5" id="carduri">
    </div>
  </div> 
`;

const carduri = sircard
  .map((el) => {
    return `
<div class="col-sm-2">
  <div class="card text-center h-100">
    <div class=${"bg-" + el.culoare}
      style="width: 80%; height: 40px; margin: -12px auto 0 auto"
    >
  </div>
  <div class="card-body">
    <h5 class="card-title">${el.numar}</h5>
    <p class="card-text" style="color: #888;">
      ${el.categ}
    </p>
  </div>
  </div>
  </div>`;
  })
  .reduce(function (continut, item) {
    return continut + item + "\n";
  }, "");

//  Morala: argumentul func'iei reduce() nu e bine sa fie o functie de tip "arrow function"

document.getElementById("carduri").innerHTML = carduri;
