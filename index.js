fetch('https://pokeapi.co/api/v2/pokemon-species/')
  .then(response => response.json())
  .then(data => {
    let container = document.getElementById("jobs");
    for (let index = 0; index < data.results.length; index++) {
      const element = {
        title: "UI Engineer",
        company: "Slack",
        location: "Bogotá",
        modality: "Remoto",
        description: "This Front End Developer will manage local standalone applications for market initiatives which will in turn improve performance of the Nespresso US eCommerce responsive site",
        salary: "$1k - $5k USD mensuales",
        linkToJob: "#",
        coincidence: "95",
        skills: [
          { name: "React", checked: true },
          { name: "HTML", checked: true },
          { name: "CSS", checked: true },
          { name: "Ingles", checked: false },
        ],
        recommendations: [
          {
            badge: "https://static.platzi.com/media/achievements/badge-mongo-db-5f684168-798f-42ad-a17c-2e8f0c40a477.png",
            title: "Curso de inglés laboral",
            skill: { name: "Ingles", checked: false },
            link: "www.google.com",
          },
          {
            badge: "https://static.platzi.com/media/achievements/badge-mongo-db-5f684168-798f-42ad-a17c-2e8f0c40a477.png",
            title: "Curso de inglés laboral",
            skill: { name: "Ingles", checked: false },
            link: "www.google.com",
          }
        ],
      };

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
      let text = document.createTextNode("Tu coincidencia con el trabajo: ");
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

    if(element.checked) {
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