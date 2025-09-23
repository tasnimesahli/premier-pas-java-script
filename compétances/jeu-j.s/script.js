let personalP = prompt("Saisir votre nom pour commencer le quiz :");
const questions = [
    { q: "Quelle est la capitale du Maroc ?", r: "Rabat" },
    { q: "Quelle est la monnaie officielle du Maroc ?", r: "Dirham" },
    { q: "Quelle est la plus grande ville du Maroc ?", r: "Casablanca" },
    { q: "Quel est le désert qui couvre le sud du Maroc ?", r: "Sahara" },
    { q: "Quelle est la langue officielle du Maroc ?", r: "Arabe" } 
];
let score = 0;
function quiz() {
    for (let i = 0; i < questions.length; i++) {
        console.log("Question " + (i + 1));
        let reponse = prompt(questions[i].q);
        if (reponse !== "" && reponse.toLowerCase() === questions[i].r.toLowerCase()) {
            console.log("✅ Correct! La réponse est " + questions[i].r);
            score++;
        } else {
            console.log("❌ Incorrect. La bonne réponse est " + questions[i].r);
        }
}
console.log("Score final: " + score + " / " + questions.length);
if (score === questions.length) {
    console.log("🌟 Bravo ! Tu connais très bien le Maroc!");
} else if (score >= 3) {
    console.log("👍 Bien joué , continue d'apprendre sur ton pays!");
} else {
    console.log("⚠️ Courage, révise un peu plus sur le Maroc!");
}
}
quiz();