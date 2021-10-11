class FantasticBeastCharacter {
  constructor(
    name,
    species,
    gender,
    born,
    status,
    nationality,
    blood_status,
    house,
    hair_color,
    eye_color,
    height,
    weight,
    marital_status,
    also_known_as,
    family_members,
    occupation,
    romances,
    loyalty,
    fandom_url
  ) {
    this.name = name;
    this.species = species;
    this.gender = gender;
    this.born = born;
    this.status = status;
    this.nationality = nationality;
    this.blood_status = blood_status;
    this.house = house;
    this.wand = wand;
    this.boggart = boggart;
    this.hair_color = hair_color;
    this.eye_color = eye_color;
    this.height = height;
    this.weight = weight;
    this.distinction = distinction;
    this.marital_status = marital_status;
    this.also_known_as = also_known_as;
    this.family_members = family_members;
    this.occupation = occupation;
    this.romances = romances;
    this.loyalty = loyalty;
    this.fandom_url = fandom_url;
  }
}

const Character1 = new FantasticBeastCharacter(
  "Newton Artemis Fido Scamander", 
  "Human", 
  "Male", 
  "February 24, 1897 - England", "Alive",
  "English", "Pure-blood or Half-blood", "Hufflepuff", "Unknown length, wood and core", "Office job", "Brown", "Hazel", "6 foot, 1 inches", "161 pounds", "Married", ["Newt -(by friends and family)", "Theseus Scamander (under disguise of Polyjuice)"], ["Ms. Scamander (mother)", "Theseus (brother)", "Porpetina Goldstein (wife)", "Rolf Scamander (grandson)", "Luna Lovegood (granddaughter-in-law)",  "Queenie Goldstein: sister-in-law", "Lorcan (great grandson)", "Lysander (great grandson)", "Scamander family"], "Porpetina Goldstein (wife)", ["Employee in the Beast Division of the Department for the Regulation and Control of Magical Creatures", "Magizoologist", "Author"], ["Scamander family", "Goldstein family", "Hogwarts School of Witchcraft and Wizardry", "Hufflepuff", "Albus Dumbledore", "British Ministry of Magic", "Department for the Regulation and Control of Magical Creatures", "Beast Division", "Order of Merlin"], "https://harrypotter.fandom.com/wiki/Newton_Scamander"
),

const Character2 = new FantasticBeastCharacter(
  "Porpentina 'Tina' Goldstein", 
  "Human", 
  "August 19, 1901 - United States of America", "Alive", 
  "American", "Half-blood", "Thunderbird", "Unknown length, wood and core", "N/A", "Brown", "Brown", "5 foot, 8 inches", "117 pounds", "Married", ["Tina -by friends and family", "Teenie/Teen -by Queenie Goldstein"], ["Mr. Goldstein: (father, deceased)", "Mrs. Goldstein (mother, deceased)", "Queenie Goldstein (sister)", "Newt Scamander (husband)", "Rolf Scamander (grandson)", "Luna Lovegood (granddaughter-in-law)", "Loran (great-grandson)", "Theseus Scamander (brother-in-law)", "Anthony Goldstein (distant relative)"], ["Achilles Tolliver (dated)", "Newt Scamander (husband)"], ["Auror", "Federal Wand Permit Officer (formerly)"], ["Goldstein family", "Scamander family", "Ilvermony School of Witchcraft and Wizardry", "Thunderbird", "Magical Congress of the United States of America", "Department of Magical Law Enforcement", "Department of Aurors", "Wand Permit Office (formerly)"], "https://harrypotter.fandom.com/wiki/Porpentina_Goldstein"
),

Character3 = new FantasticBeastCharacter(
  "Jacob Kowalski", "Human", "Male", "Between December 6, 1899 and December 1900 - Poland", "Alive", "American", "No-Maj", "N/A", "N/A", "N/A", "Brown", "Dark brown", "5 foot, 7 inches", "188 pounds", "Engaged (as of 1927)", "N/A", ["Mr. Kowalski (brother)", "Unamed grandfather", "Unnamed grandmother", "Quentin Kowalski (possibly)"], ["Mildred (ex-fiance)", "Queenie Goldstein"], ["Serviceman in the U.S. Expeditionary Forces (formerly)", "Worker at Moreton Dale Canning Factory (formerly)", "Owner of Kowalski Quality Baked Goods"], ["Kowalski family", "Kowalski Quality Baked Goods", "Newt Scamander"], "https://harrypotter.fandom.com/wiki/Jacob_Kowalski"
),

