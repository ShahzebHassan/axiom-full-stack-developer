// Grab DOM elements from HTML
const word = document.getElementById('word');
const wrongLetters = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const message = document.getElementById('win-lose');
const restartButton = document.getElementById('restart');
const notification = document.getElementById('slider-container');

const hangmanParts = document.querySelectorAll('.hangman-part');

// An array of words to select from
const wordPool = ['javascript','computer','hangman','facebook','youtube',"major","body","slept","somehow","out","branch","answer","spirit","larger","number","for","birds","ahead","swept","escape","officer","on","character","those","airplane","organized","spider","just","means","satisfied","introduced","simply","shore","west","contain","believed","fireplace","doll","cost","part","church","necessary","girl","either","huge","us","thou","union","ever","level","too","try","browserling","former","firm","safety","badly","else","mother","nobody","contrast","progress","higher","speak","powerful","suddenly","greatly","fell","free","became","rope","oxygen","voyage","science","beautiful","flow","dozen","drive","strike","slip","cotton","paper","symbol","into","signal","care","engine","manufacturing","ice","imagine","dangerous","strength","fly","frequently","half","camera","dried","elephant","gun","everywhere","public","sun","ill","breeze","claws","bent","solar","pool","near","blank","swing","be","recently","deep","easy","scale","industrial","settlers","farmer","specific","probably","fat","result","account","shop","impossible","street","apartment","different","president","camp","stared","safe","respect","division","vapor","let","success","we","belt","moving","dug","position","queen","sat","numeral","mine","port","beyond","snake","college","band","good","world","stream","phrase","against","upon","common","studying","empty","butter","idea","location","same","discussion","clean","property","weak","practice","story","planet","dance","grade","harbor","effort","height","tight","couple","struck","club","importance","slave","bat","wide","behavior","fighting","highest","plain","also","pet","graph","alphabet","equipment","straight","inside","famous","tower","eat","notice","caught","difference","she","until","earn","straw","hang","author","wheel","element","education","age","easier","news","riding","thin","skin","develop","consider","though","such","doctor","friend","connected","fourth","find","thousand","grew","stove","spin","card","therefore","pattern","like","egg","morning","again","shade","cat","adult","broken","forgotten","history","anyway","exist","electric","interior","plates","fort","trace","have","political","work","completely","hung","wire","swung","single","before","discover","mirror","unit","running","remarkable","yourself","children","there","fellow","brick","characteristic","color","does","native","soldier","state","gave","monkey","limited","subject","poetry","product","favorite","breath","away","carefully","foot","quarter","heart","cabin","realize","shut","behind","purpose","pitch","smallest","coach","animal","suggest","yard","buy","happy","carried","sum","made","knowledge","way","period","bean","day","unhappy","provide","sort","better","broke","of","decide","plant","nest","dirty","rather","earlier","cross","perhaps","sunlight","led","lamp","complex","plural","selection","up","coast","wing","meal","expect","select","steam","matter","fact","spent","bone","hold","stone","dress","familiar","influence","stronger","finger","transportation","fastened","shadow","principle","younger","seven","accident","research","forgot","friendly","climb","spread","go","indeed","additional","record","tomorrow","gift","announced","trap","why","change","softly","here","put","wool","winter","secret","judge","system","busy","trouble","mass","lot","fight","goose","difficulty","may","identity","visitor","molecular","coal","breakfast","hurry","hospital","cloth","share","army","were","sheet","great","me","operation","bring","degree","appearance","pure","salt","think","mysterious","black","thrown","ordinary","ancient","wish","enter","shelter","fire","regular","laid","shoulder","remove","greatest","pilot","layers","bark","glad","older","shall","spend","audience","teeth","congress","repeat","colony","window","cutting","to","acres","tongue","chamber","sudden","third","please","drop","must","give","roof","cool","crack","back","rocky","supper","nine","while","river","travel","or","hard","ocean","job","motion","whistle","herd","hurried","hundred","shoe","chemical","activity","metal","strong","actual","eager","fruit","which","recent","born","chance","bag","tonight","silly","universe","tin","pocket","saddle","whale","entirely","soft","minute","mouse","article","so","outline","range","built","jar","military","between","drove","raise","scientific","hall","south","already","improve","upward","coffee","broad","coat","hit","wear","green","earth","deer","highway","father","herself","cut","food","wonder","off","still","usually","slope","jet","evening","community","teacher","milk","sit","board","cow","sick","surprise","feathers","stuck","rest","spoken","guide","last","pretty","press","voice","rod","porch","victory","gentle","space","lunch","second","plan","twenty","steep","play","frog","pie","air","they","finally","soon","want","driver","above","triangle","stranger","women","warn","hello","chosen","win","power","allow","dot","high","information","could","bread","ought","including","reach","around","copy","later","post","someone","offer","dark","race","life","fuel","neighborhood","point","yellow","nearly","term","ranch","ten","flies","war","list","scene","lead","where","lips","easily","sang","party","baseball","own","citizen","something","basis","shaking","bridge","halfway","continent","never","pull","die","front","nor","sent","afternoon","nodded","frozen","ruler","pipe","pot","cent","title","excitement","pond","journey","depend","anyone","swim","farm","mental","noon","began","explain","physical","pleasant","moment","kill","treated","steel","folks","two","pan","mark","few","composition","frame","exactly","printed","do","art","continued","value","both","small","particular","throughout","sea","exciting","done","cover","create","smile","useful","one","exercise","manner","uncle","divide","once","type","danger","many","any","year","garage","five","affect","example","prize","whatever","object","coming","area","whispered","your","express","describe","at","hair","is","dry","hearing","date","forty","birth","except","in","goes","mind","key","excellent","market","afraid","putting","label","bite","serious","fun","partly","pleasure","alike","stiff","electricity","sweet","alive","score","learn","include","place","long","disease","machine","walk","line","positive","together","grabbed","burst","sail","lake","consonant","beauty","speed","slowly","curious","how","hay","newspaper","keep","everybody","daily","grain","diameter","gulf","sitting","changing","honor","solid","motor","furniture","wolf","explore","feel","enjoy","sale","policeman","written","mice","appropriate","package","read","quickly","summer","corn","thing","discuss","break","cattle","watch","worse","start","stems","ago","setting","wild","movie","cage","golden","root",
"cave","heat","through","bigger","substance","lying","motor","after","chose","whose","in","lack","dawn","negative","rabbit","seat","lunch","blank","anybody","forward","parallel","travel","uncle","beside","shadow","consist","differ","dirt","behavior","business","primitive","burst","worry","fresh","great","nearby","cannot","shelter","nine","compass","solution","whose","speech","mental","roof","elephant","flies","tired","fallen","volume","pet","unless","passage","crop","curve","thee","struck","dried","river","smoke","next","height","mathematics","wait","flat","port","flew","wonder","lost","neighbor","equally","choice","did","setting","climb","car","cost","tree","jar","month","work","bowl","afternoon","sink","daughter","divide","chart","screen","barn","temperature","neck","science","us","wool","perhaps","stuck","fastened","slope","moon","rays","divide","suppose","dirt","step","youth","pay","putting","you","more","had","lot","deer","hit","struck","zoo","related","son","gone","concerned","planning","in","prevent","western","charge","roof","quiet","general","deeply","section","pot","scientific","though","standard","push","sent","sea","hungry","fallen","remove","parallel","soldier","sold","central","leather","blew","pretty","strong","my","sweet","signal","doing","saved","tune","day","around","triangle","around","every","paragraph","themselves","bottom","coat","skill","down","copy","supper","slabs","south","home","bee","explain","whom","element","palace","hole","finger","percent","greatest","leg","battle","people","terrible","carbon","changing","government","had","cookies","dress","main","said","height","because","slabs","tall","chest","two","research","mad","leg","time","total","whose","tone","plural","throat","happened","research","airplane","stepped","neighborhood","spread","case","led","listen","indicate","board","together","opinion","type","pack","dot","bread","leave","boat","waste","live","minerals","student","skill","policeman","needs","gulf","using","held","trick","knife","harbor","forgot","prove","struggle","feel","lion","stand","feathers","least","house","frog","dish","heart","fruit","asleep","consider","hall","sets","movie","danger","needs","giant","more","end","path","crew","yard","station","bottom","they","vegetable","religious","interior","review","branch","trace","proper","lonely","change","where","best","porch","black","individual","pilot","activity","continued","force","change","known","fought","street","give","slight","curious","yard","tell","be","parallel","save","slip","fun","hope","fight","pony","needle","replied","go","apart","lesson","diameter","fifteen","market","substance","spider","meet","story","art","yes","pride","glass","mass","second","nor","behavior","tube","sign","letter","driving","general","theory","when","clean","slight","buffalo","smallest","smell","sale","shinning","stop","dozen","difficulty","fierce","name","statement","far","flow","drawn","climb","birthday","goes","especially","win","draw","worker","prize","suit","sentence","tree","activity","appearance","rock","drop","pipe","carefully","bent","living","nails","national","bush","east","both","vapor","wheel","lying","perfectly","route","weigh","wash","court","industrial","joined","smell","truth","crowd","wool","indicate","solid","balance","total","hurt","late","balance","easy","consist","firm","produce","hide","merely","happily","girl","heart","sign","balloon","mouth","able","sat","rocket","simply","lovely","declared","cookies","carry","jet","whenever","brought","flat","slip","rear","club","press","population","down","widely","car","night","wire","highway","stove","stronger","differ","rhythm","sold","regular","favorite","primitive","swam","studied","correctly","another","ought","ice","writer","daughter","somewhere","potatoes","melted","setting","layers","thumb","widely","surface","usually","getting","lift","face","tears","cotton","partly","to","sea","ability","previous","garage","tropical","birth","toy","about","chief","flew","die","tell","trace","specific","include","stopped","bigger","his","younger","made","mind","behind","party","sheep","food","meat","outside","never","have","larger","climate","instance","various","stay","mill","sold","teacher","cost","raise","yourself","chicken","minerals","getting","topic","shelter","adventure","pilot","industry","ride","have","replied","whole","step","tune","leave","consonant","fully","melted","lose","mouth","truth","dress","settlers","occur","expression","form","further","fastened","system","service","ear","clothes","congress","although","paid","broke","off","window","maybe","while","north","replied","pine","eight","no","farther","love","found","city","view","forty","like","is","upward","held","men","strike","bell","bad","ordinary","us","paint","chart","size","slave","tropical","great","church","north","similar","you","cotton","them","must","or","farm","different","forth","deeply","east","think","rhyme","whenever","studying","instant","beyond","saw","building","needle","statement","son","scale","knew","picture","when","father","he","path","here","sets","buffalo","thumb","prize","farther","cotton","jar","look","shore","usually","quiet","fix","corner","pound","store","very","to","burst","feature","duck","throw","center","establish","taken","dried","rich","stronger","apart","agree","pig","pie","visitor","quietly","hearing","available","express","wood","average","rose","that","bus","smell","butter","hurt","field","swam","sheet","consider","special","frozen","bill","movie","over","handsome","swimming","feel","terrible","apple","soldier","rear","eager","pleasant","knife","fireplace","city","night","both","average","word","animal","proper","smallest","contain","bell","prize","definition","principle","experience","snow","nuts","son","discover","walk","plates","sand","seldom","chemical","me","independent","camp","army","labor","outline","husband","future","familiar","dog","upon","shaking","onto","manufacturing","able","contrast","image","listen","distance","balance","electricity","ants","wonder","coach","ants","characteristic","pot","individual","fallen","as","read","oxygen","seat","effect","share","vegetable","tropical","sentence","chair","excited","naturally","hot","several","turn","instant","sunlight","damage","talk","method","aside","beautiful","scientist","replied","tin","mark","bridge","labor","rate","nearest","cold","probably","burst","hundred","citizen","grain","greatly","characteristic","cause","bicycle","ever","believed","review","speed","oil","shirt","common","headed","period","camp","year","forgotten","loud","product","mighty","hospital","magic","growth","program","tip","cloth","pale","protection","protection","both","firm","bee","luck"];

