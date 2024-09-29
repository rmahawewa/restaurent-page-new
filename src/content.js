import {list_breakfast_items} from "./food_items.js";
import {list_lunch_items} from "./food_items.js";
import {list_dinner_items} from "./food_items.js"
import {list_beverages} from "./food_items.js";
import {list_desserts} from "./food_items.js";
import gathering from "./asset/resource/img/gathering.png";

function itm(itmid,name,description) {
    let item = `<div class='item'>
                                <label class='itm-name'>`+ name +`</label>                                
                                <button class='details |`+ name +` |`+ description +`' >Details</button>
                </div>`;
                
    return {item};
}

function food_items(time, menu_arr) {    
    let list = () => {
        let menu = '';
        for(let i=0; i<menu_arr.length; i++){
            let num = i + 1;
            let itmid = time + num;
            let item_name = menu_arr[i].name;
            let description = menu_arr[i].description;
            menu += itm(itmid, item_name, description).item;
        }
        return menu;
    }    
    return {list};
}

let breakfast_items = list_breakfast_items;
let lunch_items = list_lunch_items;
let dinner_items = list_dinner_items;
let beverages = list_beverages;
let desserts = list_desserts;
let brft = food_items("bft", breakfast_items);
let lnch = food_items("lnch", lunch_items);
let dinr = food_items("dnr", dinner_items);
let dest = food_items("dest", desserts);
let bevs = food_items("bev", beverages);


let create_menu = `<p id="discount">50% off from every menu item for the first three days of staying</p>
                    <div class='menu' >
                        <h1 id='b'>Breakfast</h1>
                        <div class='breakfast' >`+ brft.list() +`
                        </div>
                        <h1 id='l'>Lunch</h1>
                        <div class='lunch' >`+ lnch.list() +`</div>
                        <h1 id='d'>Dinner</h1>
                        <div class='dinner' >`+ dinr.list() +`
                        </div>
                        <h1 id='ds'>Desserts</h1>
                        <div class='desserts' >`+ dest.list() +`
                        </div>
                        <h1 id='bv'>Beverages</h1>
                        <div class='beverages' >`+ bevs.list() +`
                        </div>
                    </div>`; 

let home =`
            <p><span id="topic">DECADES</span><span id="remain"> Restaurent</span></p>
            <p id="head-prgh">To meet your friends after thousand years...</p>
            <div id="details">
                <img src="`+ gathering +`" id="img-indxpg">
            </div>
        `;

let desc = `<div id='contnr-about'>
                <div id='about'>
                    <h1>Our Restaurant</h1>
                    <p>DECADES is a culinary haven where passion meets perfection to experience with your friends. Nestled in the heart of Colombo, our restaurant offers a unique dining experience that tantalizes the senses. Inspired by Sri Lankan cuisine, our menu showcases a harmonious blend of traditional flavors and modern techniques. </p>
                    <p>From our handcrafted appetizers to our exquisite entrees, each dish is a testament to our commitment to quality and taste. Our talented chefs source the finest ingredients from local farmers and artisans, ensuring that every bite is fresh, flavorful, and unforgettable.</p>
                    <p>Whether you're celebrating a special occasion or simply seeking a delightful meal, DECADES is the perfect destination. Our inviting atmosphere, attentive service, and exceptional cuisine will leave you wanting more. Join us for a culinary journey that will exceed your expectations.</p>
                    <p>Location: No 1056/A, Kandy Road, Colombo, Sri Lanka.</p>
                    <p>For more details - contact: +94 71 273 5639 </p>
                </div>
            </div>`;

export {create_menu, home, desc};