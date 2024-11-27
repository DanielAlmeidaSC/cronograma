function verificarCronograma() {
    const leitura = document.querySelector('#entra_dia').value.toLowerCase(); // Converte para minúsculo


    const manha = "Manhã: ";
    const tarde = "Tarde: ";
    const noite = "Noite: ";

    let psicologa = "Ir na psicóloga e estudar Java!";
    let java = "Estudar java ";
    let faculdade = "Fazer as coisas da faculdade";
    let front = "Estudar Front-End";
    let deitar = "Descansar.";

    document.querySelector('#tarde').innerHTML = "";
    document.querySelector('#noite').innerHTML = "";
    document.querySelector('#descansar').innerHTML = "";
    document.querySelector('#tarefa1').innerHTML = "";
    document.querySelector('#tarefa3').innerHTML = "";
    document.querySelector('#tarefa5').innerHTML = "";


    switch (leitura) {
        case "segunda ":
            case "segunda": 
                case "segunda-feira":
                document.querySelector('#manha').innerHTML = `${manha}`;
                document.querySelector('#tarefa1').innerHTML = `${java}`;
                document.querySelector('#tarde').innerHTML = `${tarde}`;
                document.querySelector('#tarefa3').innerHTML = `${psicologa}`;
                document.querySelector('#noite').innerHTML = `${noite}`;
                document.querySelector('#tarefa5').innerHTML = `${java}`;
            break;
        case "terça ":
            case "terça":
                case "terça-feira":
                document.querySelector('#manha').innerHTML = `${manha}`;
                document.querySelector('#tarefa1').innerHTML = `${java}`;
                document.querySelector('#tarde').innerHTML = `${tarde}`;
                document.querySelector('#tarefa3').innerHTML = `${java}`;
                document.querySelector('#noite').innerHTML = `${noite}`;
                document.querySelector('#tarefa5').innerHTML = `${java}`;
            break;
        case "quarta ":
            case "quarta":
                case "quarta-feira":
                document.querySelector('#manha').innerHTML = `${manha}`;
                document.querySelector('#tarefa1').innerHTML = `${faculdade}`;
                document.querySelector('#tarde').innerHTML = `${tarde}`;
                document.querySelector('#tarefa3').innerHTML = `${java}`;
                document.querySelector('#noite').innerHTML = `${noite}`;
                document.querySelector('#tarefa5').innerHTML = `${java}`;
            break;
        case "quinta ":
        case "quinta":
            case "quinta-feira":
                document.querySelector('#manha').innerHTML = `${manha}`;
                document.querySelector('#tarefa1').innerHTML = `${front}`;
                document.querySelector('#tarde').innerHTML = `${tarde}`;
                document.querySelector('#tarefa3').innerHTML = `${front}`;
                document.querySelector('#noite').innerHTML = `${noite}`;
                document.querySelector('#tarefa5').innerHTML = `${front}`;
            break;
        case "sexta ":
        case "sexta":
            case "sexta-feira":
                document.querySelector('#manha').innerHTML = `${manha}`;
                document.querySelector('#tarefa1').innerHTML = `${front}`;
                document.querySelector('#tarde').innerHTML = `${tarde}`;
                document.querySelector('#tarefa3').innerHTML = `${front}`;
                document.querySelector('#noite').innerHTML = `${noite}`;
                document.querySelector('#tarefa5').innerHTML = `${front}`;
            break;
        case "sábado ":
            case "sabado":
                document.querySelector('#manha').innerHTML = `${manha}`;
                document.querySelector('#tarefa1').innerHTML = `${front}`;
                document.querySelector('#tarde').innerHTML = `${tarde}`;
                document.querySelector('#tarefa3').innerHTML = `${front}`;
            break;
        case "domingo ":
        case "domingo":
                document.querySelector('#manha').innerHTML = `${deitar}`;
            break;
        
        default:
            document.querySelector('#manha').innerHTML = "Opção inválida!";
            break;
    }

}
