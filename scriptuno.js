const questions = [
    {
        question: "(Pregunta 1/10) ¿Cuál de los siguientes es un deber del docente brasilista según el Artículo 2° del Manual de Convivencia Escolar?",
        answers: [
            "Organizar eventos culturales sin necesidad de cumplir requisitos.",
            "Evitar la participación en procesos democráticos dentro de la institución.",
            "Cumplir estrictamente con el horario laboral establecido para dar ejemplo de responsabilidad y puntualidad.", // Correcta
            "Permitir que los estudiantes resuelvan sus conflictos sin intervención docente."
        ],
        correctAnswer: "Cumplir estrictamente con el horario laboral establecido para dar ejemplo de responsabilidad y puntualidad."
    },
    {
        question: "(Pregunta 2/10) ¿Cuál es uno de los deberes del director de curso brasilista según el Artículo 3° del Manual de Convivencia Escolar?",
        answers: [
            "Evitar el seguimiento de casos atendidos por otras instancias institucionales.",
            "Organizar actividades recreativas para los estudiantes sin previo aviso.",
            "Mantener actualizado el directorio de estudiantes según el formato establecido.", // Correcta
            "Permitir que los estudiantes se encarguen de la asistencia sin intervención."
        ],
        correctAnswer: "Mantener actualizado el directorio de estudiantes según el formato establecido."
    },
    {
        question: "(Pregunta 3/10) ¿Cuál es uno de los derechos-deberes del padre de familia brasilista según el Artículo 4° del Manual de Convivencia Escolar?",
        answers: [
            "Criticar abiertamente a la institución si hay desacuerdos.",
            "Asistir puntualmente a las citaciones, reuniones y talleres convocados por la institución.", // Correcta
            "Enviar al estudiante al colegio incluso con incapacidad médica.",
            "Permitir que el estudiante maneje los conflictos sin intervención de los docentes."
        ],
        correctAnswer: "Asistir puntualmente a las citaciones, reuniones y talleres convocados por la institución."
    },
    {
        question: "(Pregunta 4/10) ¿Cuál es uno de los derechos-deberes del directivo docente brasilista según el Artículo 6° del Manual de Convivencia Escolar?",
        answers: [
            "Evitar la participación en los órganos del gobierno escolar.",
            "Promover la participación de estudiantes, profesores y padres de familia con el fin de integrar los diferentes organismos del gobierno escolar.", // Correcta
            "Gestionar convenios con entidades que no brinden apoyo a la institución.",
            "Permitir que cada miembro de la comunidad educativa actúe sin seguir el manual de convivencia."
        ],
        correctAnswer: "Promover la participación de estudiantes, profesores y padres de familia con el fin de integrar los diferentes organismos del gobierno escolar."
    },
    {
        question: "(Pregunta 5/10) ¿Cuál es uno de los derechos-deberes del personal administrativo brasilista según el Artículo 7° del Manual de Convivencia Escolar?",
        answers: [
            "Evitar la participación en los comités requeridos.",
            "Permitir que las relaciones entre los miembros de la institución sean informales y no reglamentadas.",
            "Cumplir estrictamente con el horario laboral establecido a fin de dar ejemplo de responsabilidad y puntualidad.", // Correcta
            "Desatender la clasificación y archivo de documentos y correspondencia."
        ],
        correctAnswer: "Cumplir estrictamente con el horario laboral establecido a fin de dar ejemplo de responsabilidad y puntualidad."
    },
    {
        question: "(Pregunta 6/10) ¿Cuál es uno de los derechos-deberes del personal que presta otros servicios en la institución según el Artículo 8° del Manual de Convivencia Escolar?",
        answers: [
            "Ignorar las anomalías que se presenten en la institución.",
            "Permitir que las instalaciones queden en desorden.",
            "Mantener las instalaciones en completo orden y aseo.", // Correcta
            "No colaborar en las actividades institucionales cuando sea requerido."
        ],
        correctAnswer: "Mantener las instalaciones en completo orden y aseo."
    },
    {
        question: "(Pregunta 7/10) Según el Artículo 9° del Manual de Convivencia Escolar, ¿cuál es el primer paso recomendado para resolver un conflicto entre integrantes de la comunidad educativa?",
        answers: [
            "Buscar la intervención directa del comité de convivencia de curso.",
            "Recurrir a la mesa de conciliación permanente inmediatamente.",
            "Resolver el conflicto directamente con la persona en cuestión, haciendo uso del diálogo y la concertación.", // Correcta
            "Esperar que la falta sea leve antes de tomar acción."
        ],
        correctAnswer: "Resolver el conflicto directamente con la persona en cuestión, haciendo uso del diálogo y la concertación."
    },
    {
        question: "(Pregunta 8/10) Según el Artículo 10° del Manual de Convivencia Escolar, ¿cuál es el primer paso en el procedimiento para la solución de conflictos?",
        answers: [
            "Desarrollar actitudes y condiciones para resolver los conflictos.",
            "Definir quiénes son los involucrados en el conflicto.", // Correcta
            "Establecimiento de opciones y acuerdos.",
            "Definir las reglas de juego para solucionar el conflicto."
        ],
        correctAnswer: "Definir quiénes son los involucrados en el conflicto."
    },
    {
        question: "(Pregunta 9/10) Según el Artículo 11° del Manual de Convivencia Escolar, ¿cuál de los siguientes componentes se centra en el reporte oportuno de la información sobre los casos de atención reportados?",
        answers: [
            "Componente de promoción",
            "Componente de prevención",
            "Componente de atención",
            "Componente de seguimiento" // Correcta
        ],
        correctAnswer: "Componente de seguimiento"
    },
    {
        question: "(Pregunta 10/10) Según el artículo sobre faltas gravísimas, ¿cuál de las siguientes acciones se considera una falta gravísima?",
        answers: [
            "Interferir con actitudes de burla e irrespeto en eventos institucionales",
            "Practicar juegos que pongan en riesgo la integridad de miembros de la comunidad educativa",
            "Realizar prácticas que pongan en riesgo la vida de cualquier miembro de la comunidad educativa", // Correcta
            "Daño a mobiliario de la institución y demás recursos del colegio"
        ],
        correctAnswer: "Realizar prácticas que pongan en riesgo la vida de cualquier miembro de la comunidad educativa"
    }
    // Puedes agregar más preguntas aquí
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0; // Contador de respuestas correctas

function loadQuestion(index) {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const nextButton = document.getElementById('next-button');
    
    // Mostrar la pregunta actual
    questionElement.querySelector('h2').textContent = questions[index].question;

    // Mostrar las respuestas
    answersElement.innerHTML = '';
    questions[index].answers.forEach(answer => {
        const li = document.createElement('li');
        li.className = 'answer';
        li.textContent = answer;
        li.onclick = function() { checkAnswer(this); };
        answersElement.appendChild(li);
    });

    nextButton.style.display = 'none'; // Ocultar el botón "Siguiente" inicialmente
}

function checkAnswer(selected) {
    // Desmarcar las respuestas anteriores y desactivar clics en todas
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        answer.classList.remove('correct', 'incorrect');
        answer.style.pointerEvents = 'none'; // Desactivar clics en todas las respuestas
    });

    // Marcar la respuesta seleccionada
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selected.textContent === correctAnswer) {
        selected.classList.add('correct');
        correctAnswersCount++; // Incrementar el contador de respuestas correctas
    } else {
        selected.classList.add('incorrect');
    }

    // Mostrar el botón "Siguiente"
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        // Mostrar el resumen de resultados al finalizar
        const resultDiv = document.getElementById('result');
        const resultText = document.getElementById('result-text');
        resultText.textContent = `¡Has terminado el cuestionario! Respuestas correctas: ${correctAnswersCount} de ${questions.length}`;
        resultDiv.style.display = 'block'; // Mostrar el resultado
    }
}

// Cargar la primera pregunta al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion(currentQuestionIndex);
});
