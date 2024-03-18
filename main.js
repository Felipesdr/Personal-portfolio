const elements = document.querySelectorAll('.class-person-emphasis');
const personalInfo = document.querySelector('.personal-info');
const classPerson = document.querySelector('.class-person');
const contactLinks = document.querySelectorAll('.contact-link');
const leftLinks = document.querySelector('.left-links');
const sections = document.querySelector('.sections')

const skills = document.querySelector('.skills')
const aboutMe= document.querySelector('.-sobre-mim');
const projects = document.querySelector('.projetos');
const previousExperiencie = document.querySelector('.experiencias-anteriores');

//Slow fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    personalInfo.classList.add('show');

    setTimeout(() => {
        classPerson.classList.add('show');
    }, 500)

    setTimeout(() => {
        leftLinks.classList.add('show');
    }, 900)

    setTimeout(() => {
        elements.forEach(e => {
            e.classList.add('class-person-emphasis-effect');
        });
    }, 2500)

    setTimeout(() => {
        sections.classList.add('show');
    }, 1500)
});

//Shake links
document.addEventListener('DOMContentLoaded', () => {
    setInterval(shakeElements, 3000);
});

function shakeElements() {

    console.log(contactLinks);

    let randomNumber = Math.floor(Math.random() * contactLinks.length) + 0;

    setTimeout(() => {
        contactLinks[randomNumber].classList.add('shake');

        setTimeout(() => {
            contactLinks[randomNumber].classList.remove('shake');
        }, 1300);
    }, 3000);
}

//Fade-in when scroll
document.addEventListener('scroll', () => {
    const rect = skills.getBoundingClientRect();

    if (rect.top >= 0 && rect.top <= window.innerHeight) {
        skills.classList.add('show');
    }
});

document.addEventListener('scroll', () => {
    const rect = projects.getBoundingClientRect();

    if (rect.top >= 0 && rect.top <= window.innerHeight) {
        projects.classList.add('show');
    }
});

document.addEventListener('scroll', () => {
    const rect = previousExperiencie.getBoundingClientRect(); 

    if (rect.top >= 0 && rect.top <= window.innerHeight) {
        previousExperiencie.classList.add('show');
    }
});

//Links
function activateLink(link) {

    var links = document.querySelectorAll('.section-links a');
    links.forEach(function (item) {
        item.classList.remove('active');
    });

    link.classList.add('active');
}





