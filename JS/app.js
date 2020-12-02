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

const typingArea = document.querySelector('textarea')

console.log(notesArray)

drkModeBtn.addEventListener('click', toggleDrkMode)

function toggleDrkMode() {
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

