// listing element
document.getElementById('resumeForm')?.addEventListener('submit' , function (event) {
    event.preventDefault();


    //type assertion
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const firstNameElement = document.getElementById('firstName') as HTMLInputElement;
    const lastNameElement = document.getElementById('lastName') as HTMLInputElement;
    const fatherNameElement = document.getElementById('fatherName') as HTMLInputElement;
    const cnicNoElement = document.getElementById('cnicNo') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactNumberElement = document.getElementById('contactNumber') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const workExperienceElement = document.getElementById('workExperience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

const cvnameElement = document.getElementById("cvname") as HTMLInputElement;

   
   if (profilePictureInput && firstNameElement && lastNameElement && fatherNameElement && cnicNoElement && emailElement && contactNumberElement && educationElement && workExperienceElement && skillsElement && cvnameElement ) {

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const fatherName = fatherNameElement.value;
    const cnicNo = cnicNoElement.value;
    const email = emailElement.value;
    const contactNumber = contactNumberElement.value;
    const education = educationElement.value;
    const workExperience = workExperienceElement.value;
    const skills = skillsElement.value;


    const cvname = cvnameElement.value;
    const uniquePath = `resumes/${cvname.replace(/\s+/g, '_')}_cv.html`

//picture elements
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
    <p><strong>First Name:</strong> ${firstName} </p>
    <p><strong>Last Name:</strong> ${lastName} </p>
    <p><strong>Father Name:</strong> ${fatherName} </p>
    <p><strong>Cnic No:</strong> ${cnicNo} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Contact Number:</strong> ${contactNumber} </p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Work Experience</h3>
    <p>${workExperience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    
    const downloadLink =document.createElement('a')
    downloadLink.href ='data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
    downloadLink.download = uniquePath;
    downloadLink.textContent = 'Download Your Form';



    
    //create resume output
    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML =resumeOutput;

resumeOutputElement.appendChild(downloadLink)

          resumeOutputElement.style.display = "block";

    
    }
} else {
    console.error('one or more output form elements are missing')
}
})