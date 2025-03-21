/**
 *  Monstruo al que tienes que destruir al final del juegos 
 */
class Boss extends Opponent {

    /**
     * Inicializa un jugador
     * @param game {Game} La instancia del juego al que pertenece el oponente final (el jefe)
     */
    constructor (game) {

        const height = OPPONENT_HEIGHT * game.width / 100,
            width = OPPONENT_WIDTH * game.width / 100,
            x = getRandomNumber(game.width - width / 2),
            y = 0,
            speed = 10,
            myImage = BOSS_PICTURE,
            myImageDead = BOSS_PICTURE_DEAD;

        super(game);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.myImage = myImage;        
        this.myImageDead = myImageDead;
        
    }


    /**
     * Mata al oponente
     */
    collide() {
        
        if (!this.dead) {
            setTimeout(() => {
                //this.game.removeOpponent();    
                //this.game.updateScore();            
                game.endGame();
            }, 2000);
            this.image.src = this.myImageDead;
            this.dead      = true;
        }

    }

}