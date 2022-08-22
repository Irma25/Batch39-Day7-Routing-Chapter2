const express = require ('express');


// 1. buat variabel yg menampung express
const app = express()
const port = 8000;

// membuat variabel untuk ekstensi hbs
app.set('view engine', 'hbs')

// untuk membaca filedi folder assets
app.use('/assets', express.static(__dirname + '/assets'))

// untuk membaca add-project post
app.use(express.urlencoded({extended:false}))

// 2. untuk memanggil server
app.listen (port, function(){
    console.log(`Server on Port ${port}`);
    // console.log(app);
})

// 3. untuk menampilkan index
app.get('/', function(request, response){
  response.render("index");
})

// 4. untuk menampilkan form
app.get('/form', function(request, response){
    response.render("form");
  })

  let isLogin = false

// 5. untuk menampilkan addproject
app.get('/add-project', function(request, response){
    response.render("add-project");
    
  })

app.post('/add-project', function(request, response){
    // let title = request.body
    console.log(request.body);

    let title       = request.body.projectName;
    let firstDate   = request.body.firstDate;
    let lastName    = request.body.lastName;
    let message     = request.body.yourMessage;
    let node        = request.body.nodeJs;
    let next        = request.body.nextJs;
    let react       = request.body.reactJs;
    let typeScript  = request.body.typeScript;
    let image       = request.body.inputImage;

    console.log(title);
    console.log(firstDate);
    console.log(lastName);
    console.log(message);
    console.log(node);
    console.log(next);
    console.log(react);
    console.log(typeScript);
    console.log(image);

    response.redirect("/");
    
  })

  // 5. untuk menampilkan project-detil
app.get('/project-detail/:name', function(request, response){ // id itu sebagai penampung/params
      
      let id = request.params.name
      console.log(id);  
    response.render("project-detail",{
      id,
      title : "Welcome on My Website",
      content : "lorem ipsum dolor si amet, amet dolor si emet",
      postAt : "22 Agustus 2022",
      duration : "5 month",

    });
  })


//   Notes 
// 1. untuk memanggil nodemon gunakan npm start(install dr sisi browser)
//    fungsi nodemon adalah untuk tahap development supaya langsung ke refresh kehalaman tanpa harus ctrl+c seperti node index.js (install hanya dr sisi server saja)biasa
// 2. untuk unistall npm tinggal npm unistall nodemon
   