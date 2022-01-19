// console.log(process.platform);
//console.log(process.env.USER);

//Events

/*const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('events', ()=>{
    console.log('Evento Acontecendo');
})

eventEmitter.emit('events');*/

// FileSystem

/*Case 1
const {readFile, readFileSync} = require('fs');
const txt = readFileSync('./hello.txt', 'utf8');

console.log(txt);
console.log('Do this ASAP');*/
/*Case 2
const {readFile} = require('fs');

readFile('./hello.txt', 'utf8', (err,txt)=>{
    if(err) throw err;

    console.log(txt);
});
console.log('Do this ASAP');*/
/*Case 3
const {readFile} = require('fs').promises;

async function hello(){
    const file = await readFile('./hello.txt', 'utf8');
    console.log(file);
}
hello();*/

