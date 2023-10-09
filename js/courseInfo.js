const btnSection = document.getElementById('btnSection');
document.getElementById('btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input');
    const valueString = userInput.value;
    const value = parseInt(valueString);
    // console.log(value);
    const courseInfo = document.getElementById('course-info');
    const inputValues = []; // Array to store input values
    courseInfo.innerHTML = '';
    for (let i = 1; i <= value; i++) {
        const div = document.createElement('div');
        div.classList.add('container', 'mb-2');
        div.innerHTML = `
            <label for="exampleFormControlInput1" class="form-label fw-bolder">Course-${i}</label>
            <input id="course-${i}" type="number" class="form-control" id="exampleFormControlInput1"
                 placeholder="Enter your gain CGPA">
        `;
        div.querySelector(`#course-${i}`).addEventListener('input', (event) => {
            const valueString = event.target.value * 4;
            inputValues[i - 1] = parseInt(valueString); // Store the value in the array
        });
        courseInfo.appendChild(div);
    }
    btnSection.classList.remove('d-none');
    // Add an event listener to the button to display the entered values
    document.getElementById('showValuesBtn').addEventListener('click', () => {
        //     const sum = inputValues.reduce((acc, ele) => {
        //         return acc += ele;
        //     })
        //     console.log(sum);
        //     // You can use the inputValues array as needed
        const result = inputValues.reduce((acc, ele) => {
            return acc += ele;
        });
        const resultCard = result / (4 * value);
        const resultMessage = document.getElementById('resultMessage');
        resultMessage.innerText = `Your CGPA is : ${resultCard.toFixed(2)} out of 4.00`;
        // console.log(inputValues);
    });
})
