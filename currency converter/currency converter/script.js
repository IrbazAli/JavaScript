let base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
let fromOptions = document.querySelector("#select-from");
let toOptions = document.querySelector("#select-to");
let userInput=document.querySelector("#user");
let btn=document.querySelector("#convert");

let fillOptions = (element) => {

    for (let code in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = countryList[code];
        element.append(newOption);
    }
    element.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
};
fillOptions(fromOptions);
fillOptions(toOptions);

function updateFlag(element)
{
    let currCode=element.value;
    let newSrc=`https://flagsapi.com/${currCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}
btn.addEventListener("click",async()=>{
    let val=userInput.value;
    let fromValue = fromOptions.options[fromOptions.selectedIndex].innerText.toLowerCase();
    let toValue=toOptions.options[toOptions.selectedIndex].innerText.toLowerCase();
    let updatedUrl=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromValue}.json`;

    
       let response= await fetch(updatedUrl);
       let data=await response.json();
       let res=(data[fromValue]);
       let conversionRate=res[toValue];

       let convertedValue=val*conversionRate;
       let to=document.querySelector("#result");
       to.value=convertedValue;
})
