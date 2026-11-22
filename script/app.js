const displayNav = document.getElementById('displayNav')
const navListContainer = document.getElementById('navListContainer')
const closeNav = document.getElementById('closeNav')
const navListUl = document.getElementById('navListUl')
const dropdown = document.getElementsByClassName('dropdown')
const dropdown1 = document.getElementsByClassName('dropdown1')
const dropdown2 = document.getElementsByClassName('dropdown2')
const dropdown3 = document.getElementsByClassName('dropdown3')
const childLI = document.getElementsByClassName('childLI')
const childLI1 = document.getElementsByClassName('childLI1')
const childLI2 = document.getElementsByClassName('childLI2')
const childLI3 = document.getElementsByClassName('childLI3')



function toggleNavlist() {
    navListContainer.classList.add('displayNav')
    navListContainer.classList.remove('hide')

}

function hideNav() {
    navListContainer.classList.remove('displayNav')
    navListContainer.classList.add('hide')
}

function addList() {
    for (let index = 0; index < childLI.length; index++) {
    childLI[index].classList.toggle('hide')
    



}
 

}

function addList1() {
    for (let index = 0; index < childLI1.length; index++) {
    childLI1[index].classList.toggle('hide')
    



}
 

}

function addList2() {
    for (let index = 0; index < childLI2.length; index++) {
    childLI2[index].classList.toggle('hide')
    



}
 

}

function addList3() {
    for (let index = 0; index < childLI3.length; index++) {
    childLI3[index].classList.toggle('hide')
    



}
 

}


displayNav.addEventListener('click', toggleNavlist)
closeNav.addEventListener('click', hideNav)

for (let index = 0; index < dropdown.length; index++) {
    dropdown[index].addEventListener('click', addList);



}
for (let index = 0; index < dropdown1.length; index++) {
    dropdown1[index].addEventListener('click', addList1);

}

for (let index = 0; index < dropdown2.length; index++) {
    dropdown2[index].addEventListener('click', addList2);

}

for (let index = 0; index < dropdown3.length; index++) {
    dropdown3[index].addEventListener('click', addList3);

}



// main page

// SECTION 5

const imgcontaneer = document.querySelector('#imgcontaneer')
const imgcontaneer1 = document.querySelector('#imgcontaneer1')
const imgcontaneer2 = document.querySelector('#imgcontaneer2')
const imgcontaneer3 = document.querySelector('#imgcontaneer3')
const maintext = document.querySelectorAll('.maintext')
function out(){
maintext[0].classList.add('hid')
}
function hover(){
maintext[0].classList.remove('hid')
}
function out1(){
maintext[1].classList.add('hid')
}
function hover1(){
maintext[1].classList.remove('hid')
}
function out2(){
maintext[2].classList.add('hid')
}
function hover2(){
maintext[2].classList.remove('hid')
}
function out3(){
maintext[3].classList.add('hid')
}
function hover3(){
maintext[3].classList.remove('hid')
}

imgcontaneer.addEventListener('mouseout',out)
imgcontaneer.addEventListener('mouseover', hover)
imgcontaneer1.addEventListener('mouseout',out1)
imgcontaneer1.addEventListener('mouseover', hover1)
imgcontaneer2.addEventListener('mouseout',out2)
imgcontaneer2.addEventListener('mouseover', hover2)
imgcontaneer3.addEventListener('mouseout',out3)
imgcontaneer3.addEventListener('mouseover', hover3)


