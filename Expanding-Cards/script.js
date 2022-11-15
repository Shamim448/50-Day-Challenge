const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActibeClasses()
        panel.classList.add('active')
    })
})


function removeActibeClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}