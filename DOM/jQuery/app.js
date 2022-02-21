
$(document).ready(function () {

    let $btn = $('<button>Push It!</button>');
    $($btn).appendTo('body').css('background-color', 'aqua');
    $btn.on("click", function () {
        alert("YOU ARE A BEAUTIFUL PERSON!");
    });

    let $input = $('<input type="text" value= " " id="textInput">');
    $input.appendTo('body').css({
        'position': 'absolute',
        'top': '40px',
        'left': '8px'
    });

    let $btnSubmit = $('<input type="button" value="Submit" id="textBtn">');
    $btnSubmit.appendTo('body').css({
        'position': 'absolute',
        'top': '35px',
        'left': '180px',
        'margin': '5px'
    });

    $("#textBtn").on("click", function () {
        let value = $("#textInput").val();
        alert(value);
    });

    let $div = $('<div>This is a Div!</div>');
    $div.appendTo('body').css({
        'position': 'relative',
        'top': '40px',
        'cursor': 'pointer'
    });

    $div.mouseover(function () {
        $div.css({
            'background-color': 'red',
            'color': 'white'
        })
        $div.mouseout(function () {
            $div.css({
                'background-color': 'white',
                'color': 'black'
            });
        });

    });

    $para = $('<p>This is a Paragraph!</p>');
    $para.appendTo('body').css({
        'position': 'relative',
        'top': '25px',
        'cursor': 'pointer'
    });

    $para.on("click", function () {
        $para.css({
            'color': generateRandomColor(),
            'user-select': 'none'
        });
    });

    let $btn2 = $('<button>Wanna See My Name?</button>');
    $btn2.appendTo('body').css({
        'position': 'relative',
        'top': '15px'
    });

    let $div2 = $('<div></div>');
    $div2.appendTo('body').css({
        'position': 'relative',
        'top': '20px'
    });

    counter = 0;
    $btn2.on("click", function () {
        let $span = $('<span>Maggie Rozell</span>');
        $($span).appendTo($div2);
        counter++;
        if (counter >= 1) {
            $($btn2).prop("disabled", true);
        }
    });

    let $btn3 = $('<button>Click for Friends</button>');
    $btn3.appendTo('body').css({
        'position': 'absolute',
        'top': '175px'
    });

    $ul = $('<ul></ul>');
    $ul.appendTo('body').css({
        'position': 'relative',
        'top': '75px'
    });

    let $friendsArr = ["Cat", "James", "Rachel", "Tommy", "Pat", "Sueanne", "Robert", "Mikey", "Erin", "Oliver"];
    friendsCounter = 0;
    $($btn3).click(function () {
        let $li = $("<li>" + $friendsArr[friendsCounter] + "</li>");
        $li.appendTo($ul);
        friendsCounter++;
        if (friendsCounter >= 10) {
            $btn3.prop('disabled', true);
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



