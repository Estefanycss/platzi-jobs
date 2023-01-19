fetch('https://pokeapi.co/api/v2/pokemon-species/')
  .then(response => response.json())
  .then(data => {
    let container = document.getElementById("jobs");

    const mock = [
      {
        title: "Full-Stack Python + React",
        company: "Orpheus",
        location: "España",
        modality: "Remoto",
        description: "Apoyar al CTO en los desarrollos necesarios para levantar la siguiente ronda, prevista para septiembre del 2023. Uno de los hitos del rol es el uso de sistemas de IA ofrecidos por proveedores cloud, como AWS o Google, para el sistema de control de edificios",
        salary: "$3000 - 4000 USD mensuales",
        linkToJob: "https://jobs.platzi.com/companies/orpheus",
        coincidence: "65",
        skills: [
          { name: "React", checked: true },
          { name: "Devops", checked: true },
          { name: "Docker", checked: true },
          { name: "Django", checked: false },
          { name: "English", checked: false },
        ],
        recommendations: [
          {
            badge: "https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/piezas-django-intermedio-testing-static-files-django-admin_badge-354a5d94-cd66-4a58.png",
            title: "Curso de Django Intermedio: Testing, Static Files, Django Admin",
            skill: { name: "Django", checked: false },
            link: "https://platzi.com/cursos/django-intermedio/",
          },
          {
            badge: "https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/ingles-avanzado-c1-habilidades-comunicacion-discurso-persuasivo-badge-cfd7af0d-0fe2.png",
            title: "Curso de Inglés Avanzado C1: Habilidades de Comunicación y Discurso Persuasivo",
            skill: { name: "English", checked: false },
            link: "https://platzi.com/cursos/habilidades-comunicacion/",
          }
        ],
      },
      {
        title: "Mid Python Developer",
        company: "Awana",
        location: "Mexico",
        modality: "Remoto",
        description: "Develop backend solutions in Python together with the backend team using the Scrum methodology. The developer must deliver clean code solutions following the company's guidelines.",
        salary: "$3,500 USD mensuales",
        linkToJob: "https://jobs.platzi.com/companies/awana",
        coincidence: "85",
        skills: [
          { name: "Unit testing", checked: true },
          { name: "Cloud services", checked: true },
          { name: "Scrum", checked: false },
          { name: "Django", checked: false },
          { name: "English", checked: false },
        ],
        recommendations: [
          {
            badge: "https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badges-scrum-9aaa566f-eb7c-4676-9e55-d36565ec582e.png",
            title: "Curso Profesional de Scrum",
            skill: { name: "Scrum", checked: false },
            link: "https://platzi.com/cursos/scrum/",
          },
          {
            badge: "https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/piezas-django-intermedio-testing-static-files-django-admin_badge-354a5d94-cd66-4a58.png",
            title: "Curso de Django Intermedio: Testing, Static Files, Django Admin",
            skill: { name: "Django", checked: false },
            link: "https://platzi.com/cursos/django-intermedio/",
          },
          {
            badge: "https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/ingles-avanzado-c1-habilidades-comunicacion-discurso-persuasivo-badge-cfd7af0d-0fe2.png",
            title: "Curso de Inglés Avanzado C1: Habilidades de Comunicación y Discurso Persuasivo",
            skill: { name: "English", checked: false },
            link: "https://platzi.com/cursos/habilidades-comunicacion/",
          }
        ],
      }];

    for (let index = 0; index < mock.length; index++) {
      const element = mock[index];

      let cardNode = document.createElement("div");
      let topNode = document.createElement("div");
      let downNode = document.createElement("div");
      cardNode.classList.add("card");
      topNode.classList.add("top");
      downNode.classList.add("down");

      let titleNode = document.createElement("h2");
      let title = document.createTextNode(element.title);
      titleNode.appendChild(title);

      let subtitleNode = document.createElement("p");
      let subtitle = document.createTextNode(element.company + " • " + element.location + " • " + element.modality);
      subtitleNode.appendChild(subtitle);

      let headNode = document.createElement("div");
      headNode.appendChild(titleNode);
      headNode.appendChild(subtitleNode);
      headNode.classList.add("head");

      let descriptionNode = document.createElement("p");
      let description = document.createTextNode(element.description);
      descriptionNode.appendChild(description);
      descriptionNode.classList.add("jobDescription");

      let salaryNode = document.createElement("p");
      let salary = document.createTextNode(element.salary);
      salaryNode.appendChild(salary);

      let linkNode = document.createElement("a");
      let link = document.createTextNode("Ver vacante");
      linkNode.appendChild(link);
      linkNode.href = element.linkToJob;

      let bottomNode = document.createElement("div");
      bottomNode.classList.add("bottom");
      bottomNode.appendChild(salaryNode);
      bottomNode.appendChild(linkNode);

      topNode.appendChild(headNode);
      topNode.appendChild(descriptionNode);
      topNode.appendChild(bottomNode);

      cardNode.appendChild(topNode);
      cardNode.append(downNode);

      let textNode = document.createElement("p");
      let text = document.createTextNode("Tu compatibilidad con la vacante: ");
      textNode.appendChild(text);

      let matchNode = document.createElement("p");
      let match = document.createTextNode(element.coincidence + "%");
      matchNode.appendChild(match);
      matchNode.classList.add("match");

      let matchingNode = document.createElement("div");
      matchingNode.appendChild(textNode);
      matchingNode.appendChild(matchNode);
      matchingNode.classList.add("matching");

      tags = showSkills(element.skills);

      let recommenTitleNode = document.createElement("p");
      let recommenTitle = document.createTextNode("Mejora tu perfil tomando estos cursos");
      recommenTitleNode.classList.add("recommendationsTitle");
      recommenTitleNode.appendChild(recommenTitle);

      recommendations = showRecommendations(element.recommendations);

      downNode.appendChild(matchingNode);
      downNode.appendChild(tags);
      downNode.appendChild(recommenTitleNode);
      downNode.appendChild(recommendations);

      container.appendChild(cardNode);
    }
  });

