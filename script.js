const form = document.querySelector('form')
let result = document.querySelector('#result')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    if (!(height) || !(weight)) {
        result.innerText = 'Fill Both Fields First'
        result.style.color = 'red'
    }
    else if ((isNaN(height) || height <= 0) && (isNaN(weight) || weight <= 0)) {
        result.innerText = 'Invalid Values'
        result.style.color = 'red'
    }
    else if (isNaN(height) || height <= 0) {
        result.innerText = 'Invalid Height'
        result.style.color = 'red'
    }
    else if (isNaN(weight) || weight <= 0) {
        result.innerText = 'Invalid Weight'
        result.style.color = 'red'
    }
    else {
        const bmi = parseFloat((weight / ((height * height) / 10000)).toFixed(2))
        let category;
        if (bmi < 18.5) {
            category = 'Underweight'
            result.style.color = 'yellow'
        }
        else if (bmi <= 25) {
            category = 'Normal'
            result.style.color = 'green'
        }
        else {
            category = 'Overweight'
            result.style.color = 'orange'
        }
        result.innerText = `${bmi} (${category})`
    }
})

form.addEventListener('reset', (e) => {
    result.innerText = 'Result Will Appear Here'
    result.style.color = '#fff'
})