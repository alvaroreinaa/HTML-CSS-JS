// Function that returns the fields of the description according to the section
function getDescriptionFields(section) {
    let fields; 

    switch (section) {
        case 'character':
            fields = ['status', 'species', 'type', 'gender'];
            break;
        case 'location':
            fields = ['type', 'dimension'];
            break;
        case 'episode':
            fields = ['episode', 'air_date'];
            break;
        default:
            break;
    }

    return fields;
}

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

    // Depending on the section, we have different fields with their respective formats
    let description_fields = getDescriptionFields(section);
   
    // Foreach file of the element
    for (let index = 0; index < description_fields.length; index++) {
        // Create his container
        let paragraph = document.createElement('p');

        // We create his field with his information
        let field = document.createElement('span');
        field.setAttribute('class','main__description-field');
        field.innerHTML = description_fields[index] + ': ';

        let information = document.createElement('span');

        if (element[description_fields[index]].length == 0) {
            information.innerHTML = 'Unknown';
        } else {
            information.innerHTML = element[description_fields[index]];
        }
        
        // Insert the elements in his corresponding parent
        paragraph.appendChild(field);
        paragraph.appendChild(information);
        main_description.appendChild(paragraph);
    }

    // Insert the elements in his corresponding parent
    main_detail.appendChild(main_description);
}