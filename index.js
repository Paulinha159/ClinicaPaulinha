/* Criar um sistema que irá gerenciar as consultas de uma clínica médica.
Como requisitos, nós teremos as seguintes funcionalidades:

Adicionar uma nova consulta
Listar todas as consultas
Atualizar uma consulta existente
Cancelar uma consulta */

const consultas = [];
let novaConsulta = {
    Paciente: "",
    Médico: "",
    Data: "",
    Hora: "",


};
let consulta = {}
let opcao = 0;
let cadastrandoConsulta = false;
let removendoConsulta = false;

console.log("Bem-vindos, escolha uma das opções abaixo:");
console.log("1: Digitar as informações da consulta:");
console.log("2: Caso queira remover uma consulta");
console.log("3: Atualizar consulta");
console.log("4: Para ver as consultas que inseriu");
console.log("5: Sair do programa");

process.stdin.on("data", function (data) {
    let entrada_usuario = data.toString().trim();

    if (!opcao) {
        opcao = parseInt(entrada_usuario);

        switch (opcao) {
            case 1:
                console.log("Nome do paciente:");
                cadastrandoConsulta = true;
                break;
            case 2:
                console.log("Digite o nome do paciente a ser removido:");
                removendoConsulta = true;
                break;
            case 3:
                console.log("Atualize a consulta");

            case 4:
                if (consultas.length === 0) {
                    console.log("Nenhum paciente cadastrado.");
                } else {
                    console.log("Pacientes cadastrados:");
                    consultas.forEach((consultas, index) => {
                        console.log(`${index + 1}. Nome: ${consultas.nome}, Autor: ${consultas.autor}, Tamanho: ${consultas.tamanho}, Gênero: ${consultas.genero}`);
                    });
                }
                opcao = 0;
                console.log("\nEscolha uma das opções abaixo:");
                console.log("1: Digitar as informações da consulta:");
                console.log("2: Caso queira remover uma consulta");
                console.log("3: Atualizar consulta");
                console.log("4: Para ver as consultas que inseriu");
                console.log("5: Sair do programa");
 
                break;
            case 5:
                console.log("Encerrando o programa...");
                process.exit();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                console.log("\nEscolha uma das opções abaixo:");
                console.log("1: Digitar as informações da consulta:");
                console.log("2: Caso queira remover uma consulta");
                console.log("3: Atualizar consulta");
                console.log("4: Para ver as consultas que inseriu");
                console.log("5: Sair do programa");
                
                break;
        }
    } else {
        switch (opcao) {
            case 1:
                if (cadastrandoConsulta) {
                    if (!consulta.paciente) {
                        consulta.paciente = entrada_usuario;
                        console.log("Nome do médico:");
                    } else if (!consulta.medico) {
                        consulta.medico = entrada_usuario;
                        console.log("Data:");
                    } else if (!consulta.data) {
                        consulta.data = entrada_usuario;
                        console.log("Horário:");
                    } else if (!consulta.horario) {
                        consulta.horario = entrada_usuario;
                        consultas.push(consulta);
                        console.log("Consulta cadastrada com sucesso!");
                        paciente = {};
                        opcao = 0;
                        cadastrandoConsulta = false;
                        console.log("\nEscolha uma das opções abaixo:");
                        console.log("1: Digitar as informações da consulta:");
                        console.log("2: Caso queira remover uma consulta");
                        console.log("3: Atualizar consulta");
                        console.log("4: Para ver as consultas que inseriu");
                        console.log("5: Sair do programa");

                    }
                }
                break;

            case 2:
                if (removendoLivro) {
                    const nome = entrada_usuario;
                    const index = consultas.findIndex(Paciente => livro.nome.toLowerCase() === nome.toLowerCase());
                    if (index !== -1) {
                        consultas.splice(index, 1);
                        console.log(`consulta'${nome}' cancelada  com sucesso.`);
                    } else {
                        console.log(`consulta '${nome}' não encontrado.`);
                    }
                    opcao = 0;
                    removendoConsulta = false;
                    console.log("\nEscolha uma das opções abaixo:");
                    console.log("1: Digitar as informações da consulta:");
                    console.log("2: Caso queira remover uma consulta");
                    console.log("3: Atualizar consulta");
                    console.log("4: Para ver as consultas que inseriu");
                    console.log("5: Sair do programa");

                }
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
                console.log("\nEscolha uma das opções abaixo:");
                console.log("1: Digitar as informações da consulta:");
                console.log("2: Caso queira remover uma consulta");
                console.log("3: Atualizar consulta");
                console.log("4: Para ver as consultas que inseriu");
                console.log("5: Sair do programa");

                break;
        }
    }
}); 




