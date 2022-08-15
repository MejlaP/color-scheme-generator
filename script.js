// button element for fetch color
const fetchButton = document.getElementById('color-fetch')

// re-render element: color-list
const colorList = document.getElementById('color-list')


// function for re-render color-list
fetchButton.addEventListener('click', (event) => {
    event.preventDefault()

    // get color from input color and delete hash character
    const inputColor = document.getElementById("input-color").value.slice(1)

    // get color from color-mode
    const colorMode = document.getElementById('color-mode').value

    // fetch from API with Query Strings
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor}&mode=${colorMode}&format=json&count=5`)
        .then(response => response.json())
        .then(data => {

            // create empty html
            let html = ""

            // loop through data.colors and re-render colorList element
            for (const color of data.colors) {
                html += `<div class="render-color">
                            <img src="${color.image.bare}">
                            <h5>${color.hex.value}</h5>
                        </div>`
            }
            colorList.innerHTML = html
        })
})
