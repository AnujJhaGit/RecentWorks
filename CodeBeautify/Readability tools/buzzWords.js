const buzzWords = ['4g',
'5g',
'accountable talk',
'agile',
'ajax',
'algorithm',
'alignment',
'amplify',
'analytics',
'andon',
'artisan',
'at the end of the day',
'back-end',
'ballpark figure',
'bandwidth',
'benchmarking',
'best of breed',
'best practices',
'beta',
'big data',
'big society',
'bio-',
'bizmeth',
'bleeding edge',
'blockchain',
"bloom's taxonomy",
'break through the clutter',
'brick-and-mortar',
'bricks-and-clicks',
'bring to the table',
'bring your own device',
'building capabilities',
'business process outsourcing',
'business-to-business',
'business-to-consumer',
'buzzword',
'buzzword compliant',
'cadence',
'clear goal',
'clickthrough',
'client-centric',
'close the loop',
'cloud-computing',
'co-opetition',
'collaboration',
'come-to-jesus moment',
'common core',
'content management',
'content management system',
'content marketing',
'convergence',
'core competency',
'coward',
'creative',
'cross-platform',
'css3',
'customer-centric',
'cyber-physical systems',
'data mining',
'data science',
'datafication',
'deep dive',
'deep learning',
'deep web',
'design pattern',
'devops',
'differentiated instruction',
'digital divide',
'digital literacy',
'digital remastering',
'digital rights management',
'digital signage',
'disruptive innovation',
'disruptive technologies',
'diversity',
'document management',
'dot-bomb',
'downsizing',
'drill down',
'drinking the kool-aid',
'e-learning',
'early-stage',
'eating your own dogfood',
'eco-',
'emotional intelligence',
'employer branding',
'empowerment',
'enable',
'end-to-end',
'engine',
'enterprise content management',
'enterprise service bus',
'entitlement',
'ephemeral rogue entity',
'establishment',
'evangelist',
'event horizon',
'exit strategy',
'eyeballs',
'face time',
'fit for purpose',
'fleet dynamism',
'flipped classroom',
'folksonomy',
'framework',
'free value',
'frictionless',
'front-end',
'fulfilment issues',
'fuzzy logic',
'generation x',
'generation y',
'globalization',
'going forward',
'grow',
'growth hacking',
'guided reading',
'headlights',
'heavy lifting',
'herding cats',
'higher-order thinking',
'holistic',
'holistic approach',
'home',
'html5',
'hyperlocal',
'iaas',
'ideation management',
'immersion',
'impact',
'information society',
'information superhighway',
'innovation',
'innovative',
'instructional scaffolding',
'internet of things',
'invested in',
'javascript',
'knowledge process outsourcing',
'lambda',
'lateral violence',
'leverage',
'logistics',
'long tail',
'low hanging fruit',
'machine learning',
'make it pop',
'management visibility',
'mashup',
'microservices',
'millennial',
'mind share',
'mindshare',
'mission critical',
'mobile',
'modularity',
'mouthfeel',
'moving forward',
'multiple intelligences',
'nanotechnology',
'national security',
'netiquette',
'new economy',
'new normal',
'next generation',
'offshoring',
'on the runway',
'one team',
'open source',
'opportunities',
'optics',
'organic growth',
'paas',
'pain point',
'paradigm',
'paradigm shift',
'paralysis by analysis',
'passionate',
'patriarchy',
'podcasting',
'political capital',
'privacy',
'proactive',
'productivity',
'profit center',
'project-based learning',
'push the envelope',
'quantum supremacy',
'quick win',
'reach out',
'real-time',
'reimagine',
'resonate',
'responsive web design',
'return on investment',
'reverse fulfilment',
'rightshoring',
'roadmap',
'robust',
'run like a business',
'rustic',
'saas',
'scalability',
'sea change',
'seamless',
'sensorization',
'serum',
'share options',
'single pane-of-glass',
'sisterhood',
'skeuomorphic',
'social bookmarking',
'social software',
'software defined networking',
'solidarity',
'solution',
'sox',
'spa',
'spam',
'spin-up',
'stakeholder',
'startup',
'storytelling',
'strategic communication',
'strategic ineptness',
'streamline',
'student engagement',
'survival strategy',
'sustainability',
'sync-up',
'synergy',
'systems development life-cycle',
'tagging',
'take offline',
'talent relationship management',
'technological masturbation',
'think outside the box',
'tiger team',
'time-blindness',
'touchpoint',
'transmedia',
'unconscious bias',
'unpack',
'user generated content',
'value add',
'value-added',
'viral',
'virtualization',
'visibility',
'vortal',
'warfighter',
'water under the bridge',
'web 2.0',
'web services',
'webinar',
'wellness',
'wheelhouse',
'wikiality',
'win-win',
'work smarter',
'workflow',];


