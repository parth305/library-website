console.log("this is project two");


function book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}

let libraryform=document.getElementById("libraryform");

libraryform.addEventListener('submit',formsubmit);

function Display(){
    
}

Display.prototype.add=function(b){
    let keys=localStorage.getItem("key");
    let obj;
    if (keys!=null){
        obj=JSON.parse(keys);
    }
    else{
        obj=[];
    }
    obj.push(b);
    localStorage.setItem("key",JSON.stringify(obj));
}

Display.prototype.validate=function(b){
    console.log("validateing");
    if(b.name.length<2 || b.author.length<2 ){
        return false
    }
    return true
    
}



Display.prototype.show=function(){
    let keys=localStorage.getItem("key");
    let obj;
    let st="";
    if(keys!=null){
        obj=JSON.parse(keys);
        obj.forEach(function(element,index) {
            st+=`
            <tr>
            <th scope="row">${index+1}</th>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
            <td><button type="button" class="btn btn-primary" id=${index} onclick="mydelete(this.id)">Delete</button></td>
            </tr>
            `
        });
        document.getElementById("tablebody").innerHTML=st;
    }
    else{
        document.getElementById("tablebody").innerHTML="";
        
    }
    
}

let d=new Display();
d.show();

function mydelete(index){

    // console.log("deleting");
    let keys=localStorage.getItem("key");

    let obj=JSON.parse(keys);

    obj.splice(index,1);
    localStorage.setItem("key",JSON.stringify(obj));
    d.show();

}
Display.prototype.msg=function(m){
    let msgdiv=document.getElementById("msg");
    if (m){
        msgdiv.innerHTML=`
                            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </symbol>
                            <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                            </symbol>
                            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </symbol>
                            </svg>

        
                            <div class="alert alert-success d-flex align-items-center" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                            <div>
                            Book Added Successfully
                            </div>
                        </div>`
    }
    else{
        msgdiv.innerHTML=`  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </symbol>
                            <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                            </symbol>
                            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </symbol>
                        </svg>
      
        
                        <div class="alert alert-danger d-flex align-items-center" role="alert">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                        <div>
                        Please Enter more then three character 
                        </div>`
    }

    setTimeout(() => {
        msgdiv.innerHTML='';
    }, 3000);
}
function formsubmit(e){
    console.log("hello");
    let name=document.getElementById("Name").value;
    let author=document.getElementById("Author").value;

    let fiction=document.getElementById("fiction");
    let programming=document.getElementById("programing");
    let cooking=document.getElementById("cooking");

    let type;

    if (fiction.checked){
        type="fiction";
    }

    else if(programming.checked){
        type="programming";
    }
    else if (cooking.checked){
        type="cooking";
    }
    let b=new book(name,author,type);
    console.log(b);

    let display=new Display();
    if (display.validate(b)){
        console.log("adding");
        display.add(b);
        display.show();
        display.msg(true)
    }
    else{
        //alert
        console.log("length less then 2");
        display.msg(false);
    }

    libraryform.reset();

    e.preventDefault();

}