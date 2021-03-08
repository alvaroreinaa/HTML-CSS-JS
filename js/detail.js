// Const that have the fields of the description according to the section
const descriptionFields = {
    character: ['status', 'species', 'type', 'gender'],
    location: ['type', 'dimension'],
    episode: ['episode', 'air_date']
};

// Function that shows in detail the selected element
function printDetailData(element, section) {
    // Save the parent div of the childs divs we are going to create and empty it
    let main_detail = document.getElementById('detail');
    main_detail.innerHTML = '';

    // Create the two childs divs with its corresponding attributes
    let main_header = document.createElement('div');
    main_header.setAttribute('class', 'main__header');

    let main_description = document.createElement('div');
    main_description.setAttribute('class', 'main__description');

    // Creates the element containing the name with its corresponding attributes
    let main_name = document.createElement('p');
    main_name.innerHTML = element["name"];
    main_name.setAttribute('class', 'main__detail-name');    

    // Insert the elements in his corresponding parent
    main_header.appendChild(main_name);

    // If the section has an image, we create its element with its corresponding
    // attributes and insert it in his corresponding parent
    if ('image' in element) {
        let main_image = createImage(element);
        main_image.setAttribute('class', 'main__detail-image');
        main_header.appendChild(main_image); 
    }

    // Insert the elements in his corresponding parent
    main_detail.appendChild(main_header);
  
    // Foreach file of the element
    for (let index = 0; index < descriptionFields[section].length; index++) {
        // Create his container
        let paragraph = document.createElement('p');

        // We create his field with his information
        let field = document.createElement('span');
        field.setAttribute('class','main__description-field');
        field.innerHTML = descriptionFields[section][index] + ': ';

        let information = document.createElement('span');

        if (element[descriptionFields[section][index]].length == 0) {
            information.innerHTML = 'Unknown';
        } else {
            information.innerHTML = element[descriptionFields[section][index]];
        }
        
        // Insert the elements in his corresponding parent
        paragraph.appendChild(field);
        paragraph.appendChild(information);
        main_description.appendChild(paragraph);
    }

    // Insert the elements in his corresponding parent
    main_detail.appendChild(main_description);
}