console.log(buzzWords);
function handleTextChange() {
    const autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');

    if (autoUpdateCheckbox.checked) {
        count();
    }

}

function count(){
    const inputText = document.getElementById('inputText').value;
        const words = inputText.toLowerCase().match(/\b\w+\b/g) || [];

        const wordCount = {};
        words.forEach(word => {
            if (buzzWords.includes(word)) {
                wordCount[word] = (wordCount[word] || 0) + 1;
            }
        });

        updateWordCountTable(wordCount);
}

function updateWordCountTable(wordCount) {
    const tableBody = document.getElementById('buzzWordsTableBody');
    tableBody.innerHTML = '';

    for (const word in wordCount) {
        const count = wordCount[word];

        const row = document.createElement('tr');
        const wordCell = document.createElement('td');
        const countCell = document.createElement('td');

        wordCell.textContent = word;
        countCell.textContent = count;

        row.appendChild(wordCell);
        row.appendChild(countCell);

        tableBody.appendChild(row);
    }
}

function handleAutoUpdateChange() {
    const autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');
    const calculateButton = document.getElementById('findBuzzWordsButton');

    calculateButton.disabled = autoUpdateCheckbox.checked;

    if (autoUpdateCheckbox.checked) {
        
        handleTextChange();
    }
}

function calculateWordCount() {
    count();
    handleTextChange();
}

function updateAutoUpdate() {
    const autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');
    handleAutoUpdateChange();
}

