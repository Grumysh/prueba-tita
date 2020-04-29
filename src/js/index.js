'use strict';
import data from "./data.js";

const $all = document.getElementById('all');
const $branding = document.getElementById('branding');
const $web = document.getElementById('web');
const $photography = document.getElementById('photography');
const $app = document.getElementById('app');
const $portoflio = document.getElementById('portoflio');
const $button = document.getElementById("mybutton");
const $menu = document.getElementsByClassName("menuLink");



OnInit();

function OnInit() {
    loadData(data, "all");

    $all.addEventListener("click", () => {
        loadData(data, "all");
        for(let i=0; i<$menu.length ;i++){
            $menu[i].classList.remove('active');
        }        
        $all.classList.add('active');
    });

    $branding.addEventListener("click", function () {
        loadData(data, "branding");
        for(let i=0; i<$menu.length ;i++){
            $menu[i].classList.remove('active');
        }        
        $branding.classList.add('active');
    });

    $web.addEventListener("click", function () {
        loadData(data, "web");
        for(let i=0; i<$menu.length ;i++){
            $menu[i].classList.remove('active');
        }        
        $web.classList.add('active');
    });

    $photography.addEventListener("click", function () {
        loadData(data, "photography");
        for(let i=0; i<$menu.length ;i++){
            $menu[i].classList.remove('active');
        }        
        $photography.classList.add('active');
    });

    $app.addEventListener("click", function () {
        loadData(data, "app");
        for(let i=0; i<$menu.length ;i++){
            $menu[i].classList.remove('active');
        }        
        $app.classList.add('active');
    });

    $button.onclick = function () {
        window.scroll(0, 500)
    }

};


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





