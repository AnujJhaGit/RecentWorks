const cussWords = [
    '2g1c',
    '2 girls 1 cup',
    'acrotomophilia',
    'alabama hot pocket',
    'alaskan pipeline',
    'anal',
    'anilingus',
    'anus',
    'apeshit',
    'arsehole',
    'ass',
    'asshole',
    'assmunch',
    'auto erotic',
    'autoerotic',
    'babeland',
    'baby batter',
    'baby juice',
    'ball gag',
    'ball gravy',
    'ball kicking',
    'ball licking',
    'ball sack',
    'ball sucking',
    'bangbros',
    'bareback',
    'barely legal',
    'barenaked',
    'bastard',
    'bastardo',
    'bastinado',
    'bbw',
    'bdsm',
    'beaner',
    'beaners',
    'beaver cleaver',
    'beaver lips',
    'bestiality',
    'big black',
    'big breasts',
    'big knockers',
    'big tits',
    'bimbos',
    'birdlock',
    'bitch',
    'bitches',
    'black cock',
    'blonde action',
    'blonde on blonde action',
    'blowjob',
    'blow job',
    'blow your load',
    'blue waffle',
    'blumpkin',
    'bollocks',
    'bondage',
    'boner',
    'boob',
    'boobs',
    'booty call',
    'brown showers',
    'brunette action',
    'bukkake',
    'bulldyke',
    'bullet vibe',
    'bullshit',
    'bung hole',
    'bunghole',
    'busty',
    'butt',
    'buttcheeks',
    'butthole',
    'camel toe',
    'camgirl',
    'camslut',
    'camwhore',
    'carpet muncher',
    'carpetmuncher',
    'chocolate rosebuds',
    'circlejerk',
    'cleveland steamer',
    'clit',
    'clitoris',
    'clover clamps',
    'clusterfuck',
    'cock',
    'cocks',
    'coprolagnia',
    'coprophilia',
    'cornhole',
    'coon',
    'coons',
    'creampie',
    'cum',
    'cumming',
    'cunnilingus',
    'cunt',
    'darkie',
    'date rape',
    'daterape',
    'deep throat',
    'deepthroat',
    'dendrophilia',
    'dick',
    'dildo',
    'dingleberry',
    'dingleberries',
    'dirty pillows',
    'dirty sanchez',
    'doggie style',
    'doggiestyle',
    'doggy style',
    'doggystyle',
    'dog style',
    'dolcett',
    'domination',
    'dominatrix',
    'dommes',
    'donkey punch',
    'double dong',
    'double penetration',
    'dp action',
    'dry hump',
    'dvda',
    'eat my ass',
    'ecchi',
    'ejaculation',
    'erotic',
    'erotism',
    'escort',
    'eunuch',
    'fag',
    'faggot',
    'fecal',
    'felch',
    'fellatio',
    'feltch',
    'female squirting',
    'femdom',
    'figging',
    'fingerbang',
    'fingering',
    'fisting',
    'foot fetish',
    'footjob',
    'frotting',
    'fuck',
    'fuck buttons',
    'fuckin',
    'fucking',
    'fucktards',
    'fudge packer',
    'fudgepacker',
    'futanari',
    'gang bang',
    'gay sex',
    'genitals',
    'giant cock',
    'girl on',
    'girl on top',
    'girls gone wild',
    'goatcx',
    'goatse',
    'god damn',
    'gokkun',
    'golden shower',
    'goodpoop',
    'goo girl',
    'goregasm',
    'grope',
    'group sex',
    'g-spot',
    'guro',
    'hand job',
    'handjob',
    'hard core',
    'hardcore',
    'hentai',
    'homoerotic',
    'honkey',
    'hooker',
    'hot carl',
    'hot chick',
    'how to kill',
    'how to murder',
    'huge fat',
    'humping',
    'incest',
    'intercourse',
    'jack off',
    'jail bait',
    'jailbait',
    'jelly donut',
    'jerk off',
    'jigaboo',
    'jiggaboo',
    'jiggerboo',
    'jizz',
    'juggs',
    'kike',
    'kinbaku',
    'kinkster',
    'kinky',
    'knobbing',
    'leather restraint',
    'leather straight jacket',
    'lemon party',
    'lolita',
    'lovemaking',
    'make me come',
    'male squirting',
    'masturbate',
    'menage a trois',
    'milf',
    'missionary position',
    'motherfucker',
    'mound of venus',
    'mr hands',
    'muff diver',
    'muffdiving',
    'nambla',
    'nawashi',
    'negro',
    'neonazi',
    'nigga',
    'nigger',
    'nig nog',
    'nimphomania',
    'nipple',
    'nipples',
    'nsfw images',
    'nude',
    'nudity',
    'nympho',
    'nymphomania',
    'octopussy',
    'omorashi',
    'one cup two girls',
    'one guy one jar',
    'orgasm',
    'orgy',
    'paedophile',
    'paki',
    'panties',
    'panty',
    'pedobear',
    'pedophile',
    'pegging',
    'penis',
    'phone sex',
    'piece of shit',
    'pissing',
    'piss pig',
    'pisspig',
    'playboy',
    'pleasure chest',
    'pole smoker',
    'ponyplay',
    'poof',
    'poon',
    'poontang',
    'punany',
    'poop chute',
    'poopchute',
    'porn',
    'porno',
    'pornography',
    'prince albert piercing',
    'pthc',
    'pubes',
    'pussy',
    'queaf',
    'queef',
    'quim',
    'raghead',
    'raging boner',
    'rape',
    'raping',
    'rapist',
    'rectum',
    'reverse cowgirl',
    'rimjob',
    'rimming',
    'rosy palm',
    'rosy palm and her 5 sisters',
    'rusty trombone',
    'sadism',
    'santorum',
    'scat',
    'schlong',
    'scissoring',
    'semen',
    'sex',
    'sexo',
    'sexy',
    'shaved beaver',
    'shaved pussy',
    'shemale',
    'shibari',
    'shit',
    'shitblimp',
    'shitty',
    'shota',
    'shrimping',
    'skeet',
    'slanteye',
    'slut',
    's&m',
    'smut',
    'snatch',
    'snowballing',
    'sodomize',
    'sodomy',
    'spic',
    'splooge',
    'splooge moose',
    'spooge',
    'spread legs',
    'spunk',
    'strap on',
    'strapon',
    'strappado',
    'strip club',
    'style doggy',
    'suck',
    'sucks',
    'suicide girls',
    'sultry women',
    'swastika',
    'swinger',
    'tainted love',
    'taste my',
    'tea bagging',
    'threesome',
    'throating',
    'tied up',
    'tight white',
    'tit',
    'tits',
    'titties',
    'titty',
    'tongue in a',
    'topless',
    'tosser',
    'towelhead',
    'tranny',
    'tribadism',
    'tub girl',
    'tubgirl',
    'tushy',
    'twat',
    'twink',
    'twinkie',
    'two girls one cup',
    'undressing',
    'upskirt',
    'urethra play',
    'urophilia',
    'vagina',
    'venus mound',
    'vibrator',
    'violet wand',
    'vorarephilia',
    'voyeur',
    'vulva',
    'wank',
    'wetback',
    'wet dream',
    'white power',
    'wrapping men',
    'wrinkled starfish',
    'xx',
    'xxx',
    'yaoi',
    'yellow showers',
    'yiffy',
    'zoophilia',
    '🖕',
    'سكس',
'طيز',
'شرج',
'لعق',
'لحس',
'مص',
'تمص',
'بيضان',
'ثدي',
'بز',
'بزاز',
'حلمة',
'مفلقسة',
'بظر',
'كس',
'فرج',
'شهوة',
'شاذ',
'مبادل',
'عاهرة',
'جماع',
'قضيب',
'زب',
'لوطي',
'لواط',
'سحاق',
'سحاقية',
'اغتصاب',
'خنثي',
'احتلام',
'نيك',
'متناك',
'متناكة',
'شرموطة',
'عرص',
'خول',
'قحبة',
'لبوة',

];

function handleTextChange() {
    const autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');

    if (autoUpdateCheckbox.checked) {
        count();
    }
}

function count() {
    const inputText = document.getElementById('inputText').value;
    const words = inputText.toLowerCase().match(/\b\w+\b/g) || [];

    const wordCount = {};
    words.forEach(word => {
        if (cussWords.includes(word)) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });

    updateWordCountTable(wordCount);
}

function updateWordCountTable(wordCount) {
    const tableBody = document.getElementById('profanityTableBody');
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
    const findFillerWordsButton = document.getElementById('checkProfanityButton');

    findFillerWordsButton.disabled = autoUpdateCheckbox.checked;

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
    However little known the feelings or views of such a man may be \
    on his first entering a neighbourhood, this truth is so well \
    fixed in the minds of the surrounding families, that he is \
    considered the rightful property of some one or other of their \
    daughters. \
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

document.getElementById('checkProfanityButton').addEventListener('click', calculateWordCount);

document.getElementById('autoUpdateCheckbox').addEventListener('click', updateAutoUpdate);