function loadSampleText() {
    const sampleText = "Pride and Prejudice by Jane Austen\
    Chapter 1\
    \
    It is a truth universally acknowledged, that a single man in\
    possession of a good fortune, must be in want of a wife.\
    \
    However little known the feelings or views of such a man may be\
    on his first entering a neighbourhood, this truth is so well\
    fixed in the minds of the surrounding families, that he is\
    considered the rightful property of some one or other of their\
    daughters.\
    \
    “My dear Mr. Bennet,” said his lady to him one day, “have you\
    heard that Netherfield Park is let at last?”\
    \
    Mr. Bennet replied that he had not.\
    \
    “But it is,” returned she; “for Mrs. Long has just been here, and\
    she told me all about it.”\
    \
    Mr. Bennet made no answer.\
    \
    “Do you not want to know who has taken it?” cried his wife\
    impatiently.\
    \
    “_You_ want to tell me, and I have no objection to hearing it.”\
    \
    This was invitation enough.\
    \
    “Why, my dear, you must know, Mrs. Long says that Netherfield is\
    taken by a young man of large fortune from the north of England;\
    that he came down on Monday in a chaise and four to see the\
    place, and was so much delighted with it, that he agreed with Mr.\
    Morris immediately; that he is to take possession before\
    Michaelmas, and some of his servants are to be in the house by\
    the end of next week.”\
    \
    “What is his name?”\
    \
    “Bingley.”\
    \
    “Is he married or single?”\
    \
    “Oh! Single, my dear, to be sure! A single man of large fortune;\
    four or five thousand a year. What a fine thing for our girls!”\
    \
    “How so? How can it affect them?”\
    \
    “My dear Mr. Bennet,” replied his wife, “how can you be so\
    tiresome! You must know that I am thinking of his marrying one of\
    them.”\
    \
    “Is that his design in settling here?”\
    \
    “Design! Nonsense, how can you talk so! But it is very likely\
    that he _may_ fall in love with one of them, and therefore you\
    must visit him as soon as he comes.”\
    \
    “I see no occasion for that. You and the girls may go, or you may\
    send them by themselves, which perhaps will be still better, for\
    as you are as handsome as any of them, Mr. Bingley may like you\
    the best of the party.”\
    \
    “My dear, you flatter me. I certainly _have_ had my share of\
    beauty, but I do not pretend to be anything extraordinary now.\
    When a woman has five grown-up daughters, she ought to give over\
    thinking of her own beauty.”\
    \
    “In such cases, a woman has not often much beauty to think of.”\
    \
    “But, my dear, you must indeed go and see Mr. Bingley when he\
    comes into the neighbourhood.”\
    \
    “It is more than I engage for, I assure you.”\
    \
    “But consider your daughters. Only think what an establishment it\
    would be for one of them. Sir William and Lady Lucas are\
    determined to go, merely on that account, for in general, you\
    know, they visit no newcomers. Indeed you must go, for it will be\
    impossible for _us_ to visit him if you do not.”\
    \
    “You are over-scrupulous, surely. I dare say Mr. Bingley will be\
    very glad to see you; and I will send a few lines by you to\
    assure him of my hearty consent to his marrying whichever he\
    chooses of the girls; though I must throw in a good word for my\
    little Lizzy.”\
    \
    “I desire you will do no such thing. Lizzy is not a bit better\
    than the others; and I am sure she is not half so handsome as\
    Jane, nor half so good-humoured as Lydia. But you are always\
    giving _her_ the preference.”\
    \
    “They have none of them much to recommend them,” replied he;\
    “they are all silly and ignorant like other girls; but Lizzy has\
    something more of quickness than her sisters.”\
    \
    “Mr. Bennet, how can you abuse your own children in such a way?\
    You take delight in vexing me. You have no compassion for my poor\
    nerves.”\
    \
    “You mistake me, my dear. I have a high respect for your nerves.\
    They are my old friends. I have heard you mention them with\
    consideration these last twenty years at least.”\
    \
    “Ah, you do not know what I suffer.”\
    \
    “But I hope you will get over it, and live to see many young men\
    of four thousand a year come into the neighbourhood.”\
    \
    “It will be no use to us, if twenty such should come, since you\
    will not visit them.”\
    \
    “Depend upon it, my dear, that when there are twenty, I will\
    visit them all.”\
    \
    Mr. Bennet was so odd a mixture of quick parts, sarcastic humour,\
    reserve, and caprice, that the experience of three-and-twenty\
    years had been insufficient to make his wife understand his\
    character. _Her_ mind was less difficult to develop. She was a\
    woman of mean understanding, little information, and uncertain\
    temper. When she was discontented, she fancied herself nervous.\
    The business of her life was to get her daughters married; its\
    solace was visiting and news.\
    ";
    document.getElementById('inputText').value = sampleText;
    handleTextChange();
    calculateWordCount();
}

function loadFile() {
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');
    const reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById('inputText').value = e.target.result;
        handleTextChange();
    };

    const file = fileInput.files[0];
    if (file) {
        fileName.textContent = file.name;
        reader.readAsText(file);
    }
}

function clearText() {
    document.getElementById('inputText').value = '';
    handleTextChange();
}

document.getElementById('findBuzzWordsButton').addEventListener('click', calculateWordCount);

document.getElementById('autoUpdateCheckbox').addEventListener('click', updateAutoUpdate);