// With this we establish our initial page like #view, for easier configurations
// AND
// Solve the problem that when reloading the page, the default hash of the page is not reloaded correctly.
if(!location.hash || (performance.type == performance.TYPE_RELOAD)) {
    location.hash = "#view";
}

// Tieme setTimeout (in ms)
const WELCOME_DELAY = 2000;

// Function that welcome the user after two seconds in the first access 
function welcomeInTwoSeconds() {
    setTimeout( () => {
        document.getElementsByClassName('main__welcome')[0].style.display = 'block';
    },WELCOME_DELAY);
}

// Function that display information of the different sections 
function toggleInformation(section) {
    var heading = document.getElementsByClassName('main__' + section + '-information')[0];
    heading.style.display = (heading.style.display == 'block') ? 'none' : 'block';
}

// Function that hides the sections depending on which one we are in
function displaySection(sectionToDisplay, sectionsToHide) {
    if (location.hash == ('#' + sectionToDisplay)) {
        alert('You are already on this page');
    } 
    else {
        document.getElementById(sectionToDisplay).style.display = 'flex';

        sectionsToHide.forEach(element => {
            document.getElementById(element).style.display = 'none';
        });
    }
}

// We wait until our page is completely load to perfom actions
document.addEventListener('DOMContentLoaded', () => {
    // To welcome after two seconds in the first access
    welcomeInTwoSeconds();

    // EventListeners for show the information about the differents sections
    document.getElementById('characters_info').addEventListener("click", () => {
        toggleInformation('characters');
    });

    document.getElementById('locations_info').addEventListener("click", () => {
        toggleInformation('locations');
    });

    document.getElementById('episodes_info').addEventListener("click", () => {
        toggleInformation('episodes');
    });

    // EventListeners to handling the different sections that our website have to make a single-page application 
    document.getElementById('view_logo').addEventListener('click', () => {
        displaySection('view', ['character', 'location', 'episode', 'detail']); 
    });

    document.getElementById('characters_menu').addEventListener('click', () => {
        displaySection('character', ['view', 'location', 'episode', 'detail']);      
    });

    document.getElementById('locations_menu').addEventListener('click', () => {
        displaySection('location', ['view', 'character', 'episode', 'detail']);
    });

    document.getElementById('episodes_menu').addEventListener('click', () => {
        displaySection('episode', ['view', 'character', 'location', 'detail']);    
    });

    // EventListeners that when you click on a section of the nav, will load the corresponding API data.
    document.getElementById('characters_menu').addEventListener('click', () => {
        getData('character', printData);
    });
        
    document.getElementById('locations_menu').addEventListener('click', () => {
        getData('location', printData);
    });

    document.getElementById('episodes_menu').addEventListener('click', () =>  {
        getData('episode', printData);
    });
});
