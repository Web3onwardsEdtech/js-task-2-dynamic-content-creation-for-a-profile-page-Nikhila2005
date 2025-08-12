const profiles = [
    {
        name: "John Doe",
        bio: "Web Developer with a passion for creating interactive and dynamic web applications.",
        skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        name: "Jane Smith",
        bio: "Graphic Designer who loves bringing creativity and innovation to web designs.",
        skills: ["Photoshop", "Illustrator", "CSS", "HTML"]
    }
];

profiles.forEach(profile => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const nameElement = document.createElement('h2');
    nameElement.innerText = profile.name;
    card.appendChild(nameElement);

    const bioElement = document.createElement('p');
    bioElement.innerText = profile.bio;
    card.appendChild(bioElement);

    const skillsElement = document.createElement('ul');
    profile.skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.innerText = skill;
        skillsElement.appendChild(skillItem);
    });
    card.appendChild(skillsElement);

    document.querySelector('.container').appendChild(card);
});
