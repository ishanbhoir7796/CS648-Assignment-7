/*eslint-env browser*/

function showMessage() {
    window.alert('I have been clicked');
}

function main() {

    var button2 = document.getElementById('button2');
    button2.onclick = function() {
        window.alert('I have been clicked');
    };

    var button3 = document.getElementById('button3');

    function button3Clicked() {
        window.alert('I have been clicked');
    }
    button3.addEventListener('click', button3Clicked);

    var button4 = document.getElementById('button4');
    button4.addEventListener('click', function() {
        window.alert('I have been clicked');
    });

}

window.addEventListener('load', main);