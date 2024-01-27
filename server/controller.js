module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["A beautiful, smart, and loving person will be coming into your life.", 
        "A dubious friend may be an enemy in camouflage.",
        "A faithful friend is a strong defense.",
        "A feather in the hand is better than a bird in the air.",
        "A fresh start will put you on your way."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [["A beautiful, smart, and loving person will be coming into your life.", 
        "A dubious friend may be an enemy in camouflage.",
        "A faithful friend is a strong defense.",
        "A feather in the hand is better than a bird in the air.",
        "A fresh start will put you on your way."]];

        //choose random fortune
        let fortuneIdx = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[fortuneIdx]
        res.status(200).send(randomFortune)
    },

    getChineseDay: (req, res) => {
        const { day, month, year } = req.query
        console.log(day)
        console.log(month)
        console.log(year)
        res.json({
            "day" : day,
            "month" : month,
            "year" : year
        })
    }

}