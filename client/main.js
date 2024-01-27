const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector('#getFortune')
const form = document.querySelector('form')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

const getChineseDay = () => {
    event.preventDefault(); // Prevent the default form submission

    console.log("start")
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    axios.get(`http://localhost:4000/api/chinesedate/?day=${day}&month=${month}&year=${year}`)
    .then(res => {
        console.log("res2")
        console.log(res)
        renderResult(res.data)
    }).catch(function(error) {
        // Handle errors here
        console.error('Error:', error);
    });
}

function renderResult(chineseDate) {
    // Get the result container element
    var resultContainer = document.getElementById("result");

    // Create a paragraph element to display the result
    var paragraph = document.createElement("p");
    paragraph.textContent = "Chinese Date: " + chineseDate;

    // Clear previous result
    resultContainer.innerHTML = "";

    // Append the paragraph element to the result container
    resultContainer.appendChild(paragraph);
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', getChineseDay)