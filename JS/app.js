const notesArray = [
    { title: "note one", body: "some text 1"},
    { title: "note two", body: "some text 2"},
]

const drkModeBtn = document.querySelector('.drkbtn')

const noteBtn = document.querySelector('.notebtn')

const saveBtn = document.querySelector('.savebtn')

const cancelBtn = document.querySelector('.cancelbtn')

const noteArea = document.querySelector('.sidebar')

const body = document.querySelector('body')

const content = document.querySelector('.content')

console.log(content.childElementCount)

drkModeBtn.addEventListener('click', toggleDrkMode)

noteBtn.addEventListener('click', createNoteArea)

function toggleDrkMode() {
    const typingArea = document.querySelector('textarea')
    const cancelBtn = document.querySelector('.cancelbtn')
    const saveBtn = document.querySelector('.savebtn')
    drkModeBtn.classList.toggle('dark-mode')
    noteArea.classList.toggle('dark-mode-side')
    body.classList.toggle('dark-mode-body')
    content.classList.toggle('dark-mode-content')
    typingArea.classList.toggle('dark-mode-textarea')
    noteBtn.classList.toggle('dark-mode-buttons')
    saveBtn.classList.toggle('dark-mode-buttons')
    cancelBtn.classList.toggle('dark-mode-buttons')

    if (drkModeBtn.classList.contains('dark-mode')) {
        drkModeBtn.innerHTML = 'Light Theme'
    } else {
        drkModeBtn.innerHTML = 'Dark Theme'
    }
}

function createNoteArea(){
    console.log(content.childElementCount)
    if (content.childElementCount == 1){
        const notePart = `
        <textarea placeholder="This is a placeholder"></textarea>
        <div class="settwo">
            <button class="savebtn">Save</button>
            <button class="cancelbtn" onclick="hideNoteArea()">Cancel</button>
         </div>
        `
        content.insertAdjacentHTML('beforeend', notePart)
    } else {
        let textArea = document.querySelector('textarea')
        textArea.value = '';
    }
}

function hideNoteArea(){
    const textArea = document.querySelector('textarea')
    const btnSet = document.querySelector('.settwo')
    const cancelBtn = document.querySelector('.cancelbtn')
    const saveBtn = document.querySelector('.savebtn')
    textArea.remove()
    btnSet.remove()
    cancelBtn.remove()
    saveBtn.remove()
}
