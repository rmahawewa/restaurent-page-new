import "./styles.css";
import {home} from "./content.js";
import { create_menu } from "./content.js";
import {desc} from "./content.js";

let option = document.querySelectorAll(".nav-btn");
document.querySelector("#content").innerHTML = home;

let add_content = (id) => {
    let content = document.querySelector("#content");

    if(id.localeCompare("home-btn") === 0){
        content.innerHTML = home;
    }
    if(id.localeCompare("menu-btn") === 0){
        console.log("menu button clicked");
        content.innerHTML = create_menu;

        let details_btn = document.querySelectorAll(".details");

        details_btn.forEach((btn) => btn.addEventListener("click", function(){
            console.log("details button clicked: " + btn.className);
            let values = (btn.className).split("|");
            let name = values[1];
            let description = values[2];
        
            view_details(name, description);
            let modal_btn = document.querySelector(".ok-btn");
            let close_btn = document.querySelector("#close");
            modal_btn.addEventListener("click", function(){
                view_prev_content();
            });
            close_btn.addEventListener("click", function(){
                view_prev_content();
            });
        }));        
        
        
    }
    if(id.localeCompare("about-btn") === 0){
        content.innerHTML = desc;
    }
};

option.forEach((item) => item.addEventListener("click", function(){
    add_content(item.id);
}));

function view_details(name, description){
    let mdl = `
            <div id='card'>
                <div class='close'><button id="close">X</button></div>
                <div id="modal-content">
                    <div>`+ name +`</div>
                    <div><center>`+ description +`</center></div>
                    <button class='ok-btn'>OK</button>
                </div>
            </div>        
    `;
    let content = document.querySelector("#modal");
    content.setAttribute("style", "display:flex;");
    content.innerHTML = mdl;
}

function view_prev_content(){
    console.log("vpc");
    let content = document.querySelector("#modal");
    content.setAttribute("style", "display:none;");
    content.innerHTML = "";    
}

console.log("Hello Friends!");