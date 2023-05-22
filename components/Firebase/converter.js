//User converter
  //Vamos criar uma classe para enviar as infos da pessoa!
  export class User {
    constructor (email, nome, token) {
      this.email = email;
      this.nome = nome;
      this.token = token;
    }
    toString() {
      return this.email + ',' + this.nome + ',' + this.token;
    }
  }
  //Agora um conversor do FB para as infos do User
  export const userConverter = {
    toFirestore: (user) => {
        return {
          email: user.email,
          nome: user.nome,
          token: user.token,
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.email, data.nome, data.token);
    }
};

export class Funcionario{
  constructor(nomeFuncionario,email,cargo){
    this.nomeFuncionario = nomeFuncionario;
    this.email = email;
    this.cargo = cargo;
  }
  toString() {
    return this.nomeFuncionario + ',' + this.email + ',' + this.cargo;
  }
}
export const funcionarioConverter = {
  toFirestore:(funcionario)=>{
    return{
      nomeFuncionario:funcionario.nomeFuncionario,
      email:funcionario.email,
      cargo:funcionario.cargo,
    };
  },
  fromFirestore: (snapshot,options)=>{
    const data = snapshot.data(options);
    return new Funcionario(data.nomeFuncionario,data.email,data.cargo);
  }
};


//Tasks converter
export class Conversa {
  constructor (enviadoEm, pergunta, recebidoEm, resposta ) {
    this.enviadoEm = enviadoEm;
    this.pergunta = pergunta;
    this.recebidoEm = recebidoEm;
    this.resposta = resposta;
  }
  toString() {
    return this.enviadoEm + ',' + this.pergunta + ',' + this.recebidoEm + ',' + this.resposta;
  }
}
//Agora um conversor do FB para as infos do User
export const conversaConverter = {
  toFirestore: (conversa) => {
      return {
        enviadoEm: conversa.enviadoEm,
        pergunta: conversa.pergunta,
        recebidoEm: conversa.recebidoEm,
        resposta: conversa.resposta,
          };
  },
  fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new Conversa(data.enviadoEm, data.pergunta, data.recebidoEm, data.resposta);
  }
};