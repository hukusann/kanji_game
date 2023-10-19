const kanjiList = [
    { kanji: "山", answer: "やま" },
    { kanji: "川", answer: "かわ" },
    { kanji: "木", answer: "き" },
    { kanji: "花", answer: "はな" },
    { kanji: "太陽", answer: "たいよう" },
    { kanji: "雨", answer: "あめ" },
    { kanji: "犬", answer: "いぬ" },
    { kanji: "猫", answer: "ねこ" },
    { kanji: "魚", answer: "さかな" },
    { kanji: "鳥", answer: "とり" }
];

let currentQuestionIndex = 0;

const targetWordElement = document.getElementById("target-word");
const guessInput = document.getElementById("guess-input");
const checkButton = document.getElementById("check-button");
const resultMessage = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function initializeGame() {
    targetWordElement.textContent = kanjiList[currentQuestionIndex].kanji;
    resultMessage.textContent = "";
    guessInput.value = "";
}
initializeGame();
checkButton.addEventListener("click", () => {
    const userGuess = guessInput.value;
    const correctAnswer = kanjiList[currentQuestionIndex].answer;

    if (userGuess === correctAnswer) {
        resultMessage.textContent = "正解です！";

        // 正解の場合、3秒後に次の問題に進む
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < kanjiList.length) {
                initializeGame();
                nextButton.disabled = true;
                checkButton.disabled = false;
            } else {
                resultMessage.textContent = "全問正解おめでとうございます！";
                nextButton.disabled = true;
                checkButton.disabled = true;
            }
        }, 2000); // 2秒後に次の問題に進む
    } else {
        resultMessage.textContent = `不正解です。正解は、 ${correctAnswer} です。`;
    }
})
