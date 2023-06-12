var score = 0;
var scoreText;
var highScore = 0;
var highScoreText;


var createHud = function() {
    var hudTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    // Create a Text Block that can display the current score
    scoreText = new BABYLON.GUI.TextBlock();
    scoreText.fontFamily = "calibri";
    scoreText.color = "white";
    scoreText.fontSize = 56;
    scoreText.verticalAlignment = BABYLON.GUI.TextBlock.VERTICAL_ALIGNMENT_TOP;
    scoreText.horizontalAlignment = BABYLON.GUI.TextBlock.HORIZONTAL_ALIGNMENT_CENTER;
    scoreText.width = .5;
    scoreText.height = .20;

    // Create a Text Block that can display the high score
    highScoreText = new BABYLON.GUI.TextBlock();
    highScoreText.fontFamily = "calibri";
    highScoreText.color = "aqua";
    highScoreText.fontSize = 56;
    highScoreText.verticalAlignment = BABYLON.GUI.TextBlock.VERTICAL_ALIGNMENT_TOP;
    highScoreText.horizontalAlignment = BABYLON.GUI.TextBlock.HORIZONTAL_ALIGNMENT_RIGHT;
    highScoreText.width = .5;
    highScoreText.height = .20;
    
    updateScoreText();
    updateHighScoreText();

    hudTexture.addControl(scoreText);
    hudTexture.addControl(highScoreText);
}

var updateScoreText = function() {
    scoreText.text = `Score: ${score.toFixed()}`;
}

var updateHighScoreText = function() {
    highScoreText.text = `High Score: ${highScore.toFixed()}`;
}

var resetScore = function() {
    console.log(`Score reset at: ${score.toFixed()}`);
    score = 0;
    updateScoreText();
}

var addScore = function(points) {
    score += points;
    updateScoreText();
}

var updateHighScore = function(score) {

    if(score > highScore) {
        highScore = score;

        updateHighScoreText();
    };

}