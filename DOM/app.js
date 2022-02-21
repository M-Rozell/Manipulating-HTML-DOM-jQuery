
let friendsArr = ["Cat", "James", "Rachel", "Tommy", "Pat", "Sueanne", "Robert", "Mikey", "Erin", "Oliver"];

document.addEventListener('DOMContentLoaded', function () {

    let btn = document.createElement('button');
    btn.innerText = 'Push It!!';
    btn.id = 'niceBtn';
    document.body.appendChild(btn);

    btn.addEventListener("click", function () {
        alert("You look really nice today!");
    })

    let btn2 = document.createElement('button')
    btn2.id = "btn2";
    btn2.innerText = "Wanna see my name?"
    document.body.appendChild(btn2);
    let div2 = document.createElement('div');
    div2.id = "div2";
    document.body.appendChild(div2);

    nameCounter = 0;
    btn2.addEventListener("click", function () {
        let clickSpan = document.createElement('span');
        clickSpan.innerText = 'Maggie Rozell';
        div2.appendChild(clickSpan);
        nameCounter++;
        if (nameCounter >= 1) {
            btn2.disabled = true;
        }
    })

    let btn3 = document.getElementById("friendsBtn");
    let ul3 = document.getElementById("friendsUl");
    counter = 0;

    btn3.addEventListener("click", function () {
        let li2 = document.createElement('li');
        ul3.appendChild(li2);

        li2.textContent = friendsArr[counter];
        counter++;

        if (counter >= 10) {
            btn3.disabled = true;
        }
    })
});

function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

let btn = document.getElementById("textBtn");
btn.addEventListener("click", function () {
    let box = document.getElementById("textInput").value;
    alert(box);
});

let div = document.getElementById("mouseOverDiv");
div.addEventListener("mouseover", function () {

    div.style.backgroundColor = "red";
    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = null;
    })
});

let para = document.getElementById("para");
// para.addEventListener("click", function () {
//     para.style.color = "red";
// })
para.addEventListener("click", function () {
    para.style.color = generateRandomColor();
})











