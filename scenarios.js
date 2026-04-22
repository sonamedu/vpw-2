const SCENARIOS = {
  voter: [
    {
      id: "v1",
      title: "The Viral Video",
      description: "A video circulating on WhatsApp claims your local candidate accepted bribes. It has no verified source. Election day is tomorrow.",
      image: "📱",
      choices: [
        { text: "Forward it to your contacts immediately", impacts: { trust: -8, misinformation: +15, fairness: -5 }, xp: 5, badge: null, feedback: "Spreading unverified content amplifies misinformation and harms democratic discourse." },
        { text: "Report it to the ECI complaint portal", impacts: { trust: +10, misinformation: -5, fairness: +5 }, xp: 25, badge: "Digital Guardian", feedback: "Excellent! Reporting suspicious content helps the system counter misinformation." },
        { text: "Ignore it and vote based on your own research", impacts: { trust: +5, misinformation: 0, fairness: +3 }, xp: 15, badge: null, feedback: "Good civic instinct — not spreading unverified content is responsible." },
        { text: "Share only with close family as a 'warning'", impacts: { trust: -3, misinformation: +8, fairness: -2 }, xp: 5, badge: null, feedback: "Even limited sharing of unverified content contributes to misinformation spread." }
      ]
    },
    {
      id: "v2",
      title: "The Missing Name",
      description: "You arrive at the polling booth and find your name missing from the voter list, despite having your Voter ID card.",
      image: "🗳️",
      choices: [
        { text: "Leave and assume you can't vote", impacts: { trust: -5, turnout: -10, fairness: -3 }, xp: 0, badge: null, feedback: "You have rights! Leaving without escalating denies yourself a democratic right." },
        { text: "File Form 12D (Tendered Vote) at the booth", impacts: { trust: +8, turnout: +5, fairness: +8 }, xp: 30, badge: "Rights Defender", feedback: "Perfect! Form 12D is exactly the mechanism for this situation." },
        { text: "Argue loudly with booth officers and cause disruption", impacts: { trust: -10, order: -15, fairness: -5 }, xp: 5, badge: null, feedback: "Disruption harms the process. Formal channels are more effective." },
        { text: "Contact the Booth Level Officer and file a complaint", impacts: { trust: +10, fairness: +10, turnout: +3 }, xp: 25, badge: null, feedback: "Correct approach — BLOs are authorized to handle enrollment issues." }
      ]
    },
    {
      id: "v3",
      title: "Cash for Votes",
      description: "A party worker approaches you outside the booth offering ₹500 to vote for a specific candidate.",
      image: "💵",
      choices: [
        { text: "Accept the money and vote however you want inside", impacts: { trust: -5, fairness: -10, order: -5 }, xp: 5, badge: null, feedback: "Accepting cash is illegal even if you vote differently — it normalizes bribery." },
        { text: "Refuse and report to the flying squad (1950 helpline)", impacts: { trust: +15, fairness: +15, order: +10 }, xp: 35, badge: "Anti-Corruption Champion", feedback: "Exceptional civic courage! Reporting vote-buying is critical to free elections." },
        { text: "Refuse and walk away silently", impacts: { trust: +5, fairness: +5, order: 0 }, xp: 15, badge: null, feedback: "Good — refusing is right, but reporting would have helped catch the offender." },
        { text: "Accept and vote for that candidate", impacts: { trust: -15, fairness: -20, order: -10 }, xp: 0, badge: null, feedback: "This is voter bribery and electoral fraud — a serious offense under IPC." }
      ]
    }
  ],
  candidate: [
    {
      id: "c1",
      title: "The Tempting Rally",
      description: "Your opponent announces a massive rally for tomorrow. The Model Code of Conduct (MCC) prohibits rallies after 48 hours before polling. It's 50 hours before. Your team wants to schedule one too.",
      image: "🎤",
      choices: [
        { text: "Schedule a rally — 50 hours is technically within rules", impacts: { trust: +5, fairness: +3, order: +2 }, xp: 20, badge: null, feedback: "Correct assessment! 50 hours before is still permitted under MCC." },
        { text: "Skip the rally to appear more ethical", impacts: { trust: +10, fairness: +5, order: +5 }, xp: 15, badge: "Ethical Campaigner", feedback: "Noble choice, but unnecessary — you had the right to rally." },
        { text: "Hold the rally AND a midnight rally (inside 48hrs)", impacts: { trust: -15, fairness: -20, order: -10 }, xp: 0, badge: null, feedback: "MCC violation! Rallies within 48 hours of polling are prohibited." },
        { text: "Report opponent's rally to ECI claiming MCC violation", impacts: { trust: -5, fairness: -5, order: 0 }, xp: 5, badge: null, feedback: "Filing a false complaint wastes ECI resources and is ethically questionable." }
      ]
    },
    {
      id: "c2",
      title: "The Religious Pitch",
      description: "Advisors suggest invoking religious identity in your final campaign speech to consolidate votes. It would likely work.",
      image: "🕌",
      choices: [
        { text: "Use the religious angle — it's just culture", impacts: { trust: -10, fairness: -15, order: -8 }, xp: 0, badge: null, feedback: "Using religion to seek votes violates Section 123 of RPA — a corrupt practice." },
        { text: "Firmly refuse and stick to development issues", impacts: { trust: +15, fairness: +15, order: +5 }, xp: 35, badge: "Democratic Role Model", feedback: "Exemplary! Keeping campaigns issue-based strengthens democratic norms." },
        { text: "Reference culture subtly without direct religious appeal", impacts: { trust: -3, fairness: -5, order: -2 }, xp: 8, badge: null, feedback: "Still risky — ECI has broad interpretation of 'religious appeal' under RPA." },
        { text: "Ask your legal team if it technically violates law first", impacts: { trust: +5, fairness: +3, order: +2 }, xp: 15, badge: null, feedback: "Good instinct to consult legal counsel before making a risky decision." }
      ]
    },
    {
      id: "c3",
      title: "Star Campaigner Controversy",
      description: "A national party leader (star campaigner) is visiting to support you but has made inflammatory remarks in another state recently.",
      image: "⭐",
      choices: [
        { text: "Welcome them — you need the vote boost", impacts: { trust: -8, fairness: -5, order: -5 }, xp: 5, badge: null, feedback: "Associating with inflammatory figures risks MCC violations and social unrest." },
        { text: "Publicly ask them to maintain decorum or cancel their visit", impacts: { trust: +12, fairness: +8, order: +8 }, xp: 25, badge: "Principled Leader", feedback: "Strong stance! Leaders who uphold standards even under pressure earn public trust." },
        { text: "Cancel the visit citing 'scheduling conflicts'", impacts: { trust: +5, fairness: +5, order: +3 }, xp: 15, badge: null, feedback: "Avoids the problem but lacks the principled communication of option 2." },
        { text: "Allow the visit but distance yourself from their remarks", impacts: { trust: 0, fairness: 0, order: -2 }, xp: 10, badge: null, feedback: "Neutral effect — but your silence may imply endorsement." }
      ]
    }
  ],
  media: [
    {
      id: "m1",
      title: "The Exclusive Leak",
      description: "A source gives you documents showing a leading candidate's financial irregularities. You can't independently verify them before your 8pm broadcast.",
      image: "📺",
      choices: [
        { text: "Broadcast immediately — public has a right to know", impacts: { trust: -15, fairness: -12, misinformation: +10 }, xp: 0, badge: null, feedback: "Publishing unverified allegations just before polls constitutes irresponsible journalism." },
        { text: "Hold the story until you verify the documents", impacts: { trust: +15, fairness: +10, misinformation: -5 }, xp: 30, badge: "Press Integrity Award", feedback: "Excellent! Verification before publication is the cornerstone of ethical journalism." },
        { text: "Report it as 'documents allegedly show' with source unnamed", impacts: { trust: -5, fairness: -5, misinformation: +5 }, xp: 8, badge: null, feedback: "Hedging language doesn't remove the harm of broadcasting unverified serious allegations." },
        { text: "Give the candidate a chance to respond before airing", impacts: { trust: +12, fairness: +12, misinformation: 0 }, xp: 25, badge: null, feedback: "Good practice — the right of reply is fundamental to fair reporting." }
      ]
    },
    {
      id: "m2",
      title: "Paid News Pressure",
      description: "Your channel's owner asks you to run favorable coverage of Candidate X in exchange for a large advertising deal. Election coverage policy guidelines prohibit this.",
      image: "💰",
      choices: [
        { text: "Comply — advertisers keep the channel alive", impacts: { trust: -20, fairness: -20, misinformation: +10 }, xp: 0, badge: null, feedback: "Paid news is a serious electoral offense. ECI can take action against the channel." },
        { text: "Refuse and document the request in writing", impacts: { trust: +20, fairness: +20, misinformation: -5 }, xp: 40, badge: "Fourth Estate Guardian", feedback: "Heroic! Documenting pressure creates accountability and protects press freedom." },
        { text: "Run neutral coverage and hope owner doesn't notice", impacts: { trust: +5, fairness: +5, misinformation: 0 }, xp: 12, badge: null, feedback: "Passive resistance is safer for you but doesn't address the systemic problem." },
        { text: "Resign from the story and let another journalist handle it", impacts: { trust: +8, fairness: +5, misinformation: 0 }, xp: 15, badge: null, feedback: "Preserves personal integrity but leaves the problem unresolved." }
      ]
    },
    {
      id: "m3",
      title: "Exit Poll Embargo",
      description: "Your channel has exclusive exit poll data ready. Publishing before voting ends is illegal under Election Commission rules, but a rival channel has hinted they'll break the embargo.",
      image: "📊",
      choices: [
        { text: "Publish first — competition demands it", impacts: { trust: -15, fairness: -15, order: -8 }, xp: 0, badge: null, feedback: "Exit poll leaks influence late voters. This is a legal violation with stiff penalties." },
        { text: "Hold until polling closes and publish on time", impacts: { trust: +15, fairness: +15, order: +5 }, xp: 30, badge: null, feedback: "Correct! Compliance builds institutional credibility even when competitors cheat." },
        { text: "Alert ECI about the rival channel's likely violation", impacts: { trust: +18, fairness: +18, order: +10 }, xp: 35, badge: "Election Law Champion", feedback: "Outstanding civic action! Reporting potential violations upholds the system." },
        { text: "Publish 'projections' framed differently to avoid legal trouble", impacts: { trust: -8, fairness: -10, order: -5 }, xp: 5, badge: null, feedback: "Framing tricks don't change the legal or ethical violation." }
      ]
    }
  ],
  judiciary: [
    {
      id: "j1",
      title: "The Midnight Petition",
      description: "A candidate files an emergency petition at 11pm alleging large-scale booth capturing scheduled for tomorrow's election. Evidence is circumstantial but credible.",
      image: "⚖️",
      choices: [
        { text: "Dismiss — courts don't work at midnight for politics", impacts: { trust: -15, fairness: -15, order: -10 }, xp: 0, badge: null, feedback: "Electoral matters are time-sensitive. Dismissal on procedural grounds during elections fails justice." },
        { text: "Admit the petition and issue a preventive order to ECI", impacts: { trust: +20, fairness: +20, order: +15 }, xp: 40, badge: "Guardian of Democracy", feedback: "Exemplary! Courts have acted at midnight in Vineet Narain-style precedents to protect elections." },
        { text: "Hear the matter but reserve judgment until after election", impacts: { trust: -5, fairness: -8, order: -5 }, xp: 8, badge: null, feedback: "Post-election judgments on pre-election violations offer little real remedy." },
        { text: "Direct ECI to investigate and report within 6 hours", impacts: { trust: +15, fairness: +15, order: +10 }, xp: 30, badge: null, feedback: "Good — directing ECI action creates accountability while respecting institutional roles." }
      ]
    },
    {
      id: "j2",
      title: "The EVMs Challenge",
      description: "Post-election, a losing candidate challenges EVM integrity, demanding paper trail audit of 10% of votes.",
      image: "🖥️",
      choices: [
        { text: "Dismiss as frivolous delay tactic by losing candidate", impacts: { trust: -10, fairness: -10, order: 0 }, xp: 5, badge: null, feedback: "Even if suspicious, dismissal without hearing damages institutional trust." },
        { text: "Order a VVPAT count audit as per Supreme Court guidelines", impacts: { trust: +18, fairness: +18, order: +5 }, xp: 35, badge: "Procedural Justice Award", feedback: "Correct! SC has mandated VVPAT audits as a transparency mechanism." },
        { text: "Order full re-election in the constituency", impacts: { trust: 0, fairness: -5, order: -10 }, xp: 5, badge: null, feedback: "Disproportionate remedy without evidence of fraud creates instability." },
        { text: "Hear both sides and review ECI's technical report first", impacts: { trust: +15, fairness: +15, order: +5 }, xp: 28, badge: null, feedback: "Due process! Hearing all parties before ordering audit is good judicial practice." }
      ]
    }
  ],
  enforcement: [
    {
      id: "e1",
      title: "The Tense Booth",
      description: "Groups from two rival parties are gathering near Booth 47. Tensions are high. You have 6 officers and election is in 2 hours.",
      image: "🚔",
      choices: [
        { text: "Use force to disperse both groups immediately", impacts: { trust: -10, order: -5, fairness: -5 }, xp: 5, badge: null, feedback: "Excessive force before any violation can inflame tensions further." },
        { text: "Deploy officers between groups and coordinate with ECI observer", impacts: { trust: +15, order: +20, fairness: +10 }, xp: 35, badge: "Peacekeeping Pro", feedback: "Excellent de-escalation! Buffer deployment with ECI coordination is best practice." },
        { text: "Contact both party representatives to request dispersal", impacts: { trust: +10, order: +10, fairness: +5 }, xp: 20, badge: null, feedback: "Good soft approach — works if parties cooperate, needs backup plan if they don't." },
        { text: "Wait and monitor — no law broken yet", impacts: { trust: -5, order: -10, fairness: 0 }, xp: 5, badge: null, feedback: "Waiting for violence before acting is reactive policing that fails to prevent harm." }
      ]
    },
    {
      id: "e2",
      title: "The Cash Seizure",
      description: "Your team stops a vehicle carrying ₹48 lakh in cash near a constituency on Election Day. The individual claims it's for business purposes.",
      image: "💼",
      choices: [
        { text: "Let them go — ₹48L is under the ₹50L threshold", impacts: { trust: -10, fairness: -10, order: -5 }, xp: 0, badge: null, feedback: "Wrong! Even below threshold, cash during elections requires documented justification." },
        { text: "Seize the cash, file Form 40, and inform Income Tax authorities", impacts: { trust: +20, fairness: +20, order: +15 }, xp: 40, badge: "Vigilance Star", feedback: "Perfect procedure! This is exactly the Election Day cash seizure protocol." },
        { text: "Detain the individual and wait for ECI instructions", impacts: { trust: +10, fairness: +10, order: +8 }, xp: 20, badge: null, feedback: "Reasonable interim action — but active seizure and reporting is the correct step." },
        { text: "Accept their explanation and note vehicle number only", impacts: { trust: -5, fairness: -8, order: -3 }, xp: 5, badge: null, feedback: "Insufficient response — unverified cash near polling stations requires formal action." }
      ]
    }
  ],
  officer: [
    {
      id: "o1",
      title: "The Delayed Voter List",
      description: "Final voter rolls have a 12% error rate in three constituencies. Publishing day is tomorrow. Postponing the election requires high-level approval.",
      image: "🏛️",
      choices: [
        { text: "Publish as-is — errors are in every election", impacts: { trust: -15, fairness: -20, turnout: -8 }, xp: 0, badge: null, feedback: "12% error rate is unacceptably high and would disenfranchise lakhs of voters." },
        { text: "Trigger emergency correction protocol and work overnight", impacts: { trust: +15, fairness: +20, turnout: +10 }, xp: 35, badge: "Election Integrity Shield", feedback: "Correct! Emergency ERO protocols exist precisely for pre-election roll corrections." },
        { text: "Recommend postponement of election to Election Commission", impacts: { trust: +10, fairness: +15, turnout: +5 }, xp: 25, badge: null, feedback: "A valid option — ECI has powers to reschedule. This shows institutional integrity." },
        { text: "Publish and set up a special grievance desk on Election Day", impacts: { trust: 0, fairness: -5, turnout: -3 }, xp: 10, badge: null, feedback: "Better than nothing, but grievance desks on polling day can't fully remedy enrollment errors." }
      ]
    },
    {
      id: "o2",
      title: "Observer Independence",
      description: "A senior politician calls you directly, pressuring you to reassign the election observer in their district. The observer is doing their job properly.",
      image: "👁️",
      choices: [
        { text: "Reassign the observer to avoid political conflict", impacts: { trust: -20, fairness: -20, order: -10 }, xp: 0, badge: null, feedback: "Capitulating to political pressure fundamentally compromises ECI's independence." },
        { text: "Refuse, document the call, and report to ECI Chairman", impacts: { trust: +25, fairness: +25, order: +10 }, xp: 45, badge: "Independence Pillar", feedback: "Outstanding! This is exactly how institutional independence is defended." },
        { text: "Explain politely that reassignments are not possible during elections", impacts: { trust: +15, fairness: +15, order: +5 }, xp: 25, badge: null, feedback: "Good response — but documenting the political interference attempt is also important." },
        { text: "Ignore the call and take no action", impacts: { trust: +5, fairness: +5, order: 0 }, xp: 10, badge: null, feedback: "Passive resistance, but without documentation, the politician faces no accountability." }
      ]
    }
  ]
};

