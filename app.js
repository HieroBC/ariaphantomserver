var express = require ('express');
var app = express();

app.post('*', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Rodando.');
})