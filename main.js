const trackContainers = document.getElementsByClassName("h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4") // Containers for each track

// const trackContainerRightButtons = document.getElementsByClassName("HcMOFLaukKJdK5LfdHh0") 
/* Groups containing buttons to the right, starting with heart save button, ending with ...
 * Put new # button before heart
 */

// const firstTCRB = trackContainerRightButtons[2]
/* 0 index puts button to left of clock
 * 1 index assert fails, group is between line and first track
 * 2 index is first track
 */

// const tagButton = document.createElement("button")
// tagButton.appendChild(document.createTextNode("#"))
// const saveButton = firstTCRB.firstChild // Heart button, first child of right buttons group
// console.log("----SAVE BUTTON----")
// console.log(saveButton)
// console.log("----PARENT DIV firstTRCB----")
// console.log(firstTCRB)

// console.assert(firstTCRB.className == "HcMOFLaukKJdK5LfdHh0")
// console.assert(saveButton.className == "Fm7C3gdh5Lsc9qSXrQwO tGKwoPuvNBNK3TzCS5OH")

// firstTCRB.insertBefore(tagButton, saveButton)

// Fixed with querySelectorAll
const trackContainerRightButtons = document.querySelectorAll(".HcMOFLaukKJdK5LfdHh0:not(.Iy7vi9cVsy6pS6wF8Dud):not(.Dj9_CzXA7IbUFIz4wOsA):not([role='columnheader'])") 

trackContainerRightButtons.forEach((container, i) => {
    const tagButton = document.createElement("button")
    tagButton.appendChild(document.createTextNode("#"))
    const saveButton = container.firstChild
    console.log("----SAVE BUTTON----")
    console.log(saveButton)
    console.log("----PARENT DIV firstTRCB----")
    console.log(container)

    console.assert(container.className == "HcMOFLaukKJdK5LfdHh0")
    console.assert(saveButton.className == "Fm7C3gdh5Lsc9qSXrQwO tGKwoPuvNBNK3TzCS5OH")
    container.insertBefore(tagButton, saveButton)
})