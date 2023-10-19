function startGame(level) {
    // レベルに応じて問題をロードおよび表示
    const kanjiList = getKanjiForLevel(level);
    // ここで、選択したレベルに基づいて漢字データを取得します。

    // HTML要素の取得
    const container = document.querySelector('.container');
    container.innerHTML = ''; // 以前のコンテンツをクリア

    // 問題の表示
    const wordContainer = document.createElement('div');
    wordContainer.id = 'word-container';
    wordContainer.innerHTML = '<span id="target-word"></span>';
    container.appendChild(wordContainer);

    const guessInput = document.createElement('input');
    guessInput.type = 'text';
    guessInput.id = 'guess-input';
    guessInput.placeholder = '漢字を入力';
    container.appendChild(guessInput);

    const checkButton = document.createElement('button');
    checkButton.id = 'check-button';
    checkButton.textContent = '確認';
    container.appendChild(checkButton);

    const resultMessage = document.createElement('p');
    resultMessage.id = 'result';
    container.appendChild(resultMessage);

    // ゲームの初期化
    let currentQuestionIndex = 0;
    initializeGame();

    checkButton.addEventListener('click', () => {
        const userGuess = guessInput.value;
        const correctAnswer = kanjiList[currentQuestionIndex].answer;

        if (userGuess === correctAnswer) {
            resultMessage.textContent = '正解です！';

            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < kanjiList.length) {
                    initializeGame();
                } else {
                    resultMessage.textContent = '全問正解おめでとうございます！';
                    checkButton.disabled = true;
                }
            }, 3000);
        } else {
            resultMessage.textContent = `不正解です。正解は ${correctAnswer} です。`;
        }
    });

    function initializeGame() {
        const targetWordElement = document.getElementById('target-word');
        targetWordElement.textContent = kanjiList[currentQuestionIndex].kanji;
        resultMessage.textContent = '';
        guessInput.value = '';
        checkButton.disabled = false;
    }
}

// レベルごとの漢字データを取得する関数
function getKanjiForLevel(level) {
    // レベルに応じて漢字データを取得または生成します。
    // この部分はゲームのデータベースや外部データソースからデータを取得するロジックに置き換えることができます。
    // 以下は仮想的な例です。
    const kanjiData = {
        1: [
            { kanji: '山', answer: 'やま' },
            { kanji: '川', answer: 'かわ' },
            // 他の漢字データ
        ],
        2: [
            // レベル2の漢字データ
        ],
        // 他のレベルの漢字データ
    };

    return kanjiData[level] || [];
}
