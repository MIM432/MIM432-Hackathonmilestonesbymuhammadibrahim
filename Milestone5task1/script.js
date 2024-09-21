var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var firstNameElement = document.getElementById('firstName');
    var lastNameElement = document.getElementById('lastName');
    var fatherNameElement = document.getElementById('fatherName');
    var cnicNoElement = document.getElementById('cnicNo');
    var emailElement = document.getElementById('email');
    var contactNumberElement = document.getElementById('contactNumber');
    var educationElement = document.getElementById('education');
    var workExperienceElement = document.getElementById('workExperience');
    var skillsElement = document.getElementById('skills');
    var cvnameElement = document.getElementById("cvname");
    if (profilePictureInput && firstNameElement && lastNameElement && fatherNameElement && cnicNoElement && emailElement && contactNumberElement && educationElement && workExperienceElement && skillsElement && cvnameElement) {
        var firstName = firstNameElement.value;
        var lastName = lastNameElement.value;
        var fatherName = fatherNameElement.value;
        var cnicNo = cnicNoElement.value;
        var email = emailElement.value;
        var contactNumber = contactNumberElement.value;
        var education = educationElement.value;
        var workExperience = workExperienceElement.value;
        var skills = skillsElement.value;
        var cvname = cvnameElement.value;
        var uniquePath = "resumes/".concat(cvname.replace(/\s+/g, '_'), "_cv.html");
        //picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n    <p><strong>First Name:</strong> ").concat(firstName, " </p>\n    <p><strong>Last Name:</strong> ").concat(lastName, " </p>\n    <p><strong>Father Name:</strong> ").concat(fatherName, " </p>\n    <p><strong>Cnic No:</strong> ").concat(cnicNo, " </p>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n    <p><strong>Contact Number:</strong> ").concat(contactNumber, " </p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Work Experience</h3>\n    <p>").concat(workExperience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your Form';
        //create resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error('one or more output form elements are missing');
    }
});
