const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get(`/greetings/:username`, (req, res) => {
    const username=req.params.username
    console.log(username)
    res.send(`Welcome to my page, ${username}`)
})

//parseInt makes the indexs into numbers
app.get(`/roll/:number`, (req,res) => {
    const number = parseInt(req.params.number)
    if (isNaN(number)) {
        res.send(`Invalid`)
    }
    //.floor is a way to bring out the largest integer that is less than the given number.
    // basically rounds down a number to its nearest integer
        else {
            const randomNumber = Math.floor(Math.random()*(number + 1))
            res.send(`You rolled a ${randomNumber}`)
        }
    })
    let collectibles = [
        {id:1, name: 'shiny ball', price: 5.95 },
        {id:2, name: 'autographed picture of a dog', price: 10 },
        {id:3, name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
    
      app.get('/collectibles/:index', (req, res) => {
        const index = parseInt(req.params.index);
    
        if (isNaN(index) || index < 0 || index >= collectibles.length) {
            res.send(`Invaild index`)
        } else {
            res.send(collectibles[index])
        }
    })
    
     const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ]

    app.get('/shoes', (req, res) => {
        let filteredShoes = shoes
    
        // Get query parameters from the request
        const { 'min-price': minPrice, 'max-price': maxPrice, type } = req.query
    
        // Apply filters to parameters
        if (minPrice) {
            filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(minPrice))
        }
        if (maxPrice) {
            filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice))
        }
        if (type) {
            filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase())
        }
    
        
        res.send(filteredShoes)
    })


    app.get(`/find`, (req, res) => {
        res.send('Thank You')
    });
    