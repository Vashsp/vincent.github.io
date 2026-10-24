const lessonData = [
  {
    id: "active-passive",
    title: "Active & Passive Voice",
    grade: "Planet of Voice",
    description:
      "Learn how actions are expressed by focusing on the doer or the receiver of the action.",
    shortDescription:
      "In active voice, the subject performs the action. In passive voice, the subject receives the action.",
    exampleTitle: "Active & Passive Voice",
    exampleText:
      "Active: The boy kicks the ball. Passive: The ball is kicked by the boy.",
    structure: "Active: Subject + Verb + Object | Passive: Object + Verb + by + Subject",
    accent: "#7c8cff",
    details: [
      "In active voice, the subject performs the action.",
      "In passive voice, the subject receives the action.",
      "The object of the active sentence becomes the subject in the passive sentence.",
      "Examples: The boy kicks the ball. The ball is kicked by the boy."
    ],
    activity: "Transform the sentence: 'The teacher explains the lesson.' into passive voice.",
    didYouKnow: "Did you know? Passive voice is commonly used when the action is more important than the doer.",
    emoji: "🌙",
    planet: "Planet of Voice"
  },
  {
    id: "interjections",
    title: "Interjections",
    grade: "Planet of Emotions",
    description:
      "Discover words that express strong feelings and sudden reactions.",
    shortDescription:
      "Interjections express happiness, surprise, anger, sadness, fear, pain, and excitement.",
    exampleText:
      "Wow! Yay! We did it! Ouch! That hurts! Yikes! I'm scared! Ugh! That's so unfair!",
    structure: "Interjections are words or short expressions that show emotion.",
    accent: "#ff7a9a",
    details: [
      "Interjections can express happiness, surprise, anger, sadness, fear, pain, and excitement.",
      "They are often used to show strong feeling or a sudden reaction.",
      "Examples: Wow! Yikes! Ouch! Ugh! Yay!",
      "Interjections are often followed by an exclamation mark."
    ],
    activity: "Write an interjection for a scene where you are surprised to see a comet in the sky.",
    didYouKnow: "Did you know? Interjections often sound like a sudden burst of emotion in speech.",
    emoji: "🔴",
    planet: "Planet of Emotions"
  },
  {
    id: "synonyms-antonyms",
    title: "Synonyms & Antonyms",
    grade: "Planet of Words",
    description:
      "Explore words with similar and opposite meanings.",
    shortDescription:
      "Synonyms are words with the same or nearly the same meaning, and antonyms are words with opposite meanings.",
    exampleText:
      "Happy — Joyful; Big — Large; Beautiful — Pretty; Happy — Sad; Big — Small; Hot — Cold; Fast — Slow.",
    structure: "Synonyms: same or nearly the same meaning | Antonyms: opposite meanings",
    accent: "#5dd7d7",
    details: [
      "Synonyms are words that have the same or nearly the same meaning.",
      "Antonyms are words with opposite meanings.",
      "Examples: happy — joyful, big — large, beautiful — pretty.",
      "Opposite pairs: happy — sad, big — small, hot — cold, fast — slow."
    ],
    activity: "Find two synonyms for 'happy' and two antonyms for 'happy'.",
    didYouKnow: "Did you know? Synonyms and antonyms help writers make language more precise and expressive.",
    emoji: "🪐",
    planet: "Planet of Words"
  }
];

const videoData = [
  {
    id: "video-palmero",
    title: "Glazy E. Palmero — Multimedia",
    description: "A student video by Glazy E. Palmero.",
    videoUrl: "videos/PALMERO%20-%20%20%20%20Multimedia.mp4"
  },
  {
    id: "video-caadlawon",
    title: "Jonelyn Caadlawon — Multimedia",
    description: "A student video by Jonelyn Caadlawon.",
    videoUrl: "videos/CAADLAWON%20-%20Multimedia.mov"
  }
];

const assessmentQuestions = [
  {
    question: "Which sentence is written in active voice?",
    options: ["The ball is kicked by the boy.", "The boy kicks the ball.", "The ball was kicked.", "The boy was kicked."],
    answer: "The boy kicks the ball.",
    explanation: "In active voice, the subject performs the action."
  },
  {
    question: "Which interjection expresses surprise?",
    options: ["Wow!", "Happy!", "Slow!", "Big!"],
    answer: "Wow!",
    explanation: "Wow! expresses surprise."
  },
  {
    question: "Which pair is a synonym pair?",
    options: ["Happy — Sad", "Big — Small", "Happy — Joyful", "Hot — Cold"],
    answer: "Happy — Joyful",
    explanation: "Synonyms are words with the same or nearly the same meaning."
  },
  {
    question: "Which pair is an antonym pair?",
    options: ["Happy — Joyful", "Big — Large", "Big — Small", "Beautiful — Pretty"],
    answer: "Big — Small",
    explanation: "Antonyms are words with opposite meanings."
  }
];

const state = {
  currentQuestion: 0,
  currentAnswer: null,
  answered: false,
  score: 0,
  finished: false
};

const lessonGrid = document.getElementById("lessonGrid");
const videoGrid = document.getElementById("videoGrid");
const lessonModal = document.getElementById("lessonModal");
const lessonContent = document.getElementById("lessonContent");
const resultSection = document.getElementById("results");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const questionMeta = document.getElementById("questionMeta");
const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const resultBanner = document.getElementById("resultBanner");
const resultTitle = document.getElementById("resultTitle");
const resultExplanation = document.getElementById("resultExplanation");
const correctAnswerText = document.getElementById("correctAnswerText");
const progressBar = document.getElementById("assessmentProgressBar");
const warningBox = document.getElementById("warningBox");
const assessmentSection = document.getElementById("assessment");
const assessmentIntro = document.getElementById("assessmentIntro");
const assessmentWrapper = document.getElementById("assessmentWrapper");

const renderLessons = () => {
  lessonGrid.innerHTML = lessonData
    .map(
      (lesson) => `
      <article class="lesson-card">
        <div class="card-top">
          <div class="planet-badge">${lesson.emoji}</div>
          <span class="planet-badge-subtle">${lesson.grade}</span>
        </div>
        <div class="learn-copy">
          <h3>${lesson.title}</h3>
          <p>${lesson.description}</p>
          <div class="lesson-example">
            <strong>Active:</strong> ${lesson.exampleText}
          </div>
          <div class="lesson-structures">
            ${lesson.structure}
          </div>
        </div>
        <button class="explore-btn" type="button" data-lesson-id="${lesson.id}">
          EXPLORE LESSON →
        </button>
      </article>
    `
    )
    .join("");
};

const renderVideos = () => {
  videoGrid.innerHTML = videoData
    .map(
      (video) => `
      <article class="card video-card">
        <div class="video-thumb">
          <button class="play-btn" type="button" data-video-id="${video.id}" aria-label="Play video">
            ▶
          </button>
        </div>
        <div class="video-meta">
          <h3>${video.title}</h3>
          <p>${video.description}</p>
        </div>
        <div class="play-button-row">
          <button class="play-btn secondary" type="button" data-video-id="${video.id}">PLAY VIDEO</button>
        </div>
      </article>
    `
    )
    .join("");
};

const renderAssessment = () => {
  const currentQuestion = assessmentQuestions[state.currentQuestion];
  const options = currentQuestion.options;
  const answerText = currentQuestion.answer;

  answerList.innerHTML = options
    .map((option) => {
      const selected = option === state.currentAnswer;
      return `
        <button
          type="button"
          class="answer-option ${selected ? "selected" : ""}"
          data-answer="${option}"
          aria-label="${option}"
          ${state.answered ? "disabled" : ""}
        >
          ${option}
        </button>
      `;
    })
    .join("");

  questionMeta.textContent = `QUESTION ${String(state.currentQuestion + 1).padStart(2, "0")} / ${assessmentQuestions.length}`;
  questionText.textContent = currentQuestion.question;
  progressBar.style.width = `${((state.currentQuestion + 1) / assessmentQuestions.length) * 100}%`;

  nextQuestionBtn.textContent =
    state.currentQuestion === assessmentQuestions.length - 1 ? "SUBMIT ASSESSMENT" : "NEXT QUESTION →";
};

const checkAnswer = (event) => {
  const selectedAnswer = event.target.closest(".answer-option");
  if (!selectedAnswer) return;

  if (state.answered) return;

  state.currentAnswer = selectedAnswer.dataset.answer;
  state.answered = true;
  selectedAnswer.classList.add("selected");
  answerList.querySelectorAll(".answer-option").forEach((option) => {
    option.disabled = true;
  });

  const question = assessmentQuestions[state.currentQuestion];
  const correct = selectedAnswer.dataset.answer === question.answer;

  resultBanner.textContent = correct ? "CORRECT!" : "INCORRECT!";
  resultBanner.classList.toggle("correct", correct);
  resultBanner.classList.toggle("incorrect", !correct);

  resultTitle.textContent = correct ? `${question.answer}` : `The correct answer is: ${question.answer}`;
  resultExplanation.textContent = question.explanation;

  correctAnswerText.textContent = `Correct answer: ${question.answer}`;

  warningBox.textContent = "Answer locked. You may not change it.";
  warningBox.style.color = "#ffd166";

  const flashcard = document.getElementById("flashcard");
  const flashcardInner = flashcard.querySelector(".flashcard-inner");
  flashcardInner.classList.add("is-flipped");

  nextQuestionBtn.disabled = false;

  state.score += correct ? 1 : 0;
};

const nextQuestion = () => {
  if (!state.answered) {
    warningBox.textContent = "Please select an answer before continuing.";
    warningBox.style.color = "#ff6d7c";
    return;
  }

  if (state.currentQuestion < assessmentQuestions.length - 1) {
    state.currentQuestion += 1;
    state.answered = false;
    state.currentAnswer = null;
    warningBox.textContent = "Please select an answer before continuing.";
    warningBox.style.color = "#ffffff";
    document.getElementById("flashcard").querySelector(".flashcard-inner").classList.remove("is-flipped");
    renderAssessment();
    document.getElementById("flashcard").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const total = assessmentQuestions.length;
  const correct = state.score;
  const wrong = total - correct;
  const percentage = Math.round((correct / total) * 100);

  assessmentSection.hidden = true;
  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });

  const resultPercentage = document.getElementById("resultPercentage");
  const finalScoreText = document.getElementById("finalScoreText");
  const correctCountText = document.getElementById("correctCountText");
  const incorrectCountText = document.getElementById("incorrectCountText");
  const performanceLevel = document.getElementById("performanceLevel");
  const performanceTitle = document.getElementById("performanceTitle");
  const performanceMessage = document.getElementById("performanceMessage");
  const questionBreakdown = document.getElementById("questionBreakdown");

  resultPercentage.textContent = `${percentage}%`;
  finalScoreText.textContent = `${correct} / ${total}`;
  correctCountText.textContent = correct;
  incorrectCountText.textContent = wrong;
  performanceLevel.textContent =
    percentage >= 80 ? "Outstanding" : percentage >= 60 ? "Solid" : "Needs Practice";
  performanceTitle.textContent =
    percentage >= 80
      ? "Excellent work! You have mastered the concept."
      : percentage >= 60
      ? "Excellent effort! You have built strong understanding."
      : "You are making steady progress. Keep learning!";
  performanceMessage.textContent =
    percentage >= 80
      ? "Excellent work! You have mastered the concept."
      : percentage >= 60
      ? "Excellent effort! You have built strong understanding."
      : "You are making steady progress. Keep learning!";

  questionBreakdown.replaceChildren();
  assessmentQuestions.forEach((question, index) => {
    const li = document.createElement("li");
    li.textContent = `Question ${index + 1}: ${question.question}`;
    questionBreakdown.append(li);
  });

  nextQuestionBtn.disabled = true;
  nextQuestionBtn.textContent = "SUBMITTED";
};

const openLessonModal = (event) => {
  const lessonId = event.target.closest("[data-lesson-id]").dataset.lessonId;
  const lesson = lessonData.find((item) => item.id === lessonId);
  if (!lesson) return;

  lessonModal.classList.add("is-open");
  lessonModal.setAttribute("aria-hidden", "false");
  lessonContent.innerHTML = `
    <div class="lesson-content-wrap">
      <div class="lesson-header">
        <div class="planet-emoji">${lesson.emoji}</div>
        <h2 id="lessonModalTitle">${lesson.title}</h2>
      </div>
      <div class="lesson-body">
        <div class="panel-box">
          <h3>Definition</h3>
          <p>${lesson.shortDescription}</p>
          <div class="lesson-example">
            <strong>Active:</strong> ${lesson.exampleText}
          </div>
          <div class="lesson-structures">
            ${lesson.structure}
          </div>
        </div>
        <div class="panel-box">
          <h3>Examples</h3>
          <ul>
            ${lesson.details.map((detail) => `<li>${detail}</li>`).join("")}
          </ul>
          <div class="mini-activity">
            ${lesson.activity}
          </div>
          <div class="did-you-know">
            ${lesson.didYouKnow}
          </div>
        </div>
      </div>
    </div>
  `;
  lessonModal.scrollTop = 0;
};

const openVideoModal = (event) => {
  const videoId = event.target.closest("[data-video-id]").dataset.videoId;
  const video = videoData.find((item) => item.id === videoId);
  if (!video) return;

  const videoModal = document.getElementById("videoModal");
  const titleEl = document.getElementById("videoModalTitle");
  const descEl = document.getElementById("videoModalDescription");
  const player = document.getElementById("videoPlayer");
  const videoUrl = new URL(video.videoUrl, document.baseURI).href;

  videoModal.classList.add("is-open");
  titleEl.textContent = video.title;
  descEl.textContent = video.description;
  player.onerror = () => {
    if (!videoModal.classList.contains("is-open") || player.currentSrc !== videoUrl) return;

    descEl.textContent = "This browser could not play the video. Open or download the original file: ";
    const link = document.createElement("a");
    link.href = videoUrl;
    link.textContent = videoUrl.split("/").pop();
    link.download = "";
    descEl.append(link);
  };
  player.src = videoUrl;
  player.load();
  videoModal.setAttribute("aria-hidden", "false");
  player.play().catch(() => {
    if (videoModal.classList.contains("is-open") && !player.error) {
      descEl.textContent = `${video.description} Use the video controls to start playback.`;
    }
  });
};

const closeModal = (event) => {
  const modal = event.target.closest(".modal-overlay");
  if (modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (modal.id === "videoModal") {
      const player = document.getElementById("videoPlayer");
      player.pause();
      player.removeAttribute("src");
      player.load();
    }
  }
};

const startAssessment = () => {
  state.currentQuestion = 0;
  state.currentAnswer = null;
  state.answered = false;
  state.score = 0;
  state.finished = false;
  assessmentIntro.hidden = true;
  assessmentWrapper.hidden = false;
  assessmentSection.hidden = false;
  resultSection.hidden = true;
  document.body.classList.add("assessment-mode");
  document.getElementById("flashcard").querySelector(".flashcard-inner").classList.remove("is-flipped");
  renderAssessment();
  window.scrollTo(0, 0);
};

const returnToHome = () => {
  document.body.classList.remove("assessment-mode");
  resultSection.hidden = true;
  assessmentSection.hidden = false;
  assessmentWrapper.hidden = true;
  assessmentIntro.hidden = false;
  document.getElementById("flashcard").querySelector(".flashcard-inner").classList.remove("is-flipped");
  window.location.hash = "home";
};

document.addEventListener("click", (event) => {
  if (event.target.closest(".explore-btn")) {
    openLessonModal(event);
  }

  if (event.target.closest(".play-btn")) {
    openVideoModal(event);
  }

  if (event.target.closest(".answer-option")) {
    checkAnswer(event);
  }

  if (event.target.closest(".close-modal")) {
    closeModal(event);
  }

  if (event.target.closest(".modal-overlay") && event.target.classList.contains("modal-overlay")) {
    closeModal(event);
  }

  if (event.target.closest("#startAssessmentBtn")) {
    startAssessment();
  }

  if (event.target.closest("#dashboardReturnBtn")) {
    returnToHome();
  }

  if (event.target.closest("#viewResultsBtn")) {
    document.getElementById("questionBreakdown").scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (event.target.closest("#nextQuestionBtn")) {
    nextQuestion();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const openModal = document.querySelector(".modal-overlay.is-open");
    if (openModal) {
      closeModal({ target: openModal });
    }
  }
});

const navLinks = [...document.querySelectorAll(".nav-link")];
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
let navUpdateScheduled = false;

const updateActiveNavigation = () => {
  navUpdateScheduled = false;
  if (document.body.classList.contains("assessment-mode")) return;
  document.body.classList.toggle("profile-mode", window.location.hash === "#profile");

  const headerOffset = document.querySelector(".topbar").getBoundingClientRect().bottom + 32;
  let activeSection = navSections[0];
  navSections.forEach((section) => {
    if (section.getClientRects().length === 0) return;
    const bounds = section.getBoundingClientRect();
    if (bounds.top <= headerOffset) {
      activeSection = section;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeSection.id}`;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const scheduleNavigationUpdate = () => {
  if (navUpdateScheduled) return;
  navUpdateScheduled = true;
  window.requestAnimationFrame(updateActiveNavigation);
};

window.addEventListener("scroll", scheduleNavigationUpdate, { passive: true });
window.addEventListener("resize", scheduleNavigationUpdate);
window.addEventListener("hashchange", () => {
  document.body.classList.toggle("profile-mode", window.location.hash === "#profile");
  scheduleNavigationUpdate();
});
document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (link) {
    document.body.classList.toggle("profile-mode", link.getAttribute("href") === "#profile");
  }
});
document.querySelector(".nav").addEventListener("click", (event) => {
  const link = event.target.closest(".nav-link");
  if (!link) return;
  document.body.classList.toggle("profile-mode", link.getAttribute("href") === "#profile");
  navLinks.forEach((navLink) => navLink.classList.toggle("active", navLink === link));
});

const render = () => {
  renderLessons();
  renderVideos();
  renderAssessment();
  updateActiveNavigation();
};

render();