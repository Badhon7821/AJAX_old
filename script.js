
const container = document.querySelector(".container")
const chooseCountry = document.querySelector(".country-choose");
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
  
  const btnValue = chooseCountry.value;
  const request = new XMLHttpRequest();
request.open("GET", `https://restcountries.com/v2/name/${btnValue}`);
request.send();

request.addEventListener("load", function(){
  const [data] =JSON.parse(this.responseText);
  renderData(data);
})
})







function renderData(country){
  const html = `
  <div class="country-details">
  <div class="coutry-flag">
    <img src="${country.flag}" alt="" class="flag">
  </div>
  <div class="card-text">
  <h1 class="country-name">${country.name}</h1>
  <p class="country-language">language : ${country.languages[0].nativeName}</p>
  <p class="country-area">Area : ${country.area}</p>
  <p class="country-courrencies">Currencies code :  ${country.currencies[0].code}</p>
  </div>
</div>
  `

  container.insertAdjacentHTML("afterbegin", html);
}