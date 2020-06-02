
const note=require('./note');
const yargs=require('yargs')
const title=yargs.argv.title;
const body=yargs.argv.body;
const cmd=yargs.argv._[0];
if(cmd==="add"){
    note.add(title,body);
}else if (cmd==="remove"){
    note.remove(title);
}else if(cmd==="list"){
    note.list();
}else if(cmd==="fetsh"){
    note.fetsh(title);
}