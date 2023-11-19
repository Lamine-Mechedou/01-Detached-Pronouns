let pronouns = document.querySelector("pronouns");
let botones = document.querySelectorAll("items");


function displayI(){
    let pronoun = "أنا";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;

    playAudioAna();
    return;
}

function playAudioAna() {
    // Get the audio element
    let audioElement = document.getElementById("pronounAudioAna");
    
    // Play the audio
    audioElement.play();
  }


function borrarPronoun(){
    let pronoun = "Click on a pronoun";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;
    return;
}

function displayYouMs(){
    let pronoun = "أنتَ";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;

    playAudioAnta();
    return;
}

function playAudioAnta() {
    // Get the audio element
    let audioElement = document.getElementById("pronounAudioAnta");
    
    // Play the audio
    audioElement.play();
  }



function displayYouFm(){
    let pronoun = "أَنت";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;
    playAudioAnti();
}

function playAudioAnti() {
    // Get the audio element
    let audioElement = document.getElementById("pronounAudioAnti");
    
    // Play the audio
    audioElement.play();
  }



function displayHe(){
    let pronoun = "هُوَ";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;
    playAudioHuwa();
}

function playAudioHuwa() {
    // Get the audio element
    let audioElement = document.getElementById("pronounAudioHuwa");
    
    // Play the audio
    audioElement.play();
  }

function displayShe(){
    let pronoun = "هِيَ";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;
    playAudioHiya();
}

function playAudioHiya() {
    // Get the audio element
    let audioElement = document.getElementById("pronounAudioHiya");
    
    // Play the audio
    audioElement.play();
  }


function displayWe(){
    let pronoun = "نَحْنُ";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;
    playAudioNahnu();
}

function playAudioNahnu() {
    // Get the audio element
    let audioElement = document.getElementById("pronounAudioNahnu");
    
    // Play the audio
    audioElement.play();
  }

function displayYouPlMs(){
    let pronoun = "أَنْتُم";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;
    playAudioAntum();
}

function playAudioAntum() {
    // Get the audio element
    let audioElement = document.getElementById("pronounAudioAntum");
    
    // Play the audio
    audioElement.play();
  }


function displayYouPlFm(){
    let pronoun = "أَنْتُنَّ";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;
    playAudioAntuna();
}

function playAudioAntuna() {
    // Get the audio element
    let audioElement = document.getElementById("pronounAudioAntuna");
    
    // Play the audio
    audioElement.play();
  }

function displayTheyMs(){
    let pronoun = "هُم";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;
    playAudioHum();
}

function playAudioHum() {
    // Get the audio element
    let audioElement = document.getElementById("pronounAudioHum");
    
    // Play the audio
    audioElement.play();
  }

function displayTheyFm(){
    let pronoun = "هُنَّ";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;
    playAudioHuna();
}

function playAudioHuna() {
    // Get the audio element
    let audioElement = document.getElementById("pronounAudioHuna");
    
    // Play the audio
    audioElement.play();
  }


function displayYouDual(){
    let pronoun = "أَنْتُما";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;
    playAudioAntuma();
}

function playAudioAntuma() {
    // Get the audio element
    let audioElement = document.getElementById("pronounAudioAntuma");
    
    // Play the audio
    audioElement.play();
  }

function displayTheyDual(){
    let pronoun = "هُما";
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = pronoun;
    playAudioHuma();
}

function playAudioHuma() {
    // Get the audio element
    let audioElement = document.getElementById("pronounAudioHuma");
    
    // Play the audio
    audioElement.play();
  }