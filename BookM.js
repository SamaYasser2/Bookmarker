
var NameInput=document.getElementById('NameInput')
var URLInput=document.getElementById('URLInput')

var bookDatalist=[]

if(localStorage.getItem('bookData')!=null){
    bookDatalist= JSON.parse(localStorage.getItem('bookData'))
    displayBookD()
    }

function main(){
    addDataInput()
    displayBookD()
    clearInput()
}

  function addDataInput(){ 
   var bookData={
        bookName:NameInput.value,
        bookUrl:URLInput.value
    }
     bookDatalist.push(bookData)
     localStorage.setItem('bookData',JSON.stringify(bookDatalist) ) 
}

function displayBookD(){
var container=''
     for(var i=0; i<bookDatalist.length;i++){
container+=`
<tr>
<td> ${i+1} </td>
<td> ${bookDatalist[i].bookName}</td>
<td> <a href="${bookDatalist[i].bookUrl}"  target="_blank"> <button class="btn btn-visit" > <i class="fa-solid fa-eye"></i> Visit</button></a></td>
<td><button class="btn btn-Del" onclick="deleteData(${i})"> <i class="fa-solid fa-trash-can"></i> Delete</button></td>
</tr>
`
 }
document.getElementById('tbody').innerHTML=container
}

function clearInput(){
NameInput.value=""
URLInput.value=""

}

function deleteData(index){
    bookDatalist.splice(index,1)
    localStorage.setItem('bookData' , JSON.stringify(bookDatalist))
    displayBookD()
  }


