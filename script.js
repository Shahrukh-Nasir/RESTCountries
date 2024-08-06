const countriescontainer = document.querySelector(".countries-container");
const filterbyregion = document.querySelector('.filter')
const searchbar = document.querySelector('.search-bar')
const darkbtn  = document.querySelector('.dark-btn')

let allcountriesdata = 

fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    allcountriesdata = data;
    data.forEach((country) => {
      const countrycard = document.createElement("a");
      countrycard.classList.add("contries-card");
      countrycard.href = `country.html?name=${country.name.common}`;
      countrycard.innerHTML = `
<img src="${country.flags.svg}" alt="flag">
<div class="content">
    <h3 class="card-title">${country.name.common}</h3>
    <div class="sub-content">
        <p><b>Population:</b> ${country.population.toLocaleString()}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Capital:</b> ${country.capital}</p>
    </div>
</div>
`;
      countriescontainer.append(countrycard);
    });
  });

  filterbyregion.addEventListener('change',(e)=>{
    fetch(`https://restcountries.com/v3.1/region/${filterbyregion.value}
    `)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    countriescontainer.innerHTML = ''
    data.forEach((country) => {
      const countrycard = document.createElement("a");
      countrycard.classList.add("contries-card");
      countrycard.href = `country.html?name=${country.name.common}`;
      countrycard.innerHTML = `
<img src="${country.flags.svg}" alt="flag">
<div class="content">
    <h3 class="card-title">${country.name.common}</h3>
    <div class="sub-content">
        <p><b>Population:</b> ${country.population.toLocaleString()}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Capital:</b> ${country.capital}</p>
    </div>
</div>
`;
countriescontainer.append(countrycard);
});
});
})
function rendercountries(data) {
  countriescontainer.innerHTML = ''
  data.forEach((country) => {
    const countrycard = document.createElement("a");
    countrycard.classList.add("contries-card");
    countrycard.href = `country.html?name=${country.name.common}`;
    countrycard.innerHTML = `
<img src="${country.flags.svg}" alt="flag">
<div class="content">
  <h3 class="card-title">${country.name.common}</h3>
  <div class="sub-content">
      <p><b>Population:</b> ${country.population.toLocaleString()}</p>
      <p><b>Region:</b> ${country.region}</p>
      <p><b>Capital:</b> ${country.capital}</p>
  </div>
</div>
`;
countriescontainer.append(countrycard);
});  
}

searchbar.addEventListener('input',(e)=>{
  const filteredcountries = allcountriesdata.filter((country)=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  rendercountries(filteredcountries)
  })

  darkbtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
  })

// const countriescontainer = document.querySelector('.countries-container')
// const countrycard = document.createElement('a')
// countrycard.classList.add('contries-card')

// countriescontainer.append(countrycard)

// OLD APPROACH

// const cardimg = document.createElement('img')
// cardimg.src = 'https://flagcdn.com/ch.svg'
// countrycard.append(cardimg) // to add the image in country card we use append
// console.log(cardimg)

// NEW APPROACH
// const cardHTML = `
// <img src="https://flagcdn.com/ch.svg" alt="flag">
// <div class="content">
//     <h3 class="card-title">Suisse</h3>
//     <div class="sub-content">
//         <p><b>Population:</b> 8654622</p>
//         <p><b>Region:</b> Europe</p>
//         <p><b>Capital:</b> Switzerland</p>
//     </div>
// </div>
// `
// countrycard.innerHTML = cardHTML


