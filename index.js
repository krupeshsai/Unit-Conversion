let inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")




inputBtn.addEventListener("click",function(){

    
    
        lengthEl.textContent = ` ${Number(inputEl.value)} meters = ${ Number(inputEl.value * 3.281).toFixed(3) } feet | ${Number(inputEl.value)} feet = ${Number(inputEl.value / 3.281).toFixed(3)} meters `

        volumeEl.textContent = ` ${Number(inputEl.value)} liters = ${Number(inputEl.value * 0.264).toFixed(3)} gallons  | ${Number(inputEl.value)} gallons = ${Number(inputEl.value / 0.264).toFixed(3)} liters `
        
        massEl.textContent = ` ${Number(inputEl.value)} kilogram = ${Number(inputEl.value * 2.204).toFixed(3)} pounds | ${Number(inputEl.value)} pounds = ${Number(inputEl.value / 2.204).toFixed(3)} kilograms `
    




})
