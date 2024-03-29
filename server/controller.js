const DateChinese = require('date-chinese')

const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", 
"A dubious friend may be an enemy in camouflage.",
"A faithful friend is a strong defense.",
"A feather in the hand is better than a bird in the air.",
"A fresh start will put you on your way."];

const compliments = ["Gee, you're a smart cookie!",
 "Cool shirt!", 
 "Your Javascript skills are stellar.",
"so admirable",
"so sweet"];

module.exports = {
    getCompliment: (req, res) => {

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        //choose random fortune
        let fortuneIdx = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[fortuneIdx]
        res.status(200).send(randomFortune)
    },

    getChineseDay: (req, res) => {
        const { day, month, year } = req.query

        let cal = new DateChinese.CalendarChinese()
        cal.fromGregorian(+year, +month,  +day)

        res.json({
            "day" : cal.day ,
            "month" : cal.month,
            "year" : cal.year
        })
    },

    getFortunebyID: (req, res) => {
        const id = req.params.id
        let fortune = fortunes[id]
        res.status(200).send(fortune)
    },

    getComplimentbyID: (req, res) => {
        const id = req.params.id
        let compliment = compliments[id]
        res.status(200).send(compliment)
    }
}