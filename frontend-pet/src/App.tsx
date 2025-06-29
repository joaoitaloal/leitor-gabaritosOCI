import { useState } from 'react'
import Submissions from './components/Submissions/Submissions.tsx'
import type { Reading } from './lib/interfaces.ts';
import ListReadings from './components/ListReadings/ListReadings.tsx';

function App() {

    /*
        input de imagens(tentar aceitar várias pra serem mandadas de uma vez): Um endpoint
        mostrar informações da leitura: Resposta do endpoint

        edição da leitura antes de salvar no banco de dados: outro endpoint

        mostrar tabelas do banco de dados: outro endpoint
        permitir adição, edição e remoção de registros das tabelas: mais 3 endpoints

    */

    /*
        Se a leitura não chegar a ser tratada no backend, a estrutura dela é a seguinte:
        int erro: 0 | 1 | 2 | 3
        int id_prova: number | -1 (não foi possivel identificar)
        int id_participante: number | -1
        float nota: number
        char* leitura: a, b, c...: o item marcado (exemplo: abbaccdeea0?), 0: questão em branco e ?: mais de uma marcação
    */

        /* Falta: 
            - Testar requisições pro backend
            - Fazer feedback para as requisições
            - Fazer um loadingzinho para as requisições
            - Creio que só
        */

    const [readings, setReadings] = useState(new Array<Reading>);

    function updateReadings(newReadings: Array<Reading>){
        setReadings(newReadings); // sobrescreve, mudar se o design mudar
    }

    function MainPage(){

        if(readings.length <= 0){
            return (
                <Submissions updateReadings={updateReadings}/>
            )
        }else{
            return (
                <ListReadings readings={readings} updateReadings={updateReadings}/>
            )
        }
    }

    return(
        <MainPage/>
    )

}

export default App