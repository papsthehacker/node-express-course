const { json } = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


const mockData = [
    {name: 'Promise'},
    {name: 'Mark'}
]

app.get('/users', function(req, res){
    return json({
        success: true,
        message: 'Retrieved users successfully',
        users: mockData,
    })
})
app.listen(PORT, function(){
    console.log('Listening on port' , PORT)
})