// Selecting a word at random from the pool
let selectedWord = wordPool[Math.floor(Math.random() * wordPool.length)];

// Arrays to classify the input of the User
const correctLetters = [];
const incorrectLetters = [];

// Function to display the word on the screen
function displaySelectedWord() {
    word.innerHTML = `
        ${selectedWord
            .split('')
            .map(
                letter => `
                    <span class="letter">
                        ${correctLetters.includes(letter) ? letter : '' }
                    </span>
                `
            )
            .join('')
        }
    `;

    const wordText = word.innerText.replace(/\n/g, '');

    if( wordText === selectedWord ) {
        message.innerText = 'You won!';
        popup.style.display = 'flex';
    }

};

// Function to display the sliding notification
function showNotification() {
    notification.classList.add('show');

    setTimeout( () => {notification.classList.remove('show');}, 3000);
}

// Function to Update Incorrect Letters
function updateWrongLetters() {
    // Update the Display for Wrong Letters
    wrongLetters.innerHTML = `
    ${incorrectLetters.length > 0 ? `<p>Wrong</p>` : '' }
    ${incorrectLetters.map( letter => `<span>${letter}</span>`)}
    `;

    // Display Hangman Parts on Incorrect Letter Input
    hangmanParts.forEach( (part, index) => {
        const errors = incorrectLetters.length;

        if ( index < errors ) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    // Show Popup if lost
    if(incorrectLetters.length === hangmanParts.length) {
        message.innerText = 'You lost!';
        popup.style.display = 'flex';
    }
}

// Event Handlers
// 1. Event Handler for Keyboard Button Press
window.addEventListener('keydown', e => {
    if( e.keyCode >= 65 && e.keyCode <= 90 ) {
        const letter = e.key;
        
        if( selectedWord.includes(letter) ) {
            if(!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displaySelectedWord();
            } else {
                showNotification();
            }
        } else {
            if(!incorrectLetters.includes(letter)) {
                incorrectLetters.push(letter);
                updateWrongLetters();
            } else {
                showNotification();
            }
        }

    }
})

// 2. Event Listener for Restart Button
restartButton.addEventListener('click', () => {
    // Empty Arrays
    correctLetters.splice(0);
    incorrectLetters.splice(0);

    // Get a new selected word from the pool
    selectedWord = wordPool[Math.floor(Math.random() * wordPool.length)];

    displaySelectedWord();

    // Clear the Wrong Letters Div
    updateWrongLetters();

    // Hide the popup
    popup.style.display = 'none';

})

displaySelectedWord();