// Function that create an image tag 
function createImage(element) {
    let main_image = document.createElement('img');
    main_image.setAttribute('src', element["image"]);
    main_image.setAttribute('alt', element["name"]);
    return main_image;
}

// Function that set an EventListener to a specific tag
function setEventListener (tag, section, element) {
    tag.addEventListener('click', () => {
        document.getElementById(section).style.display = 'none';
        document.getElementById('detail').style.display = 'flex';
        location.hash += ('/' + element['id']);
        printDetailData(element, section);
    });
}

// Function that displays the data of the selected section 
function printData(data, section) {
    // If the JSON is not empty
    if(data.results.length > 0 ){
        // Save the parent div of the child divs we are going to create and empty it
        let main_father = document.getElementById(section);
        main_father.innerHTML = '';

        // Foreach JSON element
        data.results.forEach(element => {
            // Create the child div
            let main_child = document.createElement('div');
            main_child.setAttribute('class', 'main__element');

            // If the section has an image, we create its element with its corresponding attributes and insert it in the child div
            if ('image' in element) {      
                let main_image = createImage(element);    
                main_image.setAttribute('class', 'main__image main__image--transition');
                setEventListener(main_image, section, element);
                main_child.appendChild(main_image); 
            }

            // Creates the element containing the name with its corresponding attributes
            let main_name = document.createElement('p');
            main_name.innerHTML = element["name"];
            main_name.setAttribute('class', 'main__name main__name--transition');    
            setEventListener(main_name, section, element);

            // Insert the elements in their corresponding parents
            main_child.appendChild(main_name);       
            main_father.appendChild(main_child);
        });
    }
    // If is empty, alert the user
    else {
        alert('Sorry, there is no data to show!')
    }
}


