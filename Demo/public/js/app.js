let box_pheptinh = document.querySelector(".box_pheptinh");
let cautraloi_1 = document.querySelector(".cautraloi_1");
let cautraloi_2 = document.querySelector(".cautraloi_2");
let box_dapan_1 = document.querySelector(".box_dapan_1");
let box_dapan_2 = document.querySelector(".box_dapan_2");
let box_hoathinh = document.querySelector(".box_hoathinh");
let box_phaohoa = document.querySelector(".box_phaohoa");
let star = document.querySelectorAll(".star");
function ranDom() {
    return Math.floor(Math.random() * 50);
}
let mangPhepTinh = ["+", "-", "*", "/"];
function ranDomPhepTinh() {
    let i = Math.floor(Math.random() * 4)
    return mangPhepTinh[i];
}
let so1 = 0;
let so2 = 0;
let phepTinh;
let baitoan = "";
let dapan = "";
let dapanDung;
let dapanSai;
let viTriDung;
function game() {
    changeColorOfStarComeBack();
    box_phaohoa.style.width = 0+"px";
    box_phaohoa.style.height = 0+"px";
    box_hoathinh.style.width = 0+"px";
    box_hoathinh.style.height = 0+"px";
    box_hoathinh.innerHTML="";

    so1 = ranDom();
    so2 = ranDom();
    phepTinh = ranDomPhepTinh();
    baitoan = `${so1} ${phepTinh} ${so2}`;
    dapan = eval(baitoan) + "";
    while (dapan.includes(".") || (phepTinh == "/" && so2 == 0)) {
        so1 = ranDom();
        so2 = ranDom();
        phepTinh = ranDomPhepTinh();
        baitoan = `${so1} ${phepTinh} ${so2}`;
        dapan = eval(baitoan) + "";
    }
    box_pheptinh.innerHTML = baitoan;
    dapanDung = dapan;
    dapanSai = Math.floor(Math.random() * 100);
    viTriDung = Math.floor(Math.random() * 2);
    if (viTriDung == 0) {
        cautraloi_1.innerHTML = dapanDung;
        cautraloi_2.innerHTML = dapanSai;
    } else {
        cautraloi_2.innerHTML = dapanDung;
        cautraloi_1.innerHTML = dapanSai;
    }
   
}
game();
box_dapan_1.addEventListener('click', function () {
    if (box_dapan_1.textContent == dapanDung) {
        box_hoathinh.innerHTML+=`<img class="img-fluid hoat_hoa" src="./public/images/chienthang.gif">`;
        changeColorOfStar();
        box_phaohoa.style.width = 100+"%";
        box_phaohoa.style.height = 450+"px";
        box_hoathinh.style.width = 400+"px";
        box_hoathinh.style.height = 400+"px";
        setTimeout(() => {
            game();
        }, 1000);
            
    }else{
        box_hoathinh.innerHTML+=`<img class="img-fluid hoat_hoa" src="./public/images/sai.gif">`;
        box_hoathinh.style.width = 400+"px";
        box_hoathinh.style.height = 400+"px";
        setTimeout(() => {
            game();
        }, 1000); 
    }
})
box_dapan_2.addEventListener('click', function () {
    if (box_dapan_2.textContent == dapanDung) {
        box_hoathinh.innerHTML+=`<img class="img-fluid hoat_hoa" src="./public/images/chienthang.gif">`;
        changeColorOfStar();
        box_phaohoa.style.width = 100+"%";
        box_phaohoa.style.height = 450+"px";
        box_hoathinh.style.width = 400+"px";
        box_hoathinh.style.height = 400+"px";
        setTimeout(() => {
            game();
        }, 1000);
            
    }else{
        box_hoathinh.innerHTML+=`<img class="img-fluid hoat_hoa" src="./public/images/sai.gif">`;
        box_hoathinh.style.width = 400+"px";
        box_hoathinh.style.height = 400+"px";
        setTimeout(() => {
            game();
        }, 1000); 
    }
})

function changeColorOfStarComeBack() {
    star.forEach(element => {
        element.style.background = "#d3a145";
        element.style.fill = "#000";
    });
}
function changeColorOfStar() {
    star.forEach(element => {
        element.style.background = "orange";
        element.style.fill = "yellow";
    });
}












