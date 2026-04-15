const activities = [
  {
    name: "Robotics Club",
    description: "Design, build, and program robots for competitions and in-school demonstrations.",
    status: "Open",
  },
  {
    name: "Drama Society",
    description: "Create stage productions, build sets, and perform for the school community.",
    status: "Auditions open",
  },
  {
    name: "Eco Action Team",
    description: "Lead campus sustainability projects, recycling efforts, and eco-awareness events.",
    status: "Join now",
  },
  {
    name: "Coding Circle",
    description: "Learn programming together, build web apps, and prepare for hackathons.",
    status: "New members welcome",
  },
];

const activityGrid = document.getElementById("activityGrid");
const registrationForm = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

function renderActivities() {
  if (!activityGrid) return;

  activityGrid.innerHTML = activities
    .map(
      (activity, index) => `
      <article class="activity-card" style="--delay: ${index * 0.1}s;">
        <h3>${activity.name}</h3>
        <p>${activity.description}</p>
        <span>${activity.status}</span>
      </article>
    `
    )
    .join("");
}

function handleRegistration(event) {
  event.preventDefault();
  if (!registrationForm || !formMessage) return;

  const formData = new FormData(registrationForm);
  const name = formData.get("name") || "Student";
  const interest = formData.get("interest") || "activities";

  formMessage.textContent = `Thanks, ${name}! We received your interest in ${interest}.`; 
  registrationForm.reset();
}

renderActivities();
registrationForm?.addEventListener("submit", handleRegistration);
