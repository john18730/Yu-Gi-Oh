var game;
window.onload = function() {
 
    // game configuration object
    let gameConfig = {
 
        // resolution and scale mode
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1200,
            height: 800
        },
       
 
       // game background color
       backgroundColor: 'black',
 
       // scenes used by the game
       scene: [TelaInicial, PlayGame, BaralhoTela, Instrucoes]
    };
 
  
    // game constructor
    game = new Phaser.Game(gameConfig);
 
    // pure javascript to give focus to the page/frame
    window.focus()
    
}
