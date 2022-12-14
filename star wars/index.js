let overAllDiv = document.getElementById("overAllDiv");

let mainDiv = document.getElementById("mainDiv");
mainDiv.setAttribute("id", "mainDiv");

let namesDiv = document.createElement('div');

namesDiv.setAttribute('id', 'namesDiv');

let sample = document.getElementById("sample");


let results404 = document.createElement("div");


var timerId;

function throttleFunction() {

    if (timerId) {

        return false;

    }

    timerId = setTimeout(() => {

        main();

        timerId = undefined;

    }, 1000);

    // console.log('timerId:', timerId)

}

async function main() {

    let names = await searchNames();

    let { results } = names;

    appendNames(results);

}

async function searchNames() {

    let q = document.getElementById("nameSearch").value;

    if (q.length <= 0) {

        return false;

    }

    let res = await fetch(`https://swapi.dev/api/people/?search=${q}`)
    
    let data = await res.json();
    console.log('data:', data)

    return data;

}

function appendNames(finalData) {

    console.log('finalData:', finalData);

    if (finalData.length != 0) {

        results404.innerHTML = "";

        sample.innerHTML = "";

        namesDiv.innerHTML = null;

        let hr = document.createElement("hr");
        hr.setAttribute("id", "hr")

        finalData.forEach(({ name, birth_year, gender, height, eye_color, mass, hair_color }) => {
            // console.log("name:", name)
            // console.log(finalData);

            let personDiv = document.createElement("div");
            personDiv.setAttribute("class", "personSearch");
            personDiv.addEventListener("click", function () {
                personDetails(name, birth_year, gender, height, eye_color, mass, hair_color);
            });
            personDiv.innerHTML = `<div><div class="personName">${name}</div><div class="personBirthYear">${birth_year}</div></div><div class="personGender">${gender}</div>`;

            
            namesDiv.append(personDiv);

        })

        sample.append(hr, namesDiv)

        mainDiv.append(sample);
    }else{

        
        sample.innerHTML = "";

        results404.innerHTML = "No results found. Try again...";
        results404.style.color = "white";
        results404.setAttribute("id", "notFound")
        
        overAllDiv.appendChild(results404);
    }
}

function personDetails(name, birth_year, gender, height, eye_color, mass, hair_color) {
    console.log('name:', name)
    console.log('hair_color:', hair_color)
    console.log('mass:', mass)
    console.log('eye_color:', eye_color)
    console.log('height:', height)
    console.log('gender:', gender)
    console.log('birth_year:', birth_year)
    
    overAllDiv.innerHTML = null;
    overAllDiv.setAttribute("id", "personDetails")

    let personDetails = document.createElement('div');

    let nameDiv = document.createElement('div');
    nameDiv.setAttribute("id","personDetailsName")
    nameDiv.innerHTML = `<div>${name}</div>`;
    
    let middleBlock = document.createElement("div");
    middleBlock.setAttribute("id", "middleBlock");
        
    let block1 = document.createElement('div');

    let personalInfo = document.createElement('div');
    personalInfo.innerHTML = "Personal Info";
    personalInfo.style.fontWeight = "600";

    let birthYearDiv = document.createElement('div');
    birthYearDiv.innerHTML = `Birth Year: ${birth_year}`;

    let genderDiv = document.createElement('div');;
    genderDiv.innerHTML = `Gender: ${gender}`;

    let heightDiv = document.createElement("div");
    heightDiv.innerHTML = `Height: ${height}`;

    block1.append(personalInfo, birthYearDiv, genderDiv, heightDiv);

    let block2 = document.createElement('div');
    
    let anatomy = document.createElement('div');
    anatomy.innerHTML = "Anatomy";
    anatomy.style.fontWeight = "600";

    let eyeColorDiv = document.createElement('div');
    eyeColorDiv.innerHTML = `Eye Color: ${eye_color}`;

    let massDiv = document.createElement('div');;
    massDiv.innerHTML = `Mass: ${mass}`;

    let hairColorDiv = document.createElement("div");
    hairColorDiv.innerHTML = `Hair Color: ${hair_color}`;

    block2.append(anatomy, eyeColorDiv, massDiv, hairColorDiv);

    middleBlock.append(block1, block2)

    personDetails.append(middleBlock);

    let btn = document.createElement('button');
    btn.setAttribute("id", "goBack");
    btn.addEventListener("click", function () {
        window.location.href = "index.html";
    });
    btn.innerHTML = "Go Back";

    overAllDiv.append(nameDiv, personDetails, btn);
}