Character4 = new FantasticBeastCharacter(
  "Queenie Goldstein", "Human", "Female", "January 6, 1903 - United States of America", "Alive", "American", "Half-blood", "Pukwudgie", "Unconfirmed wood, length and wand core", "N/A", "Green", "Strawberry Blond", "5 foot, 5 inches", "N/A", "Engaged", "N/A", ["Mr. Goldstein (deceased)", "Mrs. Goldstein (deceased)", "Porpentina Goldstein (sister)", "Newton Scamander (brother-in-law)", "Rolf Scamander (great-nephew)", "Luna Lovegood (great-niece-in-law)", "Anthony Goldstein (distant relative)", "Lysander (great great nephew)", "Lorcan (great great nephew)"], "Jacob Kowalski", "Desk job in the Wand Permit Office (formerly)",["Ilvermorny School of Witchcraft and Wizardry", "Pukwudgie", "Magical Congress of the United States of America (formerly)", "Goldstein family", "Gellert Grindelwald", "The Alliance"], "https://harrypotter.fandom.com/wiki/Queenie_Goldstein"
)

Character5 = new FantasticBeastCharacter(
  "Percival Graves",
  "Human", "Male", "Before 1886", "Dead", "American", "N/A", "N/A", "Unknown length, wood, and core", "Dark", "Dark", "N/A", "N/A", "N/A", "N/A", ["Gondulphus Graves (ancestor)", "Merton Graves (possible relative)"], ["Director of Magical Security", "Head of the Department of Magical Law Enforcement", "Auror"], "N/A", ["Magical Congress of the United States of America", "Department of Magical Law Enforcement", "Investigative Team", "Graves family"], "https://harrypotter.fandom.com/wiki/Percival_Graves"

)

Character6 = new FantasticBeastCharacter(
  "Credence Barebone", "Human (Obscurial)", "Male", "c. 1901", "Alive", "American", "Half-blood or Pure-blood (possibly)", "N/A", "Unknown length, wood, and core", "N/A", "Black", "Brown", "N/A", "N/A", "Single", ["Aurelius Dumbledore (alleged birth name)", "Corvus Lestrange V (mistakenly believed identity)"], ["Dumbledore family (alleged biological family)", "Mother (biological mother)", "Mary Lou Barebone (adoptive mother) (deceased)", "Chastity Barebone (adopted sister) (deceased)", "Modesty Barebone (adopted sister)", "Aunt (deceased)"], ["Volunteer for Second Salem Church (formerly)", "Circus Arcanus (formerly)"], "Nagini", ["Barebone family (formerly)", "Circus Arcanus (formerly)", "Gellert Grindelwald", "The Alliance"], "https://harrypotter.fandom.com/wiki/Credence_Barebone"
)

Character7 = new FantasticBeastCharacter(
  "Mary Lou Barebone", "Human", "Female", "Before 1926", "Deceased - December 7, 1926, Pike Street, New York City, New York, USA", "American", "No-Maj", "N/A", "N/A", "N/A", "Brown", "Blue", "5 foot, 3 inches", "N/A", "N/A", "N/A", ["Bartholomew Barebone (ancestor)", "Chastity Barebone (adopted daughter) (deceased)", "Credence Barebone (adopted son)", "Modesty Barebone (adopted daughter)"], "Leader of the New Salem Philanthrophic Society", ["Barebone family", "New Salem Philanthropic Society", "Second Salem Church"], "https://harrypotter.fandom.com/wiki/Mary_Lou_Barebone"
)

