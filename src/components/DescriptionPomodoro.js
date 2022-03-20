import styles from '../styles/DescriptionPomodoro.module.css'

export const DescriptionPomodoro = () => {
    return (
        <div className={styles.descriptionPomodoro}>
            <h2>Oque é a técnica pomodoro?</h2>
            <p>A técnica Pomodoro, desenvolvida em 1988 pelo italiano Francisco Cirillo, é um método de gestão de tempo que pode ser aplicado para diversas tarefas, seja nos estudos, seja no trabalho.</p>
            <p>Conforme o livro de Cirillo “The Pomodoro Technique”, a técnica foi criada para utilizar o tempo como um valioso aliado e realizar o que queremos fazer e do jeito que queremos fazê-lo. Além disso, capacita-nos continuamente para melhorar nossos processos.</p>
            <p>Ao usar esse método, é possível saber não só a quantidade de atividades que são feitas, como também a qualidade. Além disso, pode-se medir o que está atrapalhando a realização das tarefas.</p>
            <h2>Quem pode usar a técnica Pomodoro?</h2>
            <p>Essa forma de otimizar o tempo de estudos e tarefas geralmente é voltada para pessoas procrastinadoras, ou seja, que têm tendência a adiar suas atividades.</p>
            <p>A técnica Pomodoro pode ser usada por estudantes, profissionais, vestibulandos, concurseiros, entre outros, que, no momento, estão tendo baixa concentração e produtividade por cansaço ou por outros fatores que os fazem estar com a mente dispersa.</p>
            <p>O método também é útil para pessoas que estão ansiosas porque não conseguem organizar suas atividades e que, por isso, são cobradas por terceiros, como chefes, professores, colegas, entre outros.</p>
            <h2>Como é a técnica Pomodoro</h2>
            <p>Pomodoro significa tomate em italiano. A fruta faz alusão ao tempo durante o qual você pode fazer determinada tarefa. Cada pomodoro é dividido em quatro pomodoris, e cada um destes equivale a 30 minutos.</p>
            <p>Anote o que precisa para usar essa técnica:</p>
            <ul>
                <li>Um timer ou despertador (pode ser do celular)</li>
                <li>Papel ou bloco de notas no computador/celular para escrever as atividades a serem realizadas</li>
            </ul>
            <p>O método Pomodoro é simples e dura duas horas. Primeiro, você realiza uma atividade durante 25 minutos. Quando acabar o tempo, descansa 5 minutos. Assim sucessivamente até que complete as duas horas. Como recompensa, você descansa mais 30 minutos.</p>
            <div className={styles.pImagePomodoro}>
                <div className={styles.imagePomodoro}>
                    <img src="/pomodoro.jpg" alt='Imagem ilustrando como funciona a técnica pomodoro'/>
                </div>
            </div>
            <p>O conceito do Pomodoro é que a pessoa que vai estudar ou executar uma tarefa demore, exatamente, 25 minutos. Concluindo-a ou não, ele deve parar e descansar 5 minutos.</p>
            <h2>Descansos</h2>
            <p>Durante o tempo de descanso, é interessante não fazer nada que requeira muito esforço mental. Caso contrário, sua mente não será capaz de reorganizar e integrar o que você aprendeu. Como resultado, você não será capaz de dar ao próximo Pomodoro o seu melhor esforço.</p>
            <p>Nesse intervalo, você pode comer, beber um copo d’água, ver televisão, fazer um alongamento, acessar as redes sociais ou apenas relaxar da forma que achar melhor.</p>
            <h2>Vantagens de usar a técnica Pomodoro</h2>
            <p>O italiano Cirillo afirma, no seu livro, que a técnica Pomodoro oferece vários pontos positivos. Veja alguns:</p>
            <ul>
                <li>Alivia a ansiedade;</li>
                <li>Aumenta o foco e a concentração por meio da redução das interrupções;</li>
                <li>Aumenta a conscientização das decisões;</li>
                <li>Aumenta a motivação e mantém-na constante;</li>
                <li>Reforça a determinação para atingir os objetivos;</li>
                <li>Melhora o processo de trabalho ou estudo;</li>
                <li>Reforça sua determinação de continuar a aplicar-se em face de complexas situações.</li>
            </ul>
        </div>
    )
}