// milestone 2:
// definire un array di colori e associare ad ogni tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al tipo.








$( document ).ready(function() {


  // CREO ARRAY DI OGGETTI ICONE
  const icons = [
   {
     name: "dog",
     prefix: "fa-",
     type: "animal",
     family: "fas"
    },
    {
      name: "fish",
      prefix: "fa-",
      type: "animal",
      family: "fas"
    },
    {
      name: "tractor",
      prefix: "fa-",
      type: "vehicle",
      family: "fas"
    },
    {
      name: "hippo",
      prefix: "fa-",
      type: "animal",
      family: "fas"
    },
    {
      name: "spider",
      prefix: "fa-",
      type: "animal",
      family: "fas"
    },
    {
      name: "apple-alt",
      prefix: "fa-",
      type: "vegetable",
      family: "fas"
    },
    {
      name: "carrot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas"
    },
    {
      name: "lemon",
      prefix: "fa-",
      type: "vegetable",
      family: "fas"
    },
    {
      name: "dragon",
      prefix: "fa-",
      type: "animal",
      family: "fas"
    },
    {
      name: "pepper-hot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas"
    },
    {
      name: "space-shuttle",
      prefix: "fa-",
      type: "vehicle",
      family: "fas"
    },
    {
      name: "truck-monster",
      prefix: "fa-",
      type: "vehicle",
      family: "fas"
    },
    {
      name: "wheelchair",
      prefix: "fa-",
      type: "vehicle",
      family: "fas"
    },
    {
      name: "tram",
      prefix: "fa-",
      type: "vehicle",
      family: "fas"
    },
    {
      name: "fighter-jet",
      prefix: "fa-",
      type: "vehicle",
      family: "fas"
    },
    {
      name: "helicopter",
      prefix: "fa-",
      type: "vehicle",
      family: "fas"
    },
  ];
  console.log(icons);
  // CREO ARRAY DI COLORI
  const colors = ["red", "green", "blue"];


  // CREO UNA MAPPA DEL MIO ARRAY DI OGGETTI
  icons.forEach(
    // PRENDO IL SINGOLO OGGETTO
    (object)  => {
      // DEFINISCO LE CONDIZIONI PER I COLORI
      if (object.type == "animal") {
        object.color = colors[0];
      } else if (object.type == "vegetable") {
        object.color = colors[1];
      } else {
        object.color = colors[2];
      }
    }
  );

  // CICLO NEL MIO ARRAY DI OGGETTI
  icons.forEach(
    // PRENDO IL SINGOLO OGGETTO AD OGNI ITERAZIONE
    (object) => {
      // STAMPO IL SINGOLO OGGETTO
      $(".container").append(
        `
        <div>
         <i class="${object.family} ${object.prefix}${object.name}" style=color:${object.color}></i>
         <h2> ${object.name} </h2>
        </div>
        `
      )
  });
});
