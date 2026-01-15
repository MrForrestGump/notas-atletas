class NotasAtletas{
    constructor(atletas){
      this.atletas = atletas;
    }

    obterMedias(){
      let notas = this.atletas.map(atleta => atleta.notas.sort((a,b) => a - b));
      notas = notas.map(nota => nota.slice(1,4));
      //ordenando as notas e retirando a menor e maior nota

      let soma = 0;
      //variável para utilizar na soma das notas

      for(let i = 0; i < this.atletas.length; i++){
        notas[i].forEach(function(nota) {
           soma += nota;
        });
        //soma todas a notas do this.atletas[i]

        this.atletas[i].media = soma /3;
        soma = 0;
        //atribue uma nova chave: media, para o objeto e zera a soma para o próximo atleta
      }

    }

    imprimirInfoAtletas(){

      this.atletas.forEach(function (atleta){
        console.log(`Nome: ${atleta.nome}\nNotas Obtidas: ${atleta.notas}\nMédia Válida: ${atleta.media}`);
        
      });

    }
}



let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

let notasAtletas = new NotasAtletas(atletas);

notasAtletas.obterMedias();

notasAtletas.imprimirInfoAtletas();