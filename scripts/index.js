"use strict"

window.onload = () => {

    loadPeopleIntoTable();

}

function loadPeopleIntoTable(){

    let peopleTableBody = document.querySelector("#peopleTableBody")

    people.forEach((people) => {

        buildTableRow(peopleTableBody, people );

    })

}

function buildTableRow(tbody, data){

    let newRow = tbody.insertRow(-1);

    let td1 = newRow.insertCell(0);
    td1.innerText = data.id;

    let td2 = newRow.insertCell(1);
    td2.innerText =data.firstName;

    let td3 = newRow.insertCell(2);
    td3.innerText =data.lastName;

    let td4 = newRow.insertCell(3);
    td4.innerText =data.email;

    let td5 = newRow.insertCell(4);
    td5.innerText =data.ipAddress;

}