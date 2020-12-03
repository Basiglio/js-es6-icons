








$( document ).ready(function() {

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


  // CICLO NEL MIO ARRAY DI OGGETTI
  icons.forEach(
    // PRENDO IL SINGOLO OGGETTO AD OGNI ITERAZIONE
    (object) => {
      console.log(object);
      // STAMPO IL SINGOLO OGGETTO
      $(".container").append(
        `
        <div>
         <i class="${object.family} ${object.prefix}${object.name}"></i>
         <h2> ${object.name} </h2>
        </div>
        `
      )
  });
});
