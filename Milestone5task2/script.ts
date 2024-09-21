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

   
   if (profilePictureInput && firstNameElement && lastNameElement && fatherNameElement && cnicNoElement && emailElement && contactNumberElement && educationElement && workExperienceElement && skillsElement ) {

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const fatherName = fatherNameElement.value;
    const cnicNo = cnicNoElement.value;
    const email = emailElement.value;
    const contactNumber = contactNumberElement.value;
    const education = educationElement.value;
    const workExperience = workExperienceElement.value;
    const skills = skillsElement.value;


//picture elements
const profilePictureFile = profilePictureInput.files?.[0];
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
    
    //create resume output
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML =resumeOutput;
        resumeOutputElement.classList.remove("hidden");

        const buttonsContainer = document.createElement("div");
        buttonsContainer.id = "buttonsContainer";
        resumeOutputElement.appendChild(buttonsContainer);


        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download as PDF";
        downloadButton.addEventListener("click" , () => {
            window.print();   
        });
        buttonsContainer.appendChild(downloadButton);


        const shareLinkButton = document.createElement("button");
        shareLinkButton.textContent= "Copy Shareable Link";
        shareLinkButton.addEventListener("click" , async () => {
            try {
                const ShareableLink = `https://yourdomain.com/resumes/${firstName.replace(
                    /\s+/g,
                    "_"
                )}_cv.html`;


                await navigator.clipboard.writeText(ShareableLink);
                alert("Shareable link is copied to clipboard!");
            } catch (err) {
              console.error("Failed to copy link: ", err);
              alert("Failed to copy link to clipboard. Please try again.");
            }
        });
        buttonsContainer.appendChild(shareLinkButton);
    } else {
        console.error("Resume output container not found");
    }
} else {
    console.error("Form elements are missing");
}
});