var celeb = [ 
'Will Smith',
'Jake Paul',
'Barack Obama',
'Elon Musk',
'Amy Poehler',
'Nick Kroll',
'Jake & Amir',
'the entire cast of FRIENDS',
]

var verb = [
'kicking',
'jumping over',
'drinking',
'eating',
'tripping over',
'illegally recording',
'erasing',
'making a song about',
'crying over',
'sleeping on top of',
'forgetting about',
'smoking out of',
'tackling',
'blindsiding',
'dancing atop',
'tripping',
'absorbing',
'poking',
'cooking',
'taunting',
'underestimating',
'sweet-talking',
'pretending to be',
'hugging',
'asking directions from',
'painting',
'framing a picture of',
'writing a movie about',
'buying a jacket for',
'wearing pants made in a shady factory of',
'refusing to kiss',
'critiquing',
'freezing',
'penning a love note to',
'designing a website about',
'recommending a Netflix Original to',
'listening to music about',
'plagarizing the works of',
'reading mail addressed to',
'purchasing cigarettes for',
'reading a bedtime story to',
'tucking in',
'trying, but failing, to impress',
'thinking about',
'rapping about',
'stealing thousands of dollars from',
'acting in a sitcom produced by',
'selling',
'dating',
'french kissing',


]

var noun = [
'a baby',
'15 goats',
'a room full of nuns',
'the cure to cancer',
'my laptop',
'my clubpenguin account',
'a VHS copy of The Land Before Time',
'my best friend\'s dog',
'a priceless guitar',
'the Royal Family',
'the host of a boring podcast',
'various people at the bar',
'...well, nothing in particular, I just want to be mad at something',
'the judges at the Puppy Bowl',
'my ex',
'a dude named Scott',
'a stuffed animal',
'the priceless family jewels',
'Jesus',
'a bunch of rocks',
'Rutgers University',
'my uncle',
'the US House of Representatives',
'the original Kermit the Frog puppet',
'a designer sweater',
'the last Toys R Us',
'the Coca-Cola secret recipe',
'the city of Oslo',
'the creator of this site',
'my grave',
'20 ounces of marijuana',
'a poorly designed Christmas pillow',
'a candlelit dinner for two',
'a boy covered in glitter',
'the myserious man outside my window',
'Seabiscuit, the race horse',
'the H&M clearance section',
'the JFK International Aiport',
'a new blender',
'a first-generation iPhone',
'a knitting club',
'dinosaur bones at a museum',
'a poetry book',
'a gucci sneaker',
'a series of firetrucks',
'water buffalo',
'a child wearing a lampshade',
'a checkerboard picnic blanet',
'an oak tree about to be cut down',
'a 42-inch plasma screen television',
'a dozen hardboiled eggs',
'my old prom dres',
'fuzzy dice',
'various christmas ornaments',
'the sunset',
'a dirty bedsheet',
'an old snapple cap',
'their own halloween mask',
'a rusted doorknob',
'an Olive Garden breadstick',
'the menu at Red Lobster',

]

function newcancel() {
    var randomNumber = Math.floor(Math.random() * (celeb.length));
    // var randomNumber = Math.floor(Math.random() * (celeb.length)); // USE THIS ONE FOR PULLING UP PICTURES
    var randomNumber2 = Math.floor(Math.random() * (verb.length));
    var randomNumber3 = Math.floor(Math.random() * (noun.length));
    document.getElementById('Output').innerHTML = 'Today, we are cancelling ' + celeb[randomNumber] + ' for ' + verb[randomNumber2] + ' ' + noun[randomNumber3] + '.';

    
}

function tweetit() {
    window.open('https://twitter.com/intent/tweet?hashtags= Cancelled&text=' + document.getElementById('Output').innerHTML + ' https://bit.ly/2QBMs02');
  }