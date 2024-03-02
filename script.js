var names = ['맹경도', '이종수', '김혜진', '조정원'];
var fields = ['message', 'thanks', 'prayer'];

window.onload = function() {
    names.forEach(function(name) {
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + name + '</td>';

        fields.forEach(function(field) {
            var input = document.createElement('input');
            input.type = 'text';
            input.value = localStorage.getItem(name + field) || '';
            input.id = name + field;
            var cell = document.createElement('td');
            cell.appendChild(input);
            row.appendChild(cell);
        });

        document.getElementById('inputTable').appendChild(row);
    });
};

function saveInputs() {
    names.forEach(function(name) {
        fields.forEach(function(field) {
            var input = document.getElementById(name + field);
            localStorage.setItem(name + field, input.value);
        });
    });
}
