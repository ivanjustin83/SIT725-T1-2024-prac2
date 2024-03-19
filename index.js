var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.get('/addTwoNumbers', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
  
    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({ error: 'Invalid numbers provided' });
    }
  
    const result = num1 + num2;
  
    const response = {
      success: true,
      result: result
    };
  
    res.json(response);
  });

app.listen(port,()=>{
    console.log("App listening to: "+port)
})