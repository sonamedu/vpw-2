// ─── DEMO ACCOUNTS ───────────────────────────────────────────────────────────
const DEMO_ACCOUNTS = {
  voter1:  { pass:'pass123',  role:'voter',       label:'Voter',                    icon:'🗳️', intro:'You are Voter #1 from Constituency 42. Your choices shape who governs India.' },
  voter2:  { pass:'pass123',  role:'voter',       label:'Voter',                    icon:'🗳️', intro:'You are Voter #2 — a first-time voter in this General Election. Choose wisely.' },
  voter3:  { pass:'pass123',  role:'voter',       label:'Voter',                    icon:'🗳️', intro:'You are Voter #3. An experienced voter who has seen 4 elections. Stay vigilant.' },
  voter4:  { pass:'pass123',  role:'voter',       label:'Voter',                    icon:'🗳️', intro:'You are Voter #4 — a rural voter navigating misinformation and distance barriers.' },
  voter5:  { pass:'pass123',  role:'voter',       label:'Voter',                    icon:'🗳️', intro:'You are Voter #5 — an urban professional tracking candidate promises carefully.' },
  cand1:   { pass:'pass123',  role:'candidate',   label:'Candidate',                icon:'🎤', intro:'You are Candidate from Party A. Campaign under the MCC and win hearts ethically.' },
  cand2:   { pass:'pass123',  role:'candidate',   label:'Candidate',                icon:'🎤', intro:'You are an independent Candidate with strong local support. Integrity first.' },
  cand3:   { pass:'pass123',  role:'candidate',   label:'Candidate',                icon:'🎤', intro:'You are a regional party Candidate navigating coalition pressures and MCC rules.' },
  cand4:   { pass:'pass123',  role:'candidate',   label:'Candidate',                icon:'🎤', intro:'You are a first-time Candidate. Temptations and ethical dilemmas await you.' },
  media1:  { pass:'pass123',  role:'media',       label:'Journalist',               icon:'📺', intro:'You are a national TV journalist. Accuracy vs. breaking news — you decide.' },
  media2:  { pass:'pass123',  role:'media',       label:'Editor',                   icon:'📺', intro:'You are a digital news editor. Viral content vs. verified truth — your call.' },
  media3:  { pass:'pass123',  role:'media',       label:'Reporter',                 icon:'📺', intro:'You are a regional language reporter covering polling-day ground realities.' },
  media4:  { pass:'pass123',  role:'media',       label:'Influencer',               icon:'📺', intro:'You are a social media influencer with 2M followers during election week.' },
  judge1:  { pass:'pass123',  role:'judiciary',   label:'High Court Judge',         icon:'⚖️', intro:'You are a High Court judge. Electoral petitions land on your desk — act fast, act fair.' },
  judge2:  { pass:'pass123',  role:'judiciary',   label:'Magistrate',               icon:'⚖️', intro:'You are a District magistrate with jurisdiction over election offenses.' },
  judge3:  { pass:'pass123',  role:'judiciary',   label:'Election Bench Judge',     icon:'⚖️', intro:'You sit on a special Election Bench. Constitutional rights hang on your rulings.' },
  judge4:  { pass:'pass123',  role:'judiciary',   label:'Returning Officer',        icon:'⚖️', intro:'You are a Returning Officer cum magistrate. Booth disputes require swift judgment.' },
  police1: { pass:'pass123',  role:'enforcement', label:'Police SHO',               icon:'🚔', intro:'You are SHO of a sensitive constituency. Maintain order, prevent intimidation.' },
  police2: { pass:'pass123',  role:'enforcement', label:'Flying Squad Commander',   icon:'🚔', intro:'You command the flying squad. Cash seizures and MCC violations are your domain.' },
  police3: { pass:'pass123',  role:'enforcement', label:'Booth Officer',            icon:'🚔', intro:'You are deployed at Booth 47 — historically the most disputed polling station.' },
  police4: { pass:'pass123',  role:'enforcement', label:'Control Room Head',        icon:'🚔', intro:'You lead the election control room. Coordinate all units across the district.' },
  force1:  { pass:'pass123',  role:'enforcement', label:'CRPF Commander',           icon:'🪖', intro:'You lead a CRPF platoon securing 12 hyper-sensitive booths. No compromise.' },
  force2:  { pass:'pass123',  role:'enforcement', label:'BSF Commander',            icon:'🪖', intro:'You command BSF deployment at a border constituency with booth capturing history.' },
  force3:  { pass:'pass123',  role:'enforcement', label:'QRT Leader',               icon:'🪖', intro:'You are part of the Quick Reaction Team — ready to deploy within 10 minutes.' },
  force4:  { pass:'pass123',  role:'enforcement', label:'Joint Force Coordinator',  icon:'🪖', intro:'You coordinate central forces with state police. Inter-agency tensions are real.' },
  blo1:    { pass:'pass123',  role:'officer',     label:'Booth Level Officer',      icon:'🏛️', intro:'You are BLO managing voter rolls for 1,200 voters. Errors have real consequences.' },
  blo2:    { pass:'pass123',  role:'officer',     label:'Booth Level Officer',      icon:'🏛️', intro:'You are BLO in a newly formed constituency with disputed voter list data.' },
  deo1:    { pass:'pass123',  role:'officer',     label:'District Election Officer', icon:'🏛️', intro:'You are DEO overseeing 340 polling stations. Coordination is your superpower.' },
  deo2:    { pass:'pass123',  role:'officer',     label:'District Election Officer', icon:'🏛️', intro:'You are DEO in a district with 3 pending MCC complaints and heavy media scrutiny.' },
  ceo1:    { pass:'pass123',  role:'officer',     label:'Chief Electoral Officer',  icon:'🏛️', intro:'You are CEO of the state. Escalations, political pressure, and media all await.' },
  ceo2:    { pass:'pass123',  role:'officer',     label:'Chief Electoral Officer',  icon:'🏛️', intro:'You oversee a state with 120M voters. Every decision is under national scrutiny.' },
  cec1:    { pass:'admin123', role:'officer',     label:'Chief Election Commissioner', icon:'👑', intro:'You are the CEC — the highest election authority in India. Every call is final.' },
  explorer:{ pass:'demo',     role:'voter',       label:'Explorer',                 icon:'🔭', intro:'Explorer Mode: experience all roles freely. Your decisions still shape democracy.' }
};

