// Erstelle ein Formular, in dem du eine Zahl eingeben kannst.
// Erstelle einen Button, der eine Funktion aufruft.

// Deklariere eine Funktion, die den Wert aus deinem Input mit 2 multipliziert. 
// Das Ergebnis soll in deinem HTML ausgegeben werden.

// Versuche es weiter, bis du es schaffst. Viel Erfolg!

// Hinweise
// gib deiner form onsubmit="return false" falls sich deine Seite nach dem Absenden neu lädt

function calculate(){
    let a = document.getElementById("number").value;
    document.getElementById("result").innerHTML = a * 2;
    console.log(a * 2);
}



// Event = Onclick, OnFocusw
