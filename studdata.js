/*Storing of data to local storage */
function savetolocal(){
    if(localStorage.getItem("studarry") === null){
    let rowdata = ( $( document.getElementById("localStorageData") ).serializeArray());
    let stringJSON = JSON.stringify(rowdata);
    localStorage.setItem("studarry",stringJSON);
    ShowOnTable();
    }
/*Adding data to table from local storage*/
    else{
    let storedData = localStorage.getItem("studarry");
    alert(storedData);
    let storedJSON = JSON.parse(storedData);
    let rowdatan = ( $( document.getElementById("localStorageData") ).serializeArray());
    storedJSON.push(rowdatan);
    alert(storedJSON);
    let stringJSON1 = JSON.stringify(storedJSON);
    localStorage.setItem("studarry",stringJSON1);
    ShowOnTable();
    }
}
function ShowOnTable(){
    let tbldata = document.getElementById("demo").innerHTML = localStorage.getItem("studarry");
}