// ─── LOGIN ────────────────────────────────────────────────────────────────────
function initLogin() {
  const btnLogin  = document.getElementById('btn-login');
  const userInput = document.getElementById('login-user');
  const passInput = document.getElementById('login-pass');
  const errEl     = document.getElementById('login-error');
  const toggle    = document.getElementById('creds-toggle');
  const credsBody = document.getElementById('creds-body');

  toggle.addEventListener('click', () => {
    const open = credsBody.classList.toggle('open');
    toggle.textContent = open ? '📋 Hide Demo Credentials ▴' : '📋 Show Demo Credentials ▾';
  });

  // Click a username in the list to auto-fill
  credsBody.addEventListener('click', e => {
    const list = e.target.closest('.creds-list');
    if (!list) return;
    const raw  = list.textContent.split('/')[0];
    const name = raw.split('·')[0].trim().split(' ')[0].trim();
    const acct = DEMO_ACCOUNTS[name];
    if (acct) { userInput.value = name; passInput.value = acct.pass; }
    userInput.focus();
  });

  function doLogin() {
    const user = userInput.value.trim().toLowerCase();
    const pass = passInput.value.trim();
    const acct = DEMO_ACCOUNTS[user];
    if (!acct) { errEl.textContent = '⛔ Username not found. Check the credentials list below.'; return; }
    if (acct.pass !== pass) { errEl.textContent = '⛔ Incorrect password. Try again.'; return; }
    errEl.textContent = '';
    state.currentUser    = user;
    state.currentAccount = acct;
    const matchedRole = ROLES.find(r => r.id === acct.role) || ROLES[0];
    showToast(`👋 Welcome, ${user}! Loading ${acct.label} role...`);
    setTimeout(() => selectRole(matchedRole, acct.intro), 800);
  }

  btnLogin.addEventListener('click', doLogin);
  passInput.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
  userInput.addEventListener('keydown', e => { if (e.key === 'Enter') passInput.focus(); });
}

