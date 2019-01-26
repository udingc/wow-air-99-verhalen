/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// var buttonDownload = document.querySelectorAll("article footer button:nth-child(3)");
//
// for (var i = 0; i < buttonDownload.length; i++) {
//     buttonDownload[i].addEventListener("click", function () {
//         var melding = document.querySelector("header nav section")
//         melding.classList.toggle("aan");
//     })
// }

var
    filteren = document.querySelector("form label.filteren")
filteren.addEventListener("click", function () {
    if (window.innerWidth < 976) {
        this.classList.toggle("active");
    }
})

// Filter desktop

window.addEventListener('resize', function () {
    if (window.innerWidth > 976) {
        filteren.classList.add('active')
    }
})
// automatisch openklappen
if (window.innerWidth > 976) {
    filteren.classList.add('active')
}

// DL buttons + notifi
const
    dlButtons = document.querySelectorAll('.dlButton')

var
    nNoti = 0

for (let i = 0; i < dlButtons.length; i++) {
    const el = dlButtons[i]

    el.addEventListener('click', dlStory)

}

function dlStory() {
    const
        notification = document.querySelector('.notification')

    notification.classList.add('aan')

    if (this.querySelector('i').classList.contains('fa-download')) {
        this.querySelector('i').classList.remove('fa-download')
        this.querySelector('i').classList.add('fa-check')

        nNoti += 1
        notification.textContent = nNoti
    }
}

// popup
const
    popup = document.getElementById('popup'),
    enablePopup = document.querySelectorAll('.togglePopup');



for (let i = 0; i < enablePopup.length; i++) {
    const el = enablePopup[i];

    el.addEventListener('click', getPopup)

}

function getPopup() {
    popup.classList.toggle('hidden')
}

// Geholpen door Maikel Sleebos
