let unorder=document.getElementById('unorder');
let addbtn=document.getElementById('addbtn');
let todos=[
    {
        text:'Learn html',
        uniqueid:1
    },
    {
        text:'Learn css',
        uniqueid:2
    },
    {
        text:'Learn javascript',
        uniqueid:3
    }
];
function statusoflabel(checkboxid,labelid){
    let check=document.getElementById(checkboxid);
    let labeled=document.getElementById(labelid);
    if(check.checked===true){
        labeled.classList.add('checked');
    }
    else{
        labeled.classList.remove('checked');
    }
}
function deletelist(listid){
    let list=document.getElementById(listid);
    unorder.removeChild(list);
}
function displaylist(todo){
    let checkboxid="checkbox"+todo.uniqueid;
    let labelid="label"+todo.uniqueid;
    let listid="list"+todo.uniqueid;
    let delid="del"+todo.uniqueid;

    let list=document.createElement('li');
    list.classList.add('list','d-flex');
    list.id=listid;
    unorder.appendChild(list);

    let checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.setAttribute('id',checkboxid);
    checkbox.classList.add('checkbox');
    list.appendChild(checkbox);

    let labelcont=document.createElement('div');
    labelcont.classList.add('labelcont','d-flex');
    list.appendChild(labelcont);

    let label=document.createElement('label');
    label.setAttribute('for',checkboxid);
    label.id=labelid;
    label.textContent=todo.text;
    label.classList.add('label');
    labelcont.appendChild(label);
    checkbox.onclick = function(){
        statusoflabel(checkboxid,labelid);
    }
    let iconcont=document.createElement('div');
    iconcont.classList.add('iconcont');
    labelcont.appendChild(iconcont);

    let icon=document.createElement('i');
    icon.classList.add('icon',"fa-solid","fa-trash");
    icon.id=delid;
    iconcont.appendChild(icon);

    icon.onclick = function(){
        deletelist(listid);
    }
}
for (let todo of todos){
    displaylist(todo);
}
let count=todos.length;
addbtn.onclick=function(){
    let userInput=document.getElementById('userInput');
    let uservalue=userInput.value;
    if(uservalue===""){
        alert("enter any task.....");
        return;
}
    count=count+1;
    let newtodo={
        text:uservalue,
        uniqueid:count
    }
    displaylist(newtodo);
    userInput.value="";
}