Character8 = new FantasticBeastCharacter(
  "Seraphina Picquery", "Human", "Female", "Pre 1903, Savannah, Georgia, USA", "Alive", "American", "N/A", "Horned Serpent", "Swamp mayhaw and Rougarou hair, unknown length", "N/A", "Blonde", "Brown", "N/A", "N/A", "N/A", ["President", "Madam"], ["Lucas Picquery (possible relative)", "Picquery family"], "President of the Magical Congress of the United States (formerly)", "N/A", ["Picquery family", "Ilvermorny School of Witchcraft and Wizardry", "Horned Serpent", "Magical Congress of the United States of America"], "https://harrypotter.fandom.com/wiki/Seraphina_Picquery"
)

Character9 = new FantasticBeastCharacter(
  "Nagini", "Human (Maledictus affliction", "Female", "Before 1927, Indonesia (possibly)", "N/A", "N/A", "Underbeing", "N/A", "N/A", "N/A", "Black", "N/A", "N/A", "N/A", "Single", "The Snake Girl", "N/A", "Circus performer for the Circus Arcanus (formerly)", "Credence Barebone", ["Circus Arcanus (formerly), Credence Barebone (formerly), Newt Scamander (formerly)"], "https://harrypotter.fandom.com/wiki/Nagini"
)

Character10 = new FantasticBeastCharacter(
  "Henry Shaw Senior", "Human", "Male", "pre 1854", "Alive", "American", "No-Maj", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", ["Henry Shaw Jr. (son) (deceased)", "Langdon Shaw (son)"], ["Newspaper magnate", "Owner of Shaw News"], "N/A", "Shaw family", "https://harrypotter.fandom.com/wiki/Henry_Shaw_Senior"
)

Character11 = new FantasticBeastCharacter(
  "Langdon Shaw", "Human", "Male", "Before 1926", "Alive", "American", "No-Maj", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", ["Henry Shaw Senior (father)", "Henry Shaw Junior (brother) (deceased)"], "Shaw family", "https://harrypotter.fandom.com/wiki/Langdon_Shaw" 
)

Character12 = new FantasticBeastCharacter(
  "Gnarlak", "Goblin", "Male", "Pre 1927", "Alive", "American", "N/A", "N/A", "N/A", "N/A", "Brown", "Black", "N/A", "N/A", "N/A", "N/A", "N/A", ["Gangster", "Owner of the Blind Pig"], "N/A", "The Blind Pig", "https://harrypotter.fandom.com/wiki/Gnarlak"
)

Character13 = new FantasticBeastCharacter(
  "Modesty Barebone", "Human", "Female", "between December 1917 and December 1918", "Alive", "American", "No-Maj (likely)", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", ["Biological father", "Biological mother", "Nine biological siblings", "Mary Lou Barebone (adoptive mother) (deceased)", "Chastity Barebone (adopted sister) (deceased)", "Credence Barebone (adopted brother)"], "N/A", "N/A", "Barebone family", "https://harrypotter.fandom.com/wiki/Modesty_Barebone"
)

Character13 = new FantasticBeastCharacter(
  "Chastity Barebone", "Human", "Female", "between c. 1901 and December 7, 1905", "Deceased", "N/A", "No-Maj", "N/A", "N/A", "N/A", "Strawberry blonde", 
  "Blue", "N/A", "N/A", "N/A", "N/A", ["Mary Lou Barebone (adoptive mother) (deceased)", "Credence Barebone (adopted brother)", "Modesty Barebone (adopted sister)"], "N/A", "N/A", ["New Salem Philanthropic Society", "Second Salem Church", "Barebone family"], "https://harrypotter.fandom.com/wiki/Chastity_Barebone"
)

Character14 = new FantasticBeastCharacter(
  "Abernathy", "Human", "Male", "Before 1909 (likely)", "Alive", "American", "N/A", "N/A", "Unknown length, wood and core", "N/A", "Brown", "Brown", "N/A", "N/A", "N/A", "N/A", "N/A", "Supervisor for the Wand Permit Office of the Magical Congress of the United States of America (formerly)", ["Magical Congress of the United States of America (formerly)", "Wand Permit Office (formerly)", "Gellert Grindelwald", "The Alliance"], "https://harrypotter.fandom.com/wiki/Abernathy"
)