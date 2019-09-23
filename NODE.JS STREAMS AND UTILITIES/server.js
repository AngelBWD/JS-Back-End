const http = require('http');
const fs = require('fs');
const port = 8080;


const app = http.createServer(function (req, res) {
    const stream = fs.createReadStream('./test.txt', {
        encoding: 'utf-8'
    }); //Read stream !

    stream.pipe(res);  
    // fs.readFile('./text.txt', function (err, content) {  //Тека не е много добър вариант,защото ако е голям файла 
                                                            //ще ни свърши паметта. Затова използшаме stream-ове                    
    //     res.write(content); 
    // })

});

app.listen(port, function () {
    console.log(`Server is listening  on ${port}`)
});