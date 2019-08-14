/*Storing of data to local storage */
function savetolocal(locationId){
    let Id = locationId;
    if(localStorage.getItem(locationId) === null){
    let data=[];
    let rowdata = ( $( document.getElementById("localStorageData") ).serializeArray());
    data.push(rowdata);
    let stringJSON = JSON.stringify(data);
    localStorage.setItem(locationId,stringJSON);
    }
/*Adding data to table from local storage*/
    else{
    let storedData = localStorage.getItem(locationId);
    let storedJSON = JSON.parse(storedData);
    let rowdatan = ( $( document.getElementById("localStorageData") ).serializeArray());
    storedJSON.push(rowdatan);
    let stringJSON1 = JSON.stringify(storedJSON);
    localStorage.setItem(locationId,stringJSON1);
    }
    ShowOnTable(Id);
}
function ShowOnTable(locationId){
    document.getElementById("AddForm").style.display="none";
    let storedData = localStorage.getItem(locationId);
    let storedJSON = JSON.parse(storedData);
    let i, name, phno, email, rno;

    for(i=0; i<storedJSON.length ; i++)
    {
    name = storedJSON[i][0].value;
    phno =  storedJSON[i][1].value;
    email =  storedJSON[i][2].value;
    rno =  storedJSON[i][3].value;
    let data= `<tr><td>${rno} </td><td>${name} </td><td>${email} </td><td>${phno}</td></tr>`;
    //let obj = document.getElementById("demo");
    //obj.appendChild(data);
    $(data).appendTo("#demo");
}
}
function DeleteRow(locationId){
    let deleteRno;
    if(locationId == 'studarry'){
        deleteRno = prompt("Enter the Roll number in the row you want to delete: ", "Roll no. here");
    }
    else{
        deleteRno = prompt("Enter the Employee Id in the row you want to delete: ", "Roll no. here");
    }
    if(deleteRno != null)
    {
    const confirmDelete = confirm("Do you want delete ?");
    if(confirmDelete == true)
    {
        let storedData = localStorage.getItem(locationId);
        let storedJSON = JSON.parse(storedData);
        let i,flag=0;
        for(i=0; i<storedJSON.length; i++){
            if(deleteRno == storedJSON[i][3].value)
            {
                flag=1;
                break;
            }
            else{
                flag=0;
            }
        }
        if(flag == 0)
        {
            alert("invalid Input");
        }
        storedJSON.splice(i,1);
        let stringJSON=JSON.stringify(storedJSON);
        localStorage.setItem(locationId,stringJSON);
        location.reload();
    }
    }
}
function showForm(){
    document.getElementById("AddForm").style.display="block";
    window.scrollTo(0, document.body.scrollHeight);
}

function hideForm(){
    document.getElementById("AddForm").style.display="none";
    location.reload();
}
function EditRow(locationId){
    let EditRno;
    if(locationId == "studarry"){
        EditRno = prompt("Enter the Roll number of the row you want to edit: ", "Roll no. here");
    }
    else{
        EditRno = prompt("Enter the Employee Id of the row you want to edit: ", "Roll no. here"); 
    }
    if(EditRno != null)
    {
    const confirmEdit = confirm("Do you want Edit ?");
    if(confirmEdit == true)
    {
        let storedData = localStorage.getItem(locationId);
        let storedJSON = JSON.parse(storedData);
        let i,flag=0;
        for(i=0; i<storedJSON.length; i++){
            if(EditRno == storedJSON[i][3].value)
            {
                flag=1;
                break;
            }
            else{
                flag=0;
            }
        }
        if(flag == 0)
        {
            alert("invalid Input");
        }
        document.getElementById("fname").placeholder = storedJSON[i][0].value;
        document.getElementById("phno").placeholder = storedJSON[i][1].value;
        document.getElementById("email").placeholder = storedJSON[i][2].value;
        document.getElementById("rno").placeholder = storedJSON[i][3].value;
        storedJSON.splice(i,1);
        let stringJSON=JSON.stringify(storedJSON);
        localStorage.setItem(locationId,stringJSON);
    }
    document.getElementById("AddForm").style.display="block";
    window.scrollTo(0, document.body.scrollHeight);
    }
    else{
        ShowOnTable();
    }
    
    
}

function SearchAny(locationId)
{
    
    let input, filter,name1;
    input = document.getElementById("SearchBar").value;
    filter = input.toUpperCase();
    let storedData = localStorage.getItem(locationId);
    let storedJSON = JSON.parse(storedData);
    let i, name, phno, email, rno;
    let data="";
    if(isNaN(filter))
    {
        for(i=0; i<storedJSON.length ; i++)
        {
            name = storedJSON[i][0].value;
            name1=name.toUpperCase();
            if(name1.search(filter)>-1){
                phno =  storedJSON[i][1].value;
                email =  storedJSON[i][2].value;
                rno =  storedJSON[i][3].value;
                data= `${data}<tr><td>${rno} </td><td>${name} </td><td>${email} </td><td>${phno}</td></tr>`;
            }
        }
    }
    else{
        for(i=0; i<storedJSON.length ; i++)
        {
            rno = storedJSON[i][3].value;
            rno1=rno.toUpperCase();
            if(rno1.search(filter)>-1){
                phno =  storedJSON[i][1].value;
                email =  storedJSON[i][2].value;
                name =  storedJSON[i][0].value;
                data= `${data}<tr><td>${rno} </td><td>${name} </td><td>${email} </td><td>${phno}</td></tr>`;
            }
        }
    }
    document.getElementById("demo").innerHTML=data;
    
}

function Sort(locationId,tableId,rowId){
    let storedData = localStorage.getItem(locationId);
    let storedJSON = JSON.parse(storedData);
    if(rowId == "fname"){
        let i;
        for( i=0; i< storedJSON.length; i++){
            let k;
        for(k=i+1;k<storedJSON.length;k++){
            if(storedJSON[i][0].value > storedJSON[k][0].value){
                let j;
                for( j=0; j<4; j++){
                let temp = storedJSON[i][j].value;
                storedJSON[i][j].value = storedJSON[k][j].value;
                storedJSON[k][j].value = temp;
                }
            }
        }
        }
    }
    if(rowId == "phno"){
        let i;
        for( i=0; i< storedJSON.length; i++){
            let k;
        for(k=i+1;k<storedJSON.length;k++){
            if(storedJSON[i][1].value > storedJSON[k][1].value){
                let j;
                for( j=0; j<4; j++){
                let temp = storedJSON[i][j].value;
                storedJSON[i][j].value = storedJSON[k][j].value;
                storedJSON[k][j].value = temp;
                }
            }
        }
        }
    }
    if(rowId == "email"){
        let i;
        for( i=0; i< storedJSON.length; i++){
            let k;
        for(k=i+1;k<storedJSON.length;k++){
            if(storedJSON[i][2].value > storedJSON[k][2].value){
                let j;
                for( j=0; j<4; j++){
                let temp = storedJSON[i][j].value;
                storedJSON[i][j].value = storedJSON[k][j].value;
                storedJSON[k][j].value = temp;
                }
            }
        }
        }
    }
    if(rowId == "rno"){
        let i;
        for(i=0; i< storedJSON.length; i++){
            let k;
        for(k=i+1; k<storedJSON.length; k++){
                if(Number(storedJSON[i][3].value) > Number(storedJSON[k][3].value)){
                    let j;
                    for( j=0; j<4; j++){
                    let temp = storedJSON[i][j].value;
                    storedJSON[i][j].value = storedJSON[k][j].value;
                    storedJSON[k][j].value = temp;
                }
            }
            }
        }
    }   
    location.reload();
    let stringJSON=JSON.stringify(storedJSON);
    localStorage.setItem(locationId,stringJSON);
}