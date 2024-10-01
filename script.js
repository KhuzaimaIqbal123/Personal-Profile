// JavaScript Object containing the portfolio data
const portfolioData = {
    about: {
        name: "Muhammad Khuzaima",
        description: "Hello! I’m Muhammad Khuzaima, a passionate computer science student dedicated to harnessing the power of technology to solve complex problems creatively. With a keen interest in modern technologies, I thrive on coding challenges and enjoy exploring innovative solutions that make a meaningful impact. I constantly seek opportunities to expand my knowledge and stay updated with the latest trends in tech. I’m committed to continuous learning and growth, aiming to sharpen my skills with every project I undertake. My goal is to contribute to groundbreaking projects that drive progress and innovation in the tech industry. Whether it’s collaborating on exciting projects or brainstorming fresh ideas, let’s connect and explore how we can create something extraordinary together!",
        profileImage: "https://wallpapers.com/images/hd/black-car-4k-8iilwvng2997orpp.jpg",
        profileVideo: "https://cdn.pixabay.com/video/2024/05/05/210707_tiny.mp4"
    },
    education: [
        { degree: "Matriculation in Science", institution: "Divisional Public School & College (Faisalabad)" },
        { degree: "ICS", institution: "Punjab College (Faisalabad)" },
        { degree: "Bachelors in Computer Science", institution: "Information Technology University (Lahore)" }
    ],
    skills: {
        softSkills: ["Teamwork", "Problem Solving", "Leadership", "Creativity"],
        hardSkills: ["C++ Programming", "Python Development", "HTML/CSS", "JavaScript"]
    },
    projects: [
        { title: "Client-Server Application", description: "Developed a client-server app for file upload and authentication using socket programming." },
        { title: "Chess Game", description: "Built a Chess game in C++ with AI for player vs computer matches." }
    ],
    awards: [
        "Codefest 5.0 Participation Certificate",
        "IEEE Seminar Attendance Certificate"
    ],
    contact: {
        email: "khuzaimaiqbal91@gmail.com",
        phone: "0324-7142905"
    },
    socialMedia: [
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-khuzaima-212511266/", icon: "fab fa-linkedin" },
        { platform: "Instagram", url: "https://www.instagram.com/khuzaima.iqbal123/", icon: "fab fa-instagram" },
        { platform: "GitHub", url: "https://github.com/KhuzaimaIqbal123", icon: "fab fa-github" }
    ]
};

// Populate the about section
document.getElementById('profile-image').src = portfolioData.about.profileImage;
document.getElementById('profile-video').src = portfolioData.about.profileVideo;
document.getElementById('about-text').innerText = portfolioData.about.description;

// Populate the education section
const educationList = document.getElementById('education-list');
portfolioData.education.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<h3>${item.degree}</h3><p>${item.institution}</p>`;
    educationList.appendChild(li);
});

// Populate the skills section
const softSkillsList = document.getElementById('soft-skills-list');
portfolioData.skills.softSkills.forEach(skill => {
    const li = document.createElement('li');
    li.innerText = skill;
    softSkillsList.appendChild(li);
});

const hardSkillsList = document.getElementById('hard-skills-list');
portfolioData.skills.hardSkills.forEach(skill => {
    const li = document.createElement('li');
    li.innerText = skill;
    hardSkillsList.appendChild(li);
});

// Populate the projects section
const projectsList = document.getElementById('projects-list');
portfolioData.projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `<h3>${project.title}</h3><br><p>${project.description}</p>`;
    projectsList.appendChild(projectCard);
});

// Populate the awards section
const awardsList = document.getElementById('awards-list');
portfolioData.awards.forEach(award => {
    const li = document.createElement('li');
    li.innerText = award;
    awardsList.appendChild(li);
});

// Populate the contact section
const contactList = document.getElementById('contact-list');
contactList.innerHTML = `
    <li><i class="fas fa-envelope"></i> Email: <a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a></li>
    <li><i class="fas fa-phone"></i> Phone: ${portfolioData.contact.phone}</li>
`;

// Populate the social media section
const socialMediaLinks = document.getElementById('social-media-links');
portfolioData.socialMedia.forEach(media => {
    const link = document.createElement('a');
    link.href = media.url;
    link.target = "_blank";
    link.innerHTML = `<i class="${media.icon}"></i>`;
    socialMediaLinks.appendChild(link);
});
function changeLanguage() {
const selector = document.getElementById('language-selector');
const nameElement = document.getElementById('name');

if (selector.value === 'ur') {
nameElement.innerText = 'محمد خزیمہ'; // Replace with the name in Urdu
} else {
nameElement.innerText = 'Muhammad Khuzaima'; // Original name
}
}