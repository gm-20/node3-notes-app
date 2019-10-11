// const fs = require('fs');

// fs.appendFileSync('notes.txt','I appended Gaurav to already existing file');



//const name = "Gaurav"

// const add = require('./utils')

// const sum = add(95,5)

// console.log(sum);



// console.log(getNotes("Hello G"))


// const validator = require('validator')

//import validator from 'validator';

// console.log(validator.isEmail('grvm0520@gmail.com'))


const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')


//console.log(process.argv)

//Add
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Title to Delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

//List
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler(){
        notes.listNotes()
    }
})

//Read
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title:{
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})


yargs.parse()

//console.log(yargs.argv)

//To Debug
//node --inspect-brk app.js