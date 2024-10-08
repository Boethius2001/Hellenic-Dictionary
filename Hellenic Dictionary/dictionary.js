const Titles = [
    {
        Title: "Zeus",
        TitleAlt: "Jupiter",
        Explanation: "<b>Greek:</b> Ζεύς, <b>Latin:</b> Jupiter, <b>Romanized:</b> Zeus.<br>Zeus is the king of the gods in ancient Greek mythology, ruler of Mount Olympus, and god of the sky, lightning, and thunder. He is considered the most powerful of the Olympian gods."
    },
    {
        Title: "Hera",
        TitleAlt: "Juno",
        Explanation: "<b>Greek:</b> Ἥρα, <b>Latin:</b> Juno, <b>Romanized:</b> Hera.<br>Hera is the queen of the gods and the goddess of marriage and family. She is the wife and sister of Zeus, known for her jealousy and often portrayed as a protector of women."
    },
    {
        Title: "Uranus",
        TitleAlt: "Caelus",
        Explanation: "<b>Greek:</b> Οὐρανός, <b>Latin:</b> Caelus, <b>Romanized:</b> Ouranos.<br>Uranus is the primordial god of the sky and one of the first deities in Greek mythology. He is the father of the Titans, born from Gaia, the Earth."
    },
    {
        Title: "Gaia",
        TitleAlt: "Terra",
        Explanation: "<b>Greek:</b> Γαῖα, <b>Latin:</b> Terra, <b>Romanized:</b> Gaia.<br>Gaia is the personification of Earth in Greek mythology, considered the mother of all life. She gave birth to the Titans and many other divine beings."
    },
    {
        Title: "Athena",
        TitleAlt: "Minerva",
        Explanation: "<b>Greek:</b> Ἀθηνᾶ, <b>Latin:</b> Minerva, <b>Romanized:</b> Athena.<br>Athena is the goddess of wisdom, warfare, and strategy. Born from Zeus's head fully armored, she is a virgin goddess and the patron of the city of Athens."
    },
    {
        Title: "Artemis",
        TitleAlt: "Diana",
        Explanation: "<b>Greek:</b> Ἄρτεμις, <b>Latin:</b> Diana, <b>Romanized:</b> Artemis.<br>Artemis is the goddess of the hunt, wilderness, and childbirth. She is the twin sister of Apollo and is often depicted with a bow and arrow."
    },
    {
        Title: "Aphrodite",
        TitleAlt: "Venus",
        Explanation: "<b>Greek:</b> Ἀφροδίτη, <b>Latin:</b> Venus, <b>Romanized:</b> Aphrodite.<br>Aphrodite is the goddess of love, beauty, and desire. Born from the sea foam, she is one of the most revered deities in ancient Greece."
    },
    {
        Title: "Apollo",
        TitleAlt: "Apollo",
        Explanation: "<b>Greek:</b> Ἀπόλλων, <b>Latin:</b> Apollo, <b>Romanized:</b> Apollon.<br>Apollo is the god of the sun, music, poetry, and prophecy. He is the twin brother of Artemis and is often associated with the Oracle of Delphi."
    },
    {
        Title: "Poseidon",
        TitleAlt: "Neptune",
        Explanation: "<b>Greek:</b> Ποσειδῶν, <b>Latin:</b> Neptune, <b>Romanized:</b> Poseidon.<br>Poseidon is the god of the sea, earthquakes, and horses. He is one of the Olympian gods and brother to Zeus and Hades."
    },
    {
        Title: "Demeter",
        TitleAlt: "Ceres",
        Explanation: "<b>Greek:</b> Δημήτηρ, <b>Latin:</b> Ceres, <b>Romanized:</b> Demeter.<br>Demeter is the goddess of agriculture, fertility, and the harvest. She is the mother of Persephone and plays a central role in the Eleusinian Mysteries."
    },
    {
        Title: "Hermes",
        TitleAlt: "Mercury",
        Explanation: "<b>Greek:</b> Ἑρμῆς, <b>Latin:</b> Mercury, <b>Romanized:</b> Hermes.<br>Hermes is the messenger of the gods, god of trade, thieves, and travelers. He is known for his speed and cunning, often depicted with winged sandals."
    },
    {
        Title: "Dionysos",
        TitleAlt: "Bacchus",
        Explanation: "<b>Greek:</b> Διόνυσος, <b>Latin:</b> Bacchus, <b>Romanized:</b> Dionysos.<br>Dionysos is the god of wine, revelry, and fertility. He is associated with the liberating effects of wine and is the patron of theater and festivities."
    },
    {
        Title: "Hephaistos",
        TitleAlt: "Vulcan",
        Explanation: "<b>Greek:</b> Ἥφαιστος, <b>Latin:</b> Vulcan, <b>Romanized:</b> Hephaistos.<br>Hephaistos is the god of fire, metalworking, and craftsmanship. He is the blacksmith of the gods, known for creating their weapons and armor."
    },
    {
        Title: "Hestia",
        TitleAlt: "Vesta",
        Explanation: "<b>Greek:</b> Ἑστία, <b>Latin:</b> Vesta, <b>Romanized:</b> Hestia.<br>Hestia is the goddess of the hearth, home, and family. She is one of the original Olympian gods, known for her role in maintaining the sanctity of the household."
    },
    {
        Title: "Asklepios",
        TitleAlt: "Aesculapius",
        Explanation: "<b>Greek:</b> Ἀσκληπιός, <b>Latin:</b> Aesculapius, <b>Romanized:</b> Asklepios.<br>Asklepios is the god of medicine and healing. He is the son of Apollo and is often depicted holding a staff with a serpent coiled around it."
    },
    {
        Title: "Hades",
        TitleAlt: "Pluto",
        Explanation: "<b>Greek:</b> ᾍδης, <b>Latin:</b> Pluto, <b>Romanized:</b> Hades.<br>Hades is the god of the underworld and the dead. He is one of the three brothers, along with Zeus and Poseidon, who rule over different realms."
    },
    {
        Title: "Eros",
        TitleAlt: "Cupid",
        Explanation: "<b>Greek:</b> Ἔρως, <b>Latin:</b> Cupid, <b>Romanized:</b> Eros.<br>Eros is the god of love and desire, often depicted as a young winged boy with a bow and arrows. He is the son of Aphrodite and plays a key role in myths of love."
    },
    {
        Title: "Tykhe",
        TitleAlt: "Fortuna",
        Explanation: "<b>Greek:</b> Τύχη, <b>Latin:</b> Fortuna, <b>Romanized:</b> Tykhe.<br>Tykhe is the goddess of fortune and prosperity, often associated with the unpredictable aspects of life, such as luck and fate."
    },
    {
        Title: "Pan",
        TitleAlt: "Faunus",
        Explanation: "<b>Greek:</b> Πάν, <b>Latin:</b> Faunus, <b>Romanized:</b> Pan.<br>Pan is the god of the wild, shepherds, and flocks. He is depicted with the legs and horns of a goat, and his music is said to inspire panic in those who hear it."
    },
    {
        Title: "Nike",
        TitleAlt: "Victoria",
        Explanation: "<b>Greek:</b> Νίκη, <b>Latin:</b> Victoria, <b>Romanized:</b> Nike.<br>Nike is the goddess of victory, often depicted with wings. She is associated with success in both war and peaceful competition."
    },
    {
        Title: "Selene",
        TitleAlt: "Luna",
        Explanation: "<b>Greek:</b> Σελήνη, <b>Latin:</b> Luna, <b>Romanized:</b> Selene.<br>Selene is the goddess of the moon, often depicted driving a chariot across the night sky. She is considered the sister of Helios, the sun god."
    },
    {
        Title: "Eos",
        TitleAlt: "Aurora",
        Explanation: "<b>Greek:</b> Ἠώς, <b>Latin:</b> Aurora, <b>Romanized:</b> Eos.<br>Eos is the goddess of the dawn, who opens the gates of heaven for the Sun to rise each morning. She is often depicted with rosy fingers bringing the first light of day."
    },
    {
        Title: "Ares",
        TitleAlt: "Mars",
        Explanation: "<b>Greek:</b> Ἄρης, <b>Latin:</b> Mars, <b>Romanized:</b> Ares.<br>Ares is the god of war, representing the brutal and violent aspects of battle. He is often depicted in armor and is one of the most feared Olympian gods."
    },
    {
        Title: "Helios",
        TitleAlt: "Sol",
        Explanation: "<b>Greek:</b> Ἥλιος, <b>Latin:</b> Sol, <b>Romanized:</b> Helios.<br>Helios is the god of the Sun, who drives a chariot across the sky each day, bringing daylight to the world. He is later associated with Apollo in some traditions."
    },
    {
        Title: "Persephone",
        TitleAlt: "Proserpina",
        Explanation: "<b>Greek:</b> Περσεφόνη, <b>Latin:</b> Proserpina, <b>Romanized:</b> Persephone.<br>Persephone is the goddess of the underworld and the daughter of Demeter. She became the queen of the underworld after being abducted by Hades."
    },
    {
        Title: "Chronos",
        TitleAlt: "Saturn",
        Explanation: "<b>Greek:</b> Χρόνος, <b>Latin:</b> Saturn, <b>Romanized:</b> Chronos.<br>Chronos is the personification of time, often depicted as an old man with a scythe. He is sometimes confused with the Titan Kronos, though they represent different concepts."
    },
    {
        Title: "Kronos",
        TitleAlt: "Saturn",
        Explanation: "<b>Greek:</b> Κρόνος, <b>Latin:</b> Saturn, <b>Romanized:</b> Kronos.<br>Kronos is the leader of the Titans and the father of Zeus, Poseidon, and Hades. He is known for swallowing his children to prevent them from overthrowing him."
    },
    {
        Title: "Rhea",
        TitleAlt: "Ops",
        Explanation: "<b>Greek:</b> Ῥέα, <b>Latin:</b> Ops, <b>Romanized:</b> Rhea.<br>Rhea is the mother of the Olympian gods, wife of Kronos, and goddess of fertility and motherhood. She saved her youngest son Zeus from being swallowed by Kronos."
    },
    {
        Title: "Nyx",
        TitleAlt: "Nox",
        Explanation: "<b>Greek:</b> Νύξ, <b>Latin:</b> Nox, <b>Romanized:</b> Nyx.<br>Nyx is the primordial goddess of the night, a powerful and ancient figure who is said to be feared even by Zeus. She is often depicted as a shadowy figure shrouded in darkness."
    },
    {
        Title: "Hypnos",
        TitleAlt: "Somnus",
        Explanation: "<b>Greek:</b> Ὕπνος, <b>Latin:</b> Somnus, <b>Romanized:</b> Hypnos.<br>Hypnos is the god of sleep, often depicted as a gentle figure who lulls people into peaceful slumber. He is the twin brother of Thanatos, the god of death."
    },
    {
        Title: "Thanatos",
        TitleAlt: "Mors",
        Explanation: "<b>Greek:</b> Θάνατος, <b>Latin:</b> Mors, <b>Romanized:</b> Thanatos.<br>Thanatos is the personification of death, often depicted as a winged, somber figure. He is not a god of violence but represents a peaceful passing from life."
    },
    {
        Title: "Eris",
        TitleAlt: "Discordia",
        Explanation: "<b>Greek:</b> Ἔρις, <b>Latin:</b> Discordia, <b>Romanized:</b> Eris.<br>Eris is the goddess of strife and discord. She is known for instigating the events that led to the Trojan War by throwing the golden apple labeled 'For the fairest'."
    },
    {
        Title: "Iris",
        TitleAlt: "Arcus",
        Explanation: "<b>Greek:</b> Ἶρις, <b>Latin:</b> Arcus, <b>Romanized:</b> Iris.<br>Iris is the goddess of the rainbow and a messenger of the gods, particularly of Hera. She is often depicted with wings and a rainbow-colored robe."
    },
    {
        Title: "Hecate",
        TitleAlt: "Trivia",
        Explanation: "<b>Greek:</b> Ἑκάτη, <b>Latin:</b> Trivia, <b>Romanized:</b> Hecate.<br>Hecate is the goddess of magic, witchcraft, and crossroads. She is often associated with the moon and is considered a powerful deity in both Greek and Roman mythology."
    },
    {
        Title: "Moros",
        TitleAlt: "Fatum",
        Explanation: "<b>Greek:</b> Μόρος, <b>Latin:</b> Fatum, <b>Romanized:</b> Moros.<br>Moros is the personification of doom, fate, and impending death. He is an abstract deity representing the inevitable fate that befalls every being."
    },
    {
        Title: "Nemesis",
        TitleAlt: "Invidia",
        Explanation: "<b>Greek:</b> Νέμεσις, <b>Latin:</b> Invidia, <b>Romanized:</b> Nemesis.<br>Nemesis is the goddess of retribution and vengeance, particularly against those who succumb to hubris. She ensures that justice is served and balance is maintained."
    }
    
];

function GetSearch(){

    let FirstChar;
    let LowerText;
    let FullName;

    const SearchInput = document.getElementById("SearchElement").value;
    
    FirstChar = SearchInput.charAt(0);
    FirstChar = FirstChar.toUpperCase();
    LowerText = SearchInput.slice(1,);
    LowerText = LowerText.toLowerCase();
    
    FullName = (FirstChar+LowerText).trim();
    
    DisplayResult(FullName);
}

function DisplayResult(title){
    let TitleArea = document.getElementById("TitleID");
    let ExpArea = document.getElementById("ExpID");
    let Found = false;

    for(i=0; i< Titles.length; i++){

        if(title === Titles[i].Title || title === Titles[i].TitleAlt){
            TitleArea.innerHTML = `<u>${Titles[i].Title}</u>`;
            ExpArea.innerHTML = Titles[i].Explanation;
            Found = true;
            break;
        }
    }

    if(!Found){
        TitleArea.innerHTML = title;
        if(title.length == 0){
            ExpArea.innerHTML = "Nothing found about 'Blank'";
        }
        else{
            ExpArea.innerHTML = "Nothing found about "+ title;
        }
    }

}

let GetGodList = document.getElementById("GodsList");
for(e=0; e < Titles.length; e++){
    GetGodList.innerHTML += `<li>${Titles[e].Title}</li>`;
}
console.log("Hellooo");
