/*Storing of data to local storage */
ShowOnTable();
function savetolocal(){
    if(localStorage.getItem("studarry") === null){
    let data=[];
    let rowdata = ( $( document.getElementById("localStorageData") ).serializeArray());
    data.push(rowdata);
    let stringJSON = JSON.stringify(data);
    localStorage.setItem("studarry",stringJSON);
    ShowOnTable();
    }
/*Adding data to table from local storage*/
    else{
    let storedData = localStorage.getItem("studarry");
    let storedJSON = JSON.parse(storedData);
    let rowdatan = ( $( document.getElementById("localStorageData") ).serializeArray());
    storedJSON.push(rowdatan);
    let stringJSON1 = JSON.stringify(storedJSON);
    localStorage.setItem("studarry",stringJSON1);
    ShowOnTable();
    }
}
function ShowOnTable(){
    let storedData = localStorage.getItem("studarry");
    let storedJSON = JSON.parse(storedData);
    let i, name, dob, email, rno;

    for(i=0; i<storedJSON.length ; i++)
    {
    name = storedJSON[i][0].value;
    dob =  storedJSON[i][1].value;
    email =  storedJSON[i][2].value;
    rno =  storedJSON[i][3].value;
    let data= `<tr><td>${name} </td><td>${dob} </td><td>${email} </td><td>${rno} </td></tr>`;
    //let obj = document.getElementById("demo");
    //obj.appendChild(data);
    $(data).appendTo("#demo");
}
}