const ROLES = [
  { id: "voter", label: "Voter", icon: "🗳️", color: "#4F46E5", desc: "Navigate your democratic rights, resist misinformation, and cast your vote freely." },
  { id: "candidate", label: "Candidate", icon: "🎤", color: "#059669", desc: "Campaign ethically under the Model Code of Conduct and win hearts, not just votes." },
  { id: "media", label: "Media", icon: "📺", color: "#DC2626", desc: "Report fairly, fight fake news, and uphold the Fourth Estate's democratic duty." },
  { id: "judiciary", label: "Judiciary", icon: "⚖️", color: "#7C3AED", desc: "Adjudicate election disputes with speed and impartiality to protect democratic outcomes." },
  { id: "enforcement", label: "Law Enforcement", icon: "🚔", color: "#1D4ED8", desc: "Maintain order, prevent violence, and enforce election laws on polling day." },
  { id: "officer", label: "ECI Officer", icon: "🏛️", color: "#B45309", desc: "Administer the world's largest election with integrity, precision, and independence." }
];

const BADGES = {
  "Digital Guardian": { icon: "🛡️", desc: "Reported misinformation to authorities" },
  "Rights Defender": { icon: "✊", desc: "Used formal channels to exercise voting rights" },
  "Anti-Corruption Champion": { icon: "🏆", desc: "Reported vote-buying to authorities" },
  "Ethical Campaigner": { icon: "🌟", desc: "Chose restraint over political gain" },
  "Democratic Role Model": { icon: "🎖️", desc: "Kept campaign free of communal appeals" },
  "Principled Leader": { icon: "💎", desc: "Put integrity above electoral advantage" },
  "Press Integrity Award": { icon: "📰", desc: "Verified before publishing under pressure" },
  "Fourth Estate Guardian": { icon: "🗼", desc: "Resisted paid news pressure" },
  "Election Law Champion": { icon: "⚡", desc: "Reported electoral violations proactively" },
  "Guardian of Democracy": { icon: "🏛️", desc: "Protected elections with midnight judicial action" },
  "Procedural Justice Award": { icon: "⚖️", desc: "Ordered proper audit with due process" },
  "Peacekeeping Pro": { icon: "🕊️", desc: "Defused tension without force" },
  "Vigilance Star": { icon: "🔍", desc: "Executed proper cash seizure protocol" },
  "Election Integrity Shield": { icon: "🛡️", desc: "Fixed critical voter roll errors" },
  "Independence Pillar": { icon: "🏔️", desc: "Defended institutional independence against political pressure" }
};

if (typeof module !== 'undefined') module.exports = { SCENARIOS, ROLES, BADGES };
