var resumeForm = document.getElementById('resumeForm');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var fatherName = document.getElementById('fatherName');
var cnicNo = document.getElementById('cnicNo');
var email = document.getElementById('email');
var contactNumber = document.getElementById('contactNumber');
var profilePicture = document.getElementById('profilePicture');
var education = document.getElementById('education');
var workExperience = document.getElementById('workExperience');
var skills = document.getElementById('skills');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    generateResume();
});
function generateResume() {
    var existingResume = document.getElementById('resumeSection');
    if (existingResume)
        existingResume.remove();
    var resumeSection = document.createElement('div');
    resumeSection.id = 'resumeSection';
    resumeSection.style.marginTop = '20px';
    resumeSection.innerHTML = "\n        <h2>".concat(firstName.value, " ").concat(lastName.value, "</h2>\n        <p>Father's Name: ").concat(fatherName.value, "</p>\n        <p>CNIC: ").concat(cnicNo.value, "</p>\n        <p>Email: ").concat(email.value, "</p>\n        <p>Contact Number: ").concat(contactNumber.value, "</p>\n        <h3>Education</h3>\n        <p>").concat(education.value, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(workExperience.value, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills.value, "</p>\n    ");
    if (profilePicture.files && profilePicture.files[0]) {
        var imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(profilePicture.files[0]);
        imageElement.alt = 'Profile Picture';
        imageElement.classList.add('profilePicture');
        resumeSection.appendChild(imageElement);
    }
    document.body.appendChild(resumeSection);
}
function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}
