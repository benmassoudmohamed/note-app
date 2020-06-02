const note=require('./note');
console.log(process.argv)

const title=process.argv[3];
const body=process.argv[4];
const cmd=process.argv[2];
if(cmd==="add"){
    note.add(title,body);
}else if (cmd==="remove"){
    note.remove(title);
}else if(cmd==="list"){
    note.list();
}else if(cmd==="fetsh"){
    note.fetsh(title);
}
