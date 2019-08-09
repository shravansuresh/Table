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
    document.getElementById("AddForm").style.display="none";
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
function DeleteRow(){
    let deleteRno = prompt("Enter the Roll number in the row you want to delete: ", "Roll no. here");
    if(deleteRno != null)
    {
    const confirmDelete = confirm("Do you want delete ?");
    if(confirmDelete == true)
    {
        let storedData = localStorage.getItem("studarry");
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
        localStorage.setItem("studarry",stringJSON);
        location.reload();
    }
    }
}
function showForm(){
    document.getElementById("AddForm").style.display="block";
    window.scrollTo(0, document.body.scrollHeight);
}
function EditRow(){
    
    let EditRno = prompt("Enter the Roll number of the row you want to edit: ", "Roll no. here");
    if(EditRno != null)
    {
    const confirmEdit = confirm("Do you want Edit ?");
    if(confirmEdit == true)
    {
        let storedData = localStorage.getItem("studarry");
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
        localStorage.setItem("studarry",stringJSON);
    }
    }
    document.getElementById("AddForm").style.display="block";
    window.scrollTo(0, document.body.scrollHeight);
    
}