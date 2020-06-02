const fs=require('fs')
const Readfile=()=>{
    try{
    return JSON.parse(fs.readFileSync("notes.txt"))
    }catch{return[]}
}
const add=(title,body)=>{
    try{ 
        let tab=Readfile()
        
    let note={
        title:title,
        body:body

    } 
    tab.push(note);
    fs.writeFileSync('notes.txt',JSON.stringify(tab))
} catch(err){console.log(err)}
  
}
const remove=(title)=>{
    try{let tab=Readfile();
    fs.writeFileSync("notes.txt",JSON.stringify(tab.filter(e=>e.title!==title)));
} catch(err){console.log(err)}
}
const list=()=>{
    try{console.log(JSON.parse(fs.readFileSync("notes.txt")))
}catch(err){console.log(err)}
}
const fetsh=(title)=>{
    try{let tab=JSON.parse(fs.readFileSync("notes.txt"));
    console.log(JSON.stringify(tab.filter(e=>e.title===title)));
} catch(err){console.log(err)} 


}
module.exports={
     add:add,
     remove:remove,
     list:list,
     fetsh:fetsh 
}