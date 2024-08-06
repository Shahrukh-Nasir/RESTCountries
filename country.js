const countryName= new URLSearchParams(location.search).get('name');
const flagImg = document.querySelector('.card-details img')
const countrytitle = document.querySelector('.card-content h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subregion = document.querySelector('.sub-region')
const capital = document.querySelector('.captial')
const backbutton = document.querySelector('.back-button')
const domain = document.querySelector('.domain')
const currency = document.querySelector('.currencies')
const language = document.querySelector('.lang')
const countryBorders = document.querySelector('.more-details')
const darkbtn  = document.querySelector('.dark-btn')



fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res)=>{
    return res.json();
}).then(([country])=>{
    flagImg.src = country.flags.svg
    countrytitle.innerText = country.name.common

     if(country.name.nativeName){
        nativeName.innerText = Object.values(country.name.nativeName)[0].common
     }else{
        nativeName.innerText = country.name.common
     }
     population.innerText = country.population
     region.innerText = country.region
     subregion.innerText = country.subregion
     capital.innerText = country.capital?.[0]
     domain.innerText = country.tld[0]
     if(country.currencies){
         currency.innerText = Object.values(country.currencies)[0].name 
     }
     language.innerText = Object.values(country.languages)[0]

     
        if(country.borders){
            country.borders.forEach((border)=>{
                fetch(`https://restcountries.com/v3.1/alpha/${border}
                `).then((res)=>{
                    return res.json();
                }).then(([borderCountry])=>{
                    const borderCountryTag = document.createElement('a')
                    borderCountryTag.innerText = borderCountry.name.common
                    borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
                    countryBorders.append(borderCountryTag)
                })
            })
        }
        darkbtn.addEventListener('click',()=>{
            document.body.classList.toggle('dark')
          })
        
})
