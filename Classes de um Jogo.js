class hero{
    constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

   attack(){
    const ataques = [
        {tipo: "mago", ataque: "magia"},
        {tipo: "guerreiro", ataque: "espada"},
        {tipo: "monge", ataque: "artes marciais"},
        {tipo: "ninja", ataque: "shuriken"}
    ];

        let ataque = "ataque desconhecido";

        for (let i = 0; i < ataques.length; i++){
            if (ataques[i].tipo === this.tipo){
                ataque = ataques[i].ataque;
                break;
            }
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);

   }
      
   }
    

const heroi1 = new hero("Joao", 100, "mago");
const heroi2 = new hero("Antonio", 107, "guerreiro");
const heroi3 = new hero("Romeu", 1000, "monge");
const heroi4 = new hero("Naruto", 162, "ninja");

heroi1.attack();
heroi2.attack(); 
heroi3.attack(); 
heroi4.attack(); 