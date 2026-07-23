const copy = {
  en: {
    title: 'A metacognitive AI fabric for orchestrating capabilities, not models.',
    lead:
      'Reflection-first control plane for providers, self-hosted runtimes, personal capability silos, and transparent feedback.',
    invariantTitle: 'Architecture invariant',
    invariantText:
      'This system is a watching and reflecting tool, never a judging tool.',
    coreTitle: 'Core today',
    coreList: [
      'Capabilities first',
      'Observation over judgment',
      'Metacognitive by design',
      'Self-hosted friendly',
      'Feedback-native',
    ],
    roadmapTitle: 'Next prepared layers',
    roadmapList: [
      'Identity layer',
      'Connector registry',
      'Policy / routing layer',
      'Reflection layer',
      'Feedback layer',
    ],
    feedbackTitle: 'Feedback layer',
    feedbackCopy:
      'Lightweight reactions, anonymized trends, and direct product signals for continuous improvement.',
    commandsTitle: 'Project commands',
    commandsCopy:
      'Use SAMC to keep responses system-architectural and metacognitive. Use MFC to continue the MetaFabric build in that mode.',
  },
  de: {
    title: 'Ein metakognitives AI-Fabric-System zur Orchestrierung von Fähigkeiten, nicht nur von Modellen.',
    lead:
      'Reflektionsorientierte Control Plane für Provider, self-hosted Runtimes, persönliche Capability-Silos und transparentes Feedback.',
    invariantTitle: 'Architektur-Invariante',
    invariantText:
      'Dieses System ist ein Beobachtungs- und Reflexionswerkzeug, niemals ein Urteilswerkzeug.',
    coreTitle: 'Kern heute',
    coreList: [
      'Capabilities first',
      'Beobachtung vor Urteil',
      'Metakognitiv by design',
      'Self-hosted freundlich',
      'Feedback-native',
    ],
    roadmapTitle: 'Nächste vorbereitete Layer',
    roadmapList: [
      'Identity-Layer',
      'Connector-Registry',
      'Policy-/Routing-Layer',
      'Reflection-Layer',
      'Feedback-Layer',
    ],
    feedbackTitle: 'Feedback-Layer',
    feedbackCopy:
      'Leichte Reaktionen, anonymisierte Trends und direkte Produktsignale für kontinuierliche Verbesserung.',
    commandsTitle: 'Projektbefehle',
    commandsCopy:
      'Nutze SAMC, um Antworten systemarchitektonisch und metakognitiv zu halten. Nutze MFC, um den MetaFabric-Build in diesem Modus fortzusetzen.',
  },
};

const title = document.getElementById('title');
const lead = document.getElementById('lead');
const invariantTitle = document.getElementById('invariant-title');
const invariantText = document.getElementById('invariant-text');
const coreTitle = document.getElementById('core-title');
const roadmapTitle = document.getElementById('roadmap-title');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackCopy = document.getElementById('feedback-copy');
const commandsTitle = document.getElementById('commands-title');
const commandsCopy = document.getElementById('commands-copy');
const coreList = document.getElementById('core-list');
const roadmapList = document.getElementById('roadmap-list');
const buttons = Array.from(document.querySelectorAll('.lang-btn'));

function setLanguage(lang) {
  const data = copy[lang];
  title.textContent = data.title;
  lead.textContent = data.lead;
  invariantTitle.textContent = data.invariantTitle;
  invariantText.textContent = data.invariantText;
  coreTitle.textContent = data.coreTitle;
  roadmapTitle.textContent = data.roadmapTitle;
  feedbackTitle.textContent = data.feedbackTitle;
  feedbackCopy.textContent = data.feedbackCopy;
  commandsTitle.textContent = data.commandsTitle;
  commandsCopy.innerHTML = `${data.commandsCopy.replace(
    /SAMC/g,
    '<code>SAMC</code>'
  ).replace(/MFC/g, '<code>MFC</code>')}`;

  coreList.innerHTML = data.coreList.map((item) => `<li>${item}</li>`).join('');
  roadmapList.innerHTML = data.roadmapList.map((item) => `<li>${item}</li>`).join('');

  buttons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === lang);
  });

  document.documentElement.lang = lang === 'de' ? 'de' : 'en';
}

buttons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage('en');
