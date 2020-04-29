'use strict';
import data from "./data.js";
const $portoflio = document.getElementById('portoflio');
const $button = document.getElementById("mybutton");
const $menu = document.getElementsByClassName("menuLink");

OnInit();
function OnInit() {
    loadData(data, "all");
    for (let i = 0; i < $menu.length; i++) {
        $menu[i].addEventListener('click', changeMenu);
    }
    $button.onclick = () => {
        window.scroll(0, 500)
    }

};

function changeMenu(e) {
    let idAux = this.id;
    for (let i = 0; i < $menu.length; i++) {
        $menu[i].classList.remove('active');
    }

    if (this.id.endsWith('-1')) {
        idAux = this.id.substr(0, this.id.length - 2);
        console.log(document.getElementById(this.id))
        document.getElementById(idAux).classList.add('active');
        document.getElementById(this.id).className += ' active';
    } else {
        document.getElementById(idAux).classList.add('active');
        document.getElementById(idAux + '-1').className += ' active';
    }
    loadData(data, idAux);
}

function loadData(data, criterio) {
    let html = '';
    if (criterio === 'all') {
        data.forEach(product => {
            html += '<article class="container-portfolio">' +
                '<img class="image" src="' + product.image + '" />' +
                '<div class="overlay">' +
                '<div class="text">' +
                '<h4>' + product.Title + '</h4>' +
                '<p>' + product.Type + '</p>' +
                '</div>' +
                '</div>' +
                '</article>';
        });
    } else {
        data.forEach(product => {
            if (product.Type == criterio) {
                html += '<article class="container-portfolio">' +
                    '<img class="image" src="' + product.image + '" />' +
                    '<div class="overlay">' +
                    '<div class="text">' +
                    '<h4>' + product.Title + '</h4>' +
                    '<p>' + product.Type + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</article>';
            }
        });
    }

    $portoflio.innerHTML = html;
}