function showSkills(skills) {
  let tagsNode = document.createElement("div");
  tagsNode.classList.add("tags");

  for (let i = 0; i < skills.length; i++) {
    const element = skills[i];

    let skillNode = document.createElement("div");
    skillNode.classList.add("tag");
    let skillTextNode = document.createElement("p");
    let skillText = document.createTextNode(element.name);
    skillTextNode.appendChild(skillText);
    skillNode.appendChild(skillTextNode);

    if (element.checked) {
      skillNode.classList.add("checked");
      let check = new Image();
      check.src = "images/check.png";
      check.classList.add("badge")
      skillNode.appendChild(check);
    }

    tagsNode.appendChild(skillNode);
  }

  return tagsNode;
}

function showRecommendations(recommendations) {
  let recommendationsNode = document.createElement("div");
  recommendationsNode.classList.add("recommendations");

  for (let i = 0; i < recommendations.length; i++) {
    const element = recommendations[i];

    let recommendationNode = document.createElement("a");
    recommendationNode.href = element.link;

    let badge = new Image();
    badge.src = element.badge;
    recommendationNode.appendChild(badge);

    let recommendationTextNode = document.createElement("p");
    let recommendationText = document.createTextNode(element.title);
    recommendationTextNode.appendChild(recommendationText);
    recommendationTextNode.classList.add("courseTitle");

    let textDiv = document.createElement("div");
    textDiv.appendChild(recommendationTextNode);

    skill = showSkills([element.skill]);
    textDiv.appendChild(skill);
    textDiv.classList.add("courseText");
    recommendationNode.appendChild(textDiv);

    let arrow = new Image();
    arrow.src = "images/arrow.png";
    arrow.classList.add("arrow");
    recommendationNode.appendChild(arrow);

    recommendationsNode.appendChild(recommendationNode);
  }

  return recommendationsNode;
}