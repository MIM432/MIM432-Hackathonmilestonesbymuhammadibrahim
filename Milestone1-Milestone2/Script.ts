const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const firstName = document.getElementById('firstName') as HTMLInputElement;
const lastName = document.getElementById('lastName') as HTMLInputElement;
const fatherName = document.getElementById('fatherName') as HTMLInputElement;
const cnicNo = document.getElementById('cnicNo') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const contactNumber = document.getElementById('contactNumber') as HTMLInputElement;
const profilePicture = document.getElementById('profilePicture') as HTMLInputElement;
const education = document.getElementById('education') as HTMLTextAreaElement;
const workExperience = document.getElementById('workExperience') as HTMLTextAreaElement;
const skills = document.getElementById('skills') as HTMLTextAreaElement;

resumeForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    generateResume();
});

function generateResume() {

    const existingResume = document.getElementById('resumeSection');
    if (existingResume) existingResume.remove();
    

    const resumeSection = document.createElement('div');
    resumeSection.id = 'resumeSection'; 
    resumeSection.style.marginTop = '20px';

    resumeSection.innerHTML = `
        <h2>${firstName.value} ${lastName.value}</h2>
        <p>Father's Name: ${fatherName.value}</p>
        <p>CNIC: ${cnicNo.value}</p>
        <p>Email: ${email.value}</p>
        <p>Contact Number: ${contactNumber.value}</p>
        <h3>Education</h3>
        <p>${education.value}</p>
        <h3>Work Experience</h3>
        <p>${workExperience.value}</p>
        <h3>Skills</h3>
        <p>${skills.value}</p>
    `;

    if (profilePicture.files && profilePicture.files[0]) {
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(profilePicture.files[0]);
        imageElement.alt = 'Profile Picture';
        imageElement.classList.add('profilePicture');
        resumeSection.appendChild(imageElement);
    }

    document.body.appendChild(resumeSection);
}

function toggleVisibility(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}
