class Jogo
{
    constructor()
    {
        this.jogador1 = new Jogador();
        this.jogador2 = new Jogador();
        this.baralho = new Baralho();
        
        this.atributo;
        this.texto;
        this.textoVencedor1;
        
        this.jogando = "1";
        this.textoPontos1 = 0;
        this.textoPontos2 = 0;
    }
    iniciarJogo(j1, j2, baralho)
    {
        this.jogador1 = j1;
        this.jogador2 = j2;
        this.baralho = baralho  ;
       
    }
    iniciarRodada()
    {
        this.baralho.iniciarBaralho();
        this.jogador1.carta1 = this.baralho.sortear();
        console.log(this.jogador1.carta1);
        this.jogador2.carta1 = this.baralho.sortear();
        console.log(this.jogador2.carta1);
    }
   
    enviarSegundaCarta()
    {
        this.jogador1.carta2 = this.baralho.sortear();
        console.log(this.jogador1.carta2);
        this.jogador2.carta2 = this.baralho.sortear();
        console.log(this.jogador2.carta2);
    }
    calcularVencedor(){
        switch (this.atributo) {
            case "altura":
                if(this.jogador1.carta1.altura + this.jogador1.carta2.altura > this.jogador2.carta1.altura + this.jogador2.carta2.altura){
                    this.jogando = "1";
                    this.textoPontos1+=1;
                    return "JOGADOR 1 VENCEU MEU CUPINXA!";
                   
                }else{
                    this.jogando = "2";
                    this.textoPontos2+=1;
                    return "JOGADOR 2 VENCEU MEU CUPINXA!";
                }
                break; 
            case "peso":
                if(this.jogador1.carta1.peso + this.jogador1.carta2.peso > this.jogador2.carta1.peso + this.jogador2.carta2.peso){
                    this.jogando = "1";
                    this.textoPontos1+=1;
                    return "JOGADOR 1 VENCEU MEU CUPINXA";   
                }else{
                    this.jogando = "2";
                    this.textoPontos2+=1;
                    return "JOGADOR 2 VENCEU MEU CUPINXA";   
                }
                break;
            case "forca":
                if(this.jogador1.carta1.forca + this.jogador1.carta2.forca > this.jogador2.carta1.forca + this.jogador2.carta2.forca){
                    this.jogando = "1";
                    this.textoPontos1+=1;
                    return "JOGADOR 1 VENCEU MEU CUPINXA";    
                }else{
                    this.jogando = "2";
                    this.textoPontos2+=1;
                    return "JOGADOR 2 VENCEU MEU CUPINXA"; 
                }
            break;
            case "velocidade":
                if(this.jogador1.carta1.velocidade + this.jogador1.carta2.velocidade > this.jogador2.carta1.velocidade + this.jogador2.carta2.velocidade){
                    this.jogando = "1";
                    this.textoPontos1+=1;
                    return "JOGADOR 1 VENCEU MEU CUPINXA";   
                }else{
                    this.jogando = "2";
                    this.textoPontos2+=1;
                    return "JOGADOR 2 VENCEU MEU CUPINXA";   
                }
            break;
            case "peleasGanadas":
                if(this.jogador1.carta1.peleasGanadas + this.jogador1.carta2.peleasGanadas > this.jogador2.carta1.peleasGanadas + this.jogador2.carta2.peleasGanadas){
                    this.jogando = "1";
                    this.textoPontos1+=1;
                    return "JOGADOR 1 VENCEU MEU CUPINXA";   
                }else{
                    this.jogando = "2";
                    this.textoPontos2+=1;
                    return "JOGADOR 2 VENCEU MEU CUPINXA";   
                }
            break;
               
        }
    }
}