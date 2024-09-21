var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
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
    if (profilePictureInput && firstNameElement && lastNameElement && fatherNameElement && cnicNoElement && emailElement && contactNumberElement && educationElement && workExperienceElement && skillsElement) {
        var firstName = firstNameElement.value;
        var lastName = lastNameElement.value;
        var fatherName = fatherNameElement.value;
        var cnicNo = cnicNoElement.value;
        var email = emailElement.value;
        var contactNumber = contactNumberElement.value;
        var education = educationElement.value;
        var workExperience = workExperienceElement.value;
        var skills = skillsElement.value;
        //picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n    <p><strong>First Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(firstName, " </span> </p>\n    <p><strong>Last Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(lastName, " </span> </p>\n    <p><strong>Father Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(fatherName, " </span> </p>\n    <p><strong>Cnic No:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(cnicNo, " </span> </p>\n    <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n    <p><strong>Contact Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(contactNumber, " </span> </p>\n\n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\" >").concat(education, "</p>\n\n    <h3>Work Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(workExperience, "</p>\n\n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\" >").concat(skills, "</p>\n    ");
        // Display the resume output 
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('editabale');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentvalue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentvalue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function n() {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