function initLogout() {
  document.getElementById('btn-logout').addEventListener('click', () => {
    state.currentUser    = null;
    state.currentAccount = null;
    document.getElementById('login-user').value = '';
    document.getElementById('login-pass').value = '';
    document.getElementById('login-error').textContent = '';
    showScreen('login');
    showToast('🔒 Logged out successfully.');
  });
}

// ─── STATE ───────────────────────────────────────────────────────────────────
const state = {
  role: null,
  scenarioIndex: 0,
  xp: 0,
  badges: [],
  metrics: { fairness: 70, trust: 65, order: 75, turnout: 60, misinformation: 30 },
  feedEvents: [],
  decisions: [],
  currentUser: null,
  currentAccount: null,
  leaderboard: [
    { name: "Priya S.", role: "⚖️", xp: 420 },
    { name: "Arjun M.", role: "🏛️", xp: 385 },
    { name: "Sneha K.", role: "📺", xp: 340 },
    { name: "Vikram R.", role: "🚔", xp: 295 },
    { name: "Meera T.", role: "🗳️", xp: 260 }
  ]
};

// ─── FEED EVENTS ─────────────────────────────────────────────────────────────
const FEED_EVENTS = [
  "📡 ECI activates 24×7 control room for election monitoring",
  "🚁 Air surveillance deployed in 47 sensitive constituencies",
  "📱 C-Vigil app receives 2,340 complaints in last 6 hours",
  "🗳️ Voter turnout at 2PM: 48.3% — above historical average",
  "📰 Press Council issues advisory on exit poll reporting",
  "🚔 Flying squads intercept ₹2.3 crore in undisclosed cash",
  "⚖️ High Court stays result in Constituency 114 pending inquiry",
  "🎤 Star campaigner barred from constituency for MCC violation",
  "📊 EVM mock polls complete in all 543 constituencies",
  "🌐 Social media platforms alerted on 180 flagged posts",
  "🏛️ General Observer deployed to 12 hyper-sensitive booths",
  "🔍 Income Tax dept conducts survey on 3 suspicious locations",
  "📢 Polling officials briefed on VVPAT verification procedure",
  "🛡️ Micro-observers report smooth proceedings at sensitive booths"
];

// ─── CANVAS PARTICLES ────────────────────────────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.6 ? '#FF6B00' : Math.random() > 0.5 ? '#138808' : '#A0A8CC'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

// ─── SCREEN NAVIGATION ───────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

// ─── LANDING ─────────────────────────────────────────────────────────────────
function initLanding() {
  document.getElementById('btn-enter').addEventListener('click', () => showScreen('roles'));
}

// ─── ROLE SELECTION ───────────────────────────────────────────────────────────
function initRoles() {
  const grid = document.getElementById('roles-grid');
  grid.innerHTML = '';
  ROLES.forEach(role => {
    const count = (SCENARIOS[role.id] || []).length;
    const diff = role.id === 'officer' ? 'Expert' : role.id === 'judiciary' ? 'Hard' : 'Medium';
    const card = document.createElement('div');
    card.className = 'role-card';
    card.style.setProperty('--role-color', role.color);
    card.innerHTML = `
      <span class="role-icon">${role.icon}</span>
      <div class="role-name">${role.label}</div>
      <div class="role-desc">${role.desc}</div>
      <div class="role-meta">
        <span class="role-difficulty">Difficulty: ${diff}</span>
        <span class="role-scenarios">${count} Scenarios</span>
      </div>`;
    card.addEventListener('click', () => selectRole(role));
    grid.appendChild(card);
  });
}

function selectRole(role, customIntro) {
  state.role = role;
  state.scenarioIndex = 0;
  state.xp = 0;
  state.badges = [];
  state.decisions = [];
  state.metrics = { fairness: 70, trust: 65, order: 75, turnout: 60, misinformation: 30 };
  state.feedEvents = [];
  showIntroModal(role, customIntro);
}

