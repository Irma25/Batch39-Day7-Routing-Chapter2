

let projects = []; // Variabel Global



function addProject () {
    // get data from
    let projectName = document.getElementById("add-project-name").value;
    let description = document.getElementById ("description").value; 
    let image       = document.getElementById ("input-project-image").files[0];
    let startDate   = document.getElementById ("start-date").value;
    let endDate     = document.getElementById ("end-date").value;
    let nodejs      = document.getElementById("nodejs").checked
    let java        = document.getElementById("java").checked
    let reactjs     = document.getElementById("react").checked
    let typescript  = document.getElementById("typescript").checked

    if(nodejs){
        nodejs = document.getElementById("nodejs").value
    } else {
        nodejs = " "
    }

    if(java){
        java = document.getElementById("java").value
    } else {
        java = " "
    }

    if(reactjs){
        reactjs = document.getElementById("react").value
    } else {
        reactjs = " "
    }

    if(typescript){
        typescript= document.getElementById("typescript").value
    } else {
        typescript = " "
    }
    console.log(nodejs);
    console.log(java);
    console.log(reactjs);
    console.log(typescript);

    console.log(startDate) 
    console.log(endDate)

  

    image = URL.createObjectURL(image)

    // console.log(projectName);
    // console.log(description);
    // console.log(image);

    // // Grouping By Object
    let project = {
        projectName : projectName,
        description : description,
        image       : image,
        Author      : 'Irma Damaiyanti',
        postAT      : new Date (),
        nodejs,
        java,
        reactjs,
        typescript,
        startDate,
        endDate,
        // currentTime : new Date (time)

    }

    console.log(project);

    // // store to array
    projects.push(project)

    // console.log(projects);
     renderProject()
     }



    


    function renderProject (){
        let projectWrapper = document.getElementById('project-list');

        projectWrapper.innerHTML = ''

        for ( let i = 0; i < projects.length; i++){

            projectWrapper.innerHTML += 

            ` <div class="project-list-item">
            <div class="card-list-item">
                <div class="item-list-1">
                    <img src="${projects[i].image}" alt="">
                </div>
                <div class="time-project-list">
                    <a href="project-detail.html" target="_blank"><h2>${projects[i].projectName}</h2></a>
                    <p>  </p><br>
                    <p>Author : ${projects[i].Author}</p>
                </div>
                <div class="notes-list-item-project">
                    <p>${projects[i].description}
                    </p>
                </div>
                <div class="media-sosial-list-item">
                    <div class="img-1">
                        <i class="fa-brands fa-${projects[i].nodejs}"></i>
                    </div>
                    <div class="img-2">
                        <i class="fa-brands fa-${projects[i].java}"></i>
                    </div>
                    <div class="img-3">
                        <i class="fa-brands fa-${projects[i].reactjs}"></i>
                    </div>
                    <div class="img-4">
                         <i class="fa-brands fa-${projects[i].typescript}"></i>
                    </div>
                   
                </div>
                <div class="time-project-list"> 
                  <p>Durasi : ${getDistanceTime(projects[i].startDate, projects[i].endDate)}</p><br> 
                </div>
                <div class="button-group">
                    <button class ="edit-btn" type="button">Edit</button>
                    <button class ="delete-btn" type="button">Delete</button>
                </div>
            </div> 
        </div>

            `
        }

    }

    
    function getFulltime (time){
        let month = ["January","February","Maret","April","Mei","Juni","juli","Agustus","September","Oktober","November","Desember"]

    //    let waktu = new Date ();

       let date = time.getDate();
       let monthIndex = time.getMonth();
       let years = time.getFullYear();
       let hours = time.getHours();
       let minutes = time.getMinutes();

       console.log(date);
       console.log(month[monthIndex]);
       console.log(years);
       console.log(hours);
       console.log(minutes);

       
       if ( hours < 10 ){
           hours = "0" + hours
       }else if ( minutes < 10 ){
            minutes = "0" + minutes
       }
          
       

      
    //    fulltime
    // 12 Agustus 2022 10.4 WIB
    let fullTime = `${date} ${month[monthIndex]} ${years} ${hours}:${minutes} WIB`
    console.log(fullTime);
    return fullTime;


    }

    function getDistanceTime (start, end){

        let startDate = new Date(start);        
        let endDate = new Date(end);
        // let timeNow = new Date()
        // let timePost = time

        // let distance = startDate- endDate
        let distance = endDate - startDate
        // console.log(distance);

        let milliSeconds = 1000 // 1 detik 1000 milliseconds
        let secondInHours = 3500 // 1 jam sama dengan  3600 detik
        let hoursInDay = 24 // 1 hari 24 jam
        let dayinWeeks = 7
        let weeksinMonth = 4
        
        let monthinYear = 12 

        let distanceDay = Math.floor(distance / (milliSeconds * secondInHours * hoursInDay))
        

        let distanceHours = Math.floor(distance / (milliSeconds * 60 * 60))
            

        let distanceMinutes = Math.floor(distance / (milliSeconds * 60))
       
        
        let distanceSecond = Math.floor(distance / milliSeconds)

        let distanceWeeks = Math.floor(distance / (milliSeconds * secondInHours * hoursInDay * dayinWeeks ))

        let distanceMonth = Math.floor(distance / (milliSeconds * secondInHours * hoursInDay * dayinWeeks * weeksinMonth))

        let distanceYear = Math.floor(distance / (milliSeconds * secondInHours * hoursInDay * dayinWeeks * weeksinMonth * monthinYear))
        

       if (distanceYear > 0){
             return `${distanceYear} Years Ago`
             if (distanceYear < 12){
                return `${distanceMonth} Months Ago`
             }
       }else if (distanceMonth > 0){
            return `${distanceMonth} Months Ago`
            if (distanceMonth < 4){
                return `${distanceWeeks} Weeks Ago`
            }
       }else if (distanceWeeks > 0 ){
            return `${distanceWeeks} Weeks Ago`
       }else if (distanceDay > 0){
             return `${distanceDay} Day Ago`
       }else if (distanceHours > 0){
             return `${distanceHours} Hours Ago`
       }else if (distanceMinutes > 0){
             return `${distanceMinutes} Minutes Ago`
       }else (distanceSecond > 0)
            return `${distanceSecond} Second Ago`
       }
       
    

   
    getDistanceTime()
    
   // set interval untuk menjalankan function berapa detik sekali
   //  setInterval (function(){
   //      renderProject ()
   //  }, 3000)