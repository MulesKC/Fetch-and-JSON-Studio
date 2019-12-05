window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {
            newObject = json
            mainDiv = document.getElementById("container")
            let curEntry = newObject[0]
            for (let j = 1; j < newObject.length; j++)
            for (let i = 1; i < newObject.length; i++) {
                if (curEntry["hoursInSpace"] < newObject[i]["hoursInSpace"]) {

                } else {
                    curEntry = newObject[i]
                }
                
            }

            for (let i=0; i < json.length; i++) {
                mainDiv.innerHTML += 
                    `<div class = "astronaut">
                        <div class = "bio">
                            <h3>${json[i]["firstName"]} ${json[i]["lastName"]}</h3>
                            <ul>
                                <li>Hours in space: ${json[i]["hoursInSpace"]}</li>
                                <li>Active: ${json[i]["active"]}</li>
                                <li>Skills: ${json[i]["skills"]}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i]["picture"]}">
                    </div>`
            }



        })
    })
})