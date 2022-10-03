
const fullscreen = document.getElementById('fullscreen-div')
const addAddressBtn = document.getElementById('add-btn')
const form = document.getElementById('modal')
const formInput = document.querySelectorAll('input')

const closeAddressBtn = document.getElementById('close-btn')

// const saveAddressBtn = document.getElementById('save-btn').disabled = true;

const saveAddressBtn = document.getElementById('save-btn')

const addressDetails = document.getElementById('tbody')

const labels = document.querySelectorAll('select')



// form display
addAddressBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fullscreen.style.display = 'block';
    form.style.display = 'block'
})


// form close
closeAddressBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fullscreen.style.display = 'none';
    form.style.display = 'none'
})



// save address and disply 
saveAddressBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    //alert()

    // address form inputs
    // const input1 = formInput[0].value,
    // input2 = formInput[1].value,
    // input3 = formInput[2].value,
    // input4 = formInput[4].value,
    // input5 = formInput[5].value
    //input6 = formInput[6].value


    const input1 = formInput[0].value,
    input2 = formInput[1].value, // name
    input3 = formInput[2].value, // last name
    input4 = formInput[3].value, // number
    input5 = formInput[4].value, // street
    input6 = formInput[5].value // postal

    colleagues = labels[1].value

    if(formInput[0].value === " "){
        alert()
    }else{
        console.log("hi");
    }


    localStorage.setItem('input1', input1)
    console.log(localStorage);

    const save = localStorage.getItem(input1)

    // switch (input1 === " ") {
    //     case input1.style.border :
            
    //         break;
    
    //     default:
    //         break;
    // }



    let addressCont = " ";
     addressCont += `
        <tr>
        <td>1</td>
        <td>
            <span class = "addressing-name"> ${save}'s Family</span><br><span class = "address">${input5} - ${input6}</span>
        </td>
        <td><span>${colleagues}</span></td>
        <td>${input2} ${input3}</td>
        <td>${input4}</td>
        </tr>
        `

        addressDetails.innerHTML += addressCont


});






// fetch('/countries.json')
//     .then(response => response.json())
//     .then(json =>{
//         console.log(json);
//     })




//connect php to msql?