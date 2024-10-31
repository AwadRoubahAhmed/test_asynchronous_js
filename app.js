//(XHR) est une API JavaScript pour créer des requêtes AJAX.
//Ses méthodes permettent d'envoyer des requêtes réseau entre le navigateur et un serveur.
/*
const getPosts = (resources) => {
  //Etape 1;
  let request = new XMLHttpRequest();

  //Etape 4;
  request.addEventListener("readystatechange", () => {
    let datas;
    if (request.readyState === 4 && request.status === 200) {
      datas = JSON.parse(request.responseText);

      //datas.map((data) => console.log(data));
      console.log(datas);
    } else if (request.readyState === 4 && request.status !== 200) {
      console.error("Error!!!!!!!!!!");
    }
  });

  //Etape 2;
  //GET=> lecture; POST=> Ajouter, PUT=> Modification, DELETE=> suppr;
  request.open("GET", resources);

  //Etape 3;
  request.send();
};

//getPosts("https://jsonplaceholder.typicode.com/posts");
getPosts("./posts.JSON"); 



//Méthodes pour parcourir le tableau;
      //datas.forEach(data => console.log(data));
      /*for (let data of datas) {
        console.log(data);
        }*/

/////////////////////////////CALLBACK FUNCTION///////////////////////////////////////////
//Exemple 1:
/*function firstFunction(callback) {
  setTimeout(() => {
    console.log("First !");
    callback();
  }, 2000);
}

function secondFunction() {
  console.log("Second !!");
}
firstFunction(secondFunction); 

//Exemple 2:

function greeting(name) {
  console.log(`Hello ${name} you are welcom in Paris !!`);
}

function processUserInput(callback) {
  let name = prompt("Enter your Name !!");
  callback(name);
}

processUserInput(greeting); 

//Exemple 3:

function sumNumbers(num1, num2, callback) {
  let result;
  setTimeout(() => {
    result = num1 + num2;
    callback(result);
  }, 2000);
  //return num1 + num2;
}
function showResult(value) {
  console.log(`The Sum is ${value}`);
}
sumNumbers(25, 25, showResult); 

//Exemple 4:
function somme(a, b) {
  return a + b;
}

function produit(a, b) {
  return a * b;
}

function calculate(x, y, operation) {
  return operation(x, y);
}

console.log(calculate(3, 4, somme));
console.log(calculate(2, 5, produit)); */

//////////////////////////////////// PROMISES //////////////////////////////////////
//First way
/*const condition = true;

const testPromises = new Promise((resolve, reject) => {
  if (condition) {
    resolve("The Promise is looking OK!!");
  } else {
    reject("The Promise is not Ok Error !!");
  }
});

testPromises
  .then((succesMessage) => console.log(succesMessage))
  .catch((error) => console.log(error)); */

//Promises in real API;

/*const getPosts = (resources) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      //readystatechange = état pret à changé

      let datas;

      if (request.readyState === 4 && request.status === 200) {
        datas = JSON.parse(request.responseText);
        resolve(datas);
      } else if (request.readyState === 4 && request.status !== 200) {
        reject("Error datas, something went wrong !!!");
      }
    });

    //GET=> lecture; POST=> Ajouter, PUT=> Modification, DELETE=> supprimer;
    request.open("GET", resources);

    request.send();
  });
};

/*getPosts("./posts.JSON")
  .then((datas) => console.log(datas))
  .catch((error) => console.error(error)); 

getPosts("https://jsonplaceholder.typicode.com/posts")
  .then((datas) => {
    console.log("Posts" ,datas);
    return getPosts("https://jsonplaceholder.typicode.com/comments");
  })
  .then((datas) => {
    console.log("Comments" ,datas);
    return getPosts("https://jsonplaceholder.typicode.com/albums");
  })
  .then((datas) => {
    console.log("Albums" ,datas);
  })
  .catch((error) => console.error(error)); */

/////////////////////////////////// FETCH API //////////////////////////////////////
//Second way
/*
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => {
    return response.json();
  })
  .then((datas) => console.log(datas))
  .catch((error) => console.error(error)); */

/////////////////////////////// Async Await API///////////////////////////////////////////

const getComments = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/comments");

  const response = await request.json();

  return response;
};

getComments()
  .then((datas) => console.log(datas))
  .catch((error) => console.error(error));
