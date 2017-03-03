var bio = {
    "name": "Amber Trask",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+44 (0) 7476 222545",
        "email": "amberleightrask@gmail.com",
        "github": "4mber",
        "twitter": "@amberleightrask",
        "location": "Oxford, UK"
    },
    "welcomeMessage": "Thank you for your time!",
    "skills": [
        "web development", "singing", "song-writing", "boating"
    ],
    "biopic": "images/closeup.jpg"
};


var education = {
    "schools": [{
        "name": "Belmont University",
        "location": "Nashville, TN, US",
        "degree": "BM",
        "majors": "Commercial Music: Voice, Music Business Emphasis",
        "dates": "2009-2013",
        "url": "www.belmont.edu"
    }],
    "onlineCourses": [{
        "title": "Front End Web Development Nanodegree",
        "school": "Udacity",
        "dates": "Nov 2016 - Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};


var work = {
    "jobs": [{
            "employer": "Leigh & Liam",
            "title": "Singer/Songwriter, Guitarist, Producer, Web Developer",
            "location": "Nashville, TN, US",
            "dates": "July 2012 - Present",
            "description": "Making up half of the duo Leigh & Liam, I have been responsible" +
            " for writing vocals, lyrics, background vocals, and guitar parts for original" +
            " and cover songs, as well as creating and maintaining the websites for this duo" +
            " and my solo musical endeavors. This position has also given me the opportunity to" +
            " co-produce recordings and music videos, as well as put together photo shoots and live performances."
        },
        {
            "employer": "Yamaha Entertainment Group of America",
            "title": "Artist Relations Coordinator",
            "location": "Nashville, TN, US",
            "dates": "August 2012 - May 2015",
            "description": "Working up from Intern, to Production Assistant, to Publishing" +
            " Coordinator, to Artist Relations Coordinator, responsibilities included everything" +
            " from concert production, event planning, ticketing and catering organization," +
            " website design, managing interns, recording studio management, documentary transcription," +
            " acquiring new artist endorsement and dealer sales contracts, handling invoices for artist" +
            " and dealer purchases, and interacting with musicians from many different genres and levels of notoriety."

        }
    ]
};


var projects = {
    "projects": [{
            "title": "Amber's Music",
            "dates": "2016",
            "description": "Website I built for a solo music project.",
            "images": [
                "images/altss.jpg"
            ]
        },
        {
            "title": "Leigh & Liam",
            "dates": "2016",
            "description": "Website I built for the musical duo Leigh & Liam.",
            "images": [
                "images/lalss.jpg"
            ]
        }
    ]
};


bio.display = function() {
    formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
    formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMsg);

    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();


work.display = function() {
    for (job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();


projects.display = function() {
    for (project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        for (image = 0; image < projects.projects[project].images.length; image++) {
            var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImages);
        }
    }
};
projects.display();


education.display = function() {
    for (school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		
	$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    for (course = 0; course < education.onlineCourses.length; course++) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool); 
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};
education.display();


$("#mapDiv").append(googleMap);


/* function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}
$("#main").append(internationalizeButton); */
