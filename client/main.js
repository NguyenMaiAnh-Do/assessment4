const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector('#getFortune')

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
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)