/*
    uses bootstrap 5
    
    for a json array of objects with 2 attributes i.e. (id and name) create checkboxes
    
    container == main container that will include the checkboxes
    checkBox == determines the id,name of the checkbox 
    data = json data

*/
function appendCheckbox(container, checkBox, data) {
    let mainContainer = document.getElementById(container);

    for (var i in data) {
        let size = data[i].length;
        for (let j = 0; j < size; j++) {

            var container = document.createElement('div');
            container.setAttribute('class', 'form-check col-3');
            var chk = document.createElement('input'); // CREATE CHECK BOX.
            chk.setAttribute('type', 'checkbox'); // SPECIFY THE TYPE OF ELEMENT.
            chk.setAttribute('id', checkBox + data[i][j].id); // SET UNIQUE ID.
            chk.setAttribute('name', checkBox + data[i][j].id);
            chk.setAttribute('class', "form-check-input");
            var lbl = document.createElement('label'); // CREATE LABEL.
            lbl.setAttribute('for', checkBox + j);
            lbl.setAttribute('class', "form-check-label");
            // CREATE A TEXT NODE AND APPEND IT TO THE LABEL.
            lbl.appendChild(document.createTextNode(data[i][j].name));
            // APPEND THE NEWLY CREATED CHECKBOX AND LABEL TO THE <p> ELEMENT.
            container.appendChild(chk);
            container.appendChild(lbl);
            //                var div = document.createElement("div");
            //                div.innerHTML =  ;

            mainContainer.appendChild(container);
        }

    }

    return;
}