// ─── INTRO MODAL ──────────────────────────────────────────────────────────────
function showIntroModal(role, customIntro) {
  const modal = document.getElementById('intro-modal');
  document.getElementById('intro-icon').textContent = role.icon;
  document.getElementById('intro-title').textContent = `You are the ${role.label}`;
  document.getElementById('intro-desc').textContent = customIntro || (role.desc + ' Your decisions will shape the health of democracy. Choose wisely.');
  modal.classList.add('active');
  document.getElementById('intro-start').onclick = () => {
    modal.classList.remove('active');
    initDashboard();
  };
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function initDashboard() {
  showScreen('dashboard');
  document.getElementById('topbar-role').textContent = `${state.role.icon} ${state.role.label}`;
  updateMetrics();
  updateXP();
  startFeed();
  renderLeaderboard();
  loadScenario();
}

function updateMetrics() {
  const m = state.metrics;
  setMetric('fairness', m.fairness);
  setMetric('trust', m.trust);
  setMetric('order', m.order);
  setMetric('turnout', m.turnout);
  setMetric('misinfo', m.misinformation, true);
}

function setMetric(id, val, inverted = false) {
  const clamped = Math.max(0, Math.min(100, val));
  const fill = document.getElementById('metric-' + id + '-fill');
  const valueEl = document.getElementById('metric-' + id + '-val');
  if (fill) fill.style.width = clamped + '%';
  if (valueEl) {
    valueEl.textContent = clamped + '%';
    const color = inverted
      ? (clamped > 60 ? '#F87171' : clamped > 35 ? '#FBBF24' : '#34D399')
      : (clamped > 60 ? '#34D399' : clamped > 35 ? '#FBBF24' : '#F87171');
    valueEl.style.color = color;
  }
}

function updateXP() {
  document.getElementById('xp-count').textContent = state.xp + ' XP';
}

// ─── FEED ─────────────────────────────────────────────────────────────────────
function startFeed() {
  addFeedItem(FEED_EVENTS[Math.floor(Math.random() * FEED_EVENTS.length)]);
  setInterval(() => {
    if (document.getElementById('screen-dashboard').classList.contains('active')) {
      const evt = FEED_EVENTS[Math.floor(Math.random() * FEED_EVENTS.length)];
      addFeedItem(evt);
    }
  }, 8000);
}

function addFeedItem(text) {
  const list = document.getElementById('feed-list');
  const now = new Date();
  const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const item = document.createElement('div');
  item.className = 'feed-item';
  item.innerHTML = `<div class="feed-time">${time}</div><div>${text}</div>`;
  list.insertBefore(item, list.firstChild);
  if (list.children.length > 6) list.removeChild(list.lastChild);
}

// ─── LEADERBOARD ──────────────────────────────────────────────────────────────
function renderLeaderboard() {
  const lb = [...state.leaderboard, { name: 'You', role: state.role.icon, xp: state.xp }]
    .sort((a, b) => b.xp - a.xp).slice(0, 6);
  const list = document.getElementById('lb-list');
  list.innerHTML = '';
  const rankClasses = ['gold', 'silver', 'bronze'];
  const medals = ['🥇', '🥈', '🥉'];
  lb.forEach((entry, i) => {
    const isYou = entry.name === 'You';
    const item = document.createElement('div');
    item.className = 'lb-item' + (isYou ? ' you-row' : '');
    item.style.borderColor = isYou ? 'rgba(255,107,0,0.4)' : '';
    item.innerHTML = `
      <span class="lb-rank ${rankClasses[i] || ''}">${medals[i] || (i + 1)}</span>
      <span class="lb-name">${entry.role} ${entry.name}${isYou ? ' ← You' : ''}</span>
      <span class="lb-xp">${entry.xp}</span>`;
    list.appendChild(item);
  });
}

// ─── SCENARIO ─────────────────────────────────────────────────────────────────
function loadScenario() {
  const scenarios = SCENARIOS[state.role.id] || [];
  if (state.scenarioIndex >= scenarios.length) { showResults(); return; }

  const sc = scenarios[state.scenarioIndex];
  const total = scenarios.length;

  document.getElementById('scenario-emoji').textContent = sc.image;
  document.getElementById('scenario-number').textContent = `Scenario ${state.scenarioIndex + 1} of ${total}`;
  document.getElementById('scenario-title').textContent = sc.title;
  document.getElementById('scenario-desc').textContent = sc.description;
  document.getElementById('progress-fill').style.width = (state.scenarioIndex / total * 100) + '%';
  document.getElementById('progress-label').textContent = `${state.scenarioIndex}/${total} complete`;

  const choicesGrid = document.getElementById('choices-grid');
  choicesGrid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  sc.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="choice-letter">${letters[i]}</span><span>${choice.text}</span>`;
    btn.addEventListener('click', () => makeDecision(sc, choice, btn));
    choicesGrid.appendChild(btn);
  });
}

// ─── DECISION ─────────────────────────────────────────────────────────────────
function makeDecision(scenario, choice, clickedBtn) {
  // Disable all choices
  document.querySelectorAll('.choice-btn').forEach(b => {
    b.disabled = true;
    b.classList.add('incorrect');
  });
  clickedBtn.classList.remove('incorrect');
  clickedBtn.classList.add('selected');

  // Apply impacts
  const m = state.metrics;
  const imp = choice.impacts;
  if (imp.fairness) m.fairness = Math.max(0, Math.min(100, m.fairness + imp.fairness));
  if (imp.trust) m.trust = Math.max(0, Math.min(100, m.trust + imp.trust));
  if (imp.order) m.order = Math.max(0, Math.min(100, m.order + imp.order));
  if (imp.turnout) m.turnout = Math.max(0, Math.min(100, m.turnout + imp.turnout));
  if (imp.misinformation) m.misinformation = Math.max(0, Math.min(100, m.misinformation + imp.misinformation));

  state.xp += choice.xp;
  state.decisions.push({ scenario, choice });
  if (choice.badge && !state.badges.includes(choice.badge)) state.badges.push(choice.badge);

  updateMetrics();
  updateXP();
  renderLeaderboard();
  addFeedItem(`🔔 Decision logged: "${scenario.title}" — impact recorded by ECI system`);
  showFeedback(choice);
}

// ─── FEEDBACK ─────────────────────────────────────────────────────────────────
function showFeedback(choice) {
  const overlay = document.getElementById('feedback-overlay');
  const isGood = choice.xp >= 25;
  const isNeutral = choice.xp >= 10 && choice.xp < 25;

  document.getElementById('fb-icon').textContent = isGood ? '✅' : isNeutral ? '⚠️' : '❌';
  document.getElementById('fb-verdict').textContent = isGood ? 'Excellent Decision!' : isNeutral ? 'Acceptable Choice' : 'Poor Decision';
  document.getElementById('fb-verdict').style.color = isGood ? '#34D399' : isNeutral ? '#FBBF24' : '#F87171';
  document.getElementById('fb-text').textContent = choice.feedback;
  document.getElementById('fb-xp').textContent = `+${choice.xp} XP`;

  // Impact pills
  const container = document.getElementById('fb-impacts');
  container.innerHTML = '';
  const labels = { fairness: '⚖️ Fairness', trust: '🤝 Trust', order: '🚔 Order', turnout: '🗳️ Turnout', misinformation: '📡 Misinfo' };
  Object.entries(choice.impacts).forEach(([key, val]) => {
    if (val === 0) return;
    const pill = document.createElement('span');
    pill.className = `impact-pill ${val > 0 && key !== 'misinformation' ? 'impact-pos' : val < 0 && key !== 'misinformation' ? 'impact-neg' : key === 'misinformation' && val > 0 ? 'impact-neg' : 'impact-pos'}`;
    pill.textContent = `${labels[key]} ${val > 0 ? '+' : ''}${val}`;
    container.appendChild(pill);
  });

  // Badge
  const badgeEl = document.getElementById('fb-badge');
  if (choice.badge && BADGES[choice.badge]) {
    badgeEl.style.display = 'inline-flex';
    badgeEl.textContent = `${BADGES[choice.badge].icon} Badge Earned: ${choice.badge}`;
    setTimeout(() => showToast(`🏅 Badge unlocked: ${choice.badge}!`), 400);
  } else {
    badgeEl.style.display = 'none';
  }

  overlay.classList.add('active');

  document.getElementById('fb-next').onclick = () => {
    overlay.classList.remove('active');
    state.scenarioIndex++;
    loadScenario();
  };
}

// ─── RESULTS ──────────────────────────────────────────────────────────────────
function showResults() {
  showScreen('results');
  const m = state.metrics;
  const avgScore = Math.round((m.fairness + m.trust + m.order + m.turnout + (100 - m.misinformation)) / 5);

  document.getElementById('results-score').textContent = avgScore + '%';
  document.getElementById('results-title').textContent =
    avgScore >= 80 ? '🏆 Democracy Champion!' :
    avgScore >= 60 ? '⭐ Responsible Citizen' :
    avgScore >= 40 ? '📘 Learning Democrat' : '⚠️ Needs Improvement';

  document.getElementById('res-fairness').textContent = m.fairness + '%';
  document.getElementById('res-trust').textContent = m.trust + '%';
  document.getElementById('res-order').textContent = m.order + '%';
  document.getElementById('res-turnout').textContent = m.turnout + '%';
  document.getElementById('res-xp').textContent = state.xp;

  const badgesGrid = document.getElementById('results-badges');
  badgesGrid.innerHTML = '';
  if (state.badges.length === 0) {
    badgesGrid.innerHTML = '<p style="color:var(--silver);font-size:0.9rem;">No badges earned this round. Try again!</p>';
  } else {
    state.badges.forEach(b => {
      const info = BADGES[b];
      const chip = document.createElement('div');
      chip.className = 'badge-chip';
      chip.innerHTML = `<span>${info?.icon || '🏅'}</span><span>${b}</span>`;
      badgesGrid.appendChild(chip);
    });
  }

  document.getElementById('btn-play-again').onclick = () => showScreen('roles');
  document.getElementById('btn-new-role').onclick = () => showScreen('roles');
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ─── ROLE SWITCHER ────────────────────────────────────────────────────────────
function initRoleSwitcher() {
  const drawer      = document.getElementById('role-switcher-drawer');
  const btnSwitch   = document.getElementById('btn-switch-role');
  const btnClose    = document.getElementById('btn-close-drawer');
  const rsdGrid     = document.getElementById('rsd-grid');
  const confirmMod  = document.getElementById('switch-confirm-modal');
  const scConfirm   = document.getElementById('sc-confirm');
  const scCancel    = document.getElementById('sc-cancel');

  let pendingRole = null;

  // Build the 6 role cards inside the drawer
  function buildDrawer() {
    rsdGrid.innerHTML = '';
    ROLES.forEach(role => {
      const card = document.createElement('div');
      card.className = 'rsd-card' + (state.role && state.role.id === role.id ? ' active-role' : '');
      const count = (SCENARIOS[role.id] || []).length;
      card.innerHTML = `
        <span class="rsd-icon">${role.icon}</span>
        <span class="rsd-name">${role.label}</span>
        ${state.role && state.role.id === role.id
          ? '<span class="rsd-badge">CURRENT</span>'
          : `<span style="font-size:0.72rem;color:var(--silver)">${count} scenarios</span>`}`;
      card.addEventListener('click', () => {
        if (state.role && state.role.id === role.id) {
          showToast(`You are already playing as ${role.label}!`);
          return;
        }
        pendingRole = role;
        document.getElementById('sc-icon').textContent  = role.icon;
        document.getElementById('sc-title').textContent = `Switch to ${role.label}?`;
        document.getElementById('sc-desc').textContent  =
          `Your current XP (${state.xp}) will be saved to the leaderboard. You'll start fresh as ${role.label}.`;
        confirmMod.classList.add('active');
      });
      rsdGrid.appendChild(card);
    });
  }

  // Toggle drawer
  btnSwitch.addEventListener('click', () => {
    buildDrawer();
    drawer.classList.toggle('open');
  });
  btnClose.addEventListener('click', () => drawer.classList.remove('open'));

  // Confirm switch
  scConfirm.addEventListener('click', () => {
    if (!pendingRole) return;
    // Save current score to leaderboard
    if (state.currentUser && state.xp > 0) {
      const acct = state.currentAccount;
      state.leaderboard.push({ name: state.currentUser, role: state.role.icon, xp: state.xp });
      state.leaderboard.sort((a,b) => b.xp - a.xp);
    }
    confirmMod.classList.remove('active');
    drawer.classList.remove('open');
    const intro = `Switching perspective: now playing as ${pendingRole.label}. Your new decisions shape democracy differently.`;
    selectRole(pendingRole, intro);
    pendingRole = null;
  });

  // Cancel
  scCancel.addEventListener('click', () => {
    confirmMod.classList.remove('active');
    pendingRole = null;
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  initLogin();
  initLanding();
  initRoles();
  initLogout();
  initRoleSwitcher();
  showScreen('login');
});
