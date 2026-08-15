function updateClock() {
  const now = new Date();

  document.getElementById("hours").textContent = String(
    now.getHours()
  ).padStart(2, "0");

  document.getElementById("minutes").textContent = String(
    now.getMinutes()
  ).padStart(2, "0");

  document.getElementById("seconds").textContent = String(
    now.getSeconds()
  ).padStart(2, "0");

  document.getElementById("date").textContent =
    now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
}

setInterval(updateClock, 1000);
updateClock();


async function fetchTemp() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=29.3956&longitude=71.6833&current_weather=true"
    );

    const data = await res.json();

    document.getElementById(
      "tempVal"
    ).textContent = `${data.current_weather.temperature}°C`;
  } catch {
    document.getElementById("tempVal").textContent = "30°C";
  }
}

fetchTemp();


document.getElementById("todoBtn").onclick = () =>
  window.open("https://todoist.com/", "_blank");

document.getElementById("googleBtn").onclick = () =>
  window.open("https://www.google.com/maps", "_blank");

document.getElementById("aiBtn").onclick = () =>
  window.open("https://chat.openai.com/", "_blank");

document.getElementById("bookmarkBtn").onclick = () =>
  alert("Your bookmarks popup!");


document.getElementById("liveChat").onclick = () =>
  window.open(
    "https://salmanadeeb.wixsite.com/livechat",
    "_blank"
  );

document.getElementById("announcement").onclick = () =>
  window.open(
    "https://www.iub.edu.pk/news-update",
    "_blank"
  );

document.getElementById("contact").onclick = () =>
  window.open(
    "https://www.iub.edu.pk/contact",
    "_blank"
  );


document.getElementById("eportalBtn").onclick = () =>
  window.open(
    "https://eportal.iub.edu.pk/login",
    "_blank"
  );

document.getElementById("myiubBtn").onclick = () =>
  window.open(
    "https://my.iub.edu.pk/index.php/login",
    "_blank"
  );

document.getElementById("lmsBtn").onclick = () =>
  window.open(
    "https://lms.iub.edu.pk/login/index.php",
    "_blank"
  );


const recognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

if (recognition) {
  const recog = new recognition();

  document.getElementById("voiceBtn").onclick = () =>
    recog.start();

  recog.onresult = (e) => {
    document.getElementById("searchInput").value =
      e.results[0][0].transcript;
  };
}


function runSearch() {
  const q = document
    .getElementById("searchInput")
    .value.trim();

  if (q) {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(q)}`,
      "_blank"
    );
  }
}

document.getElementById("searchBtn").onclick = runSearch;

document
  .getElementById("searchInput")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      runSearch();
    }
  });


const slides = [
  {
    src: "assets/fee_structure_ads.jpg",
    link: "https://www.iub.edu.pk/fee-structure",
  },

  {
    src: "assets/admission_last_date_ads.jpg",
    link: "https://www.iub.edu.pk/admissions",
  },

  {
    src: "assets/merit_list_ads.jpg",
    link: "https://eportal.iub.edu.pk/meritlists/index.php?p=",
  },

  {
    src: "assets/transport_schedule_ads.jpg",
    link: "https://drive.google.com/file/d/1Cte7DZAqOdvqTKsnzE8nQJPbgL2jFs3r/view?usp=sharing",
  },
];


let current = 0;

const slideImg =
  document.getElementById("slide");


function showSlide() {
  slideImg.src = slides[current].src;
}


slideImg.onclick = () =>
  window.open(
    slides[current].link,
    "_blank"
  );


document.getElementById("prev").onclick = () => {
  current =
    (current - 1 + slides.length) %
    slides.length;

  showSlide();
};


document.getElementById("next").onclick = () => {
  current =
    (current + 1) %
    slides.length;

  showSlide();
};


// Keyboard support for help cards

[
  "liveChat",
  "announcement",
  "contact"
].forEach((id) => {

  const card =
    document.getElementById(id);

  card.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        card.click();
      }

    }
  );

});
