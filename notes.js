const fs = require('fs')
const chalk = require('chalk')



const addNote = (title,body)=>{
    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })

    const duplicateNotes = notes.filter((note) => note.title === title)

    debugger

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("Note added"))
    }else{
        console.log(chalk.red.inverse("Title already taken"))
    }


}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    }catch(e){
        return []
    }

}

const removeNote = function(title){
    const notes = loadNotes()

    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })

    if(notes.length === notesToKeep.length){
        console.log(chalk.red("No Note Found"))    
    }else{
        saveNotes(notesToKeep)
        console.log(chalk.green("Note Removed"))
    }

    
    

}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.bold.blue("Your Notes"))
    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNote = (title)=>{
    const notes = loadNotes()

    const note = notes.find((note)=> note.title === title)

    if(note){
        console.log(chalk.green.bold(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.bold.inverse("No notes FOUND!!!!!!!!!!!!!!"))
    }

}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}