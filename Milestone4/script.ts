// listing element
document.getElementById('resumeForm')?.addEventListener('submit' , function(event) {
    event.preventDefault();


   
   const profilePictureInput =document.getElementById('profilePicture') as HTMLInputElement;
    const firstNameElement = document.getElementById('firstName') as HTMLInputElement;
    const lastNameElement = document.getElementById('lastName') as HTMLInputElement;
    const fatherNameElement = document.getElementById('fatherName') as HTMLInputElement;
    const cnicNoElement = document.getElementById('cnicNo') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactNumberElement = document.getElementById('contactNumber') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const workExperienceElement = document.getElementById('workExperience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

   
   if (profilePictureInput && firstNameElement && lastNameElement && fatherNameElement && cnicNoElement && emailElement && contactNumberElement && educationElement && workExperienceElement && skillsElement) {

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const fatherName = fatherNameElement.value;
    const cnicNo = cnicNoElement.value;
    const email = emailElement.value;
    const contactNumber= contactNumberElement.value;
    const education = educationElement.value;
    const workExperience = workExperienceElement.value;
    const skills = skillsElement.value;

//picture elements
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
    <p><strong>First Name:</strong> <span id="edit-name" class="editable"> ${firstName} </span> </p>
    <p><strong>Last Name:</strong> <span id="edit-name" class="editable"> ${lastName} </span> </p>
    <p><strong>Father Name:</strong> <span id="edit-name" class="editable"> ${fatherName} </span> </p>
    <p><strong>Cnic No:</strong> <span id="edit-name" class="editable"> ${cnicNo} </span> </p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
    <p><strong>Contact Number:</strong> <span id="edit-phone" class="editable"> ${contactNumber} </span> </p>

    <h3>Education</h3>
    <p id="edit-education" class="editable" >${education}</p>

    <h3>Work Experience</h3>
    <p id="edit-experience" class="editable">${workExperience}</p>

    <h3>Skills</h3>
    <p id="edit-skills" class="editable" >${skills}</p>
    `;
    
    // Display the resume output 
    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML =resumeOutput
    makeEditable();
    }
} else {
    console.error('one or more output elements are missing')
}
});

function makeEditable(){
    const editableElements = document.querySelectorAll('editabale');
    editableElements.forEach(element => {
        element.addEventListener('click' , function() {
            const currentElement = element as HTMLElement;
            const currentvalue = currentElement.textContent || "" ;

            //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentvalue
                input.classList.add('editing-input')

                input.addEventListener('blur', function n(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })


                currentElement.style.display ='none'
                currentElement.parentNode?.insertBefore(input , currentElement)
                input.focus()

            }


        })
    })
}