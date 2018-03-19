let express = require('express');
let app = express();
const PORT = 5000;
let bodyParser = require('body-parser');
let history = [];
let returnNum = 0;

app.use(bodyParser.urlencoded({extended:true}));



app.use(express.static('server/public'));

app.get('/retrieve', (req, res) => {
    res.send(history);
})

app.post('/calculate', (req, res) => {
    console.log(req.body);
    let collector = req.body;
    collector.symbol = '';
    collector.result = 0;
    history.push(collector);
    for (number of history){
        
        if (number.operator == 'add'){
            addNum(number.num1, number.num2);
            number.symbol = '+';
            number.result = returnNum;
            
        }
        else if (number.operator == 'subtract'){
            subNum(number.num1, number.num2);
            number.symbol = '-';
            number.result = returnNum;
        }
        else if (number.operator == 'multiply'){
            multNum(number.num1, number.num2);
            number.symbol = '*';
            number.result = returnNum;
        }
        else {
            divNum(number.num1, number.num2);
            number.symbol = '/';
            number.result = returnNum;
        }
    }
    res.sendStatus(200);
})

app.post('/delete', (req, res) => {
    history = [];
    res.sendStatus(200);
})

function addNum(a,b){
    returnNum = parseInt(a) + parseInt(b);
    return returnNum;
}

function subNum(a,b){
    returnNum = parseInt(a) - parseInt(b);
    return returnNum;
}

function multNum(a,b){
    returnNum = parseInt(a) * parseInt(b);
    return returnNum;
}

function divNum(a,b){
    returnNum = parseInt(a) / parseInt(b);
    return returnNum;
}


app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
    
})