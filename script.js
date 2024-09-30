const questions = [
    {
        question: " (Pregunta 1/10) ¿Cuál es el objetivo principal del Manual de Convivencia Escolar del Colegio Brasilia Bosa?",
        answers: [
            "Fomentar la excelencia académica únicamente.",
            "Contribuir al fomento de la sana convivencia institucional y a la formación integral de los estudiantes.", // Correcta
            "Reglamentar el servicio social obligatorio."
        ],
        correctAnswer: "Contribuir al fomento de la sana convivencia institucional y a la formación integral de los estudiantes."
    },
    {
        question: "(Pregunta 2/10) ¿Cuándo fue validado el texto final del Manual de Convivencia Escolar?",
        answers: [
            "24 de octubre de 2023", 
            "29 de noviembre de 2023",
            "12 de septiembre de 1966"
        ],
        correctAnswer: "24 de octubre de 2023"
    },
    {
        question: "(Pregunta 3/10) ¿Qué compromiso incluye el Decálogo de la Convivencia Brasilista con respecto al uso de recursos físicos?",
        answers: [
            "Uso inadecuado de los recursos para fomentar acciones ecológicas.",
            "Uso adecuado de los recursos físicos y conservación de agua, energía y demás recursos naturales.", // Correcta
            "Uso de recursos sin necesidad de promover la conservación ambiental."
        ],
        correctAnswer: "Uso adecuado de los recursos físicos y conservación de agua, energía y demás recursos naturales."
    },
    {
        question: "(Pregunta 4/10) ¿Cuál es uno de los propósitos del Colegio Brasilia Bosa según el Manual de Convivencia?",
        answers: [
            "Formar ciudadanos autónomos y auténticos con principios éticos fortalecidos.", // Correcta
            "Fomentar la competencia deportiva en los estudiantes.",
            "Promover el uso exclusivo de tecnologías para el aprendizaje."
        ],
        correctAnswer: "Formar ciudadanos autónomos y auténticos con principios éticos fortalecidos."
    },
    {
        question: "(Pregunta 5/10) ¿Cuál es uno de los requisitos legales para el Manual de Convivencia según la Ley General de Educación?",
        answers: [
            "Debe definir los compromisos de los estudiantes y sus padres o representantes legales.", // Correcta
            "Debe centrarse únicamente en los aspectos administrativos del colegio.",
            "Debe ser revisado exclusivamente por los docentes y directivos."
        ],
        correctAnswer: "Debe definir los compromisos de los estudiantes y sus padres o representantes legales."
    },
    {
        question: "(Pregunta 6/10) ¿Qué establece el Artículo 67 de la Constitución Política de Colombia de 1991?",
        answers: [
            "La educación es un derecho de la persona y un servicio público con función social, del cual son responsables el Estado, la sociedad y la familia.", // Correcta
            "El debido proceso se aplica únicamente a actuaciones judiciales.",
            "Los establecimientos educativos pueden establecer sus propias normas sin restricciones."
        ],
        correctAnswer: "La educación es un derecho de la persona y un servicio público con función social, del cual son responsables el Estado, la sociedad y la familia."
    },
    {
        question: "(Pregunta 7/10) ¿Cuál es uno de los objetivos principales del Manual de Convivencia?",
        answers: [
            "Promover una educación orientada a la competencia académica sin tener en cuenta la convivencia.", 
            "Crear ambientes propiciadores de paz y promover el derecho fundamental del libre desarrollo de la persona.", // Correcta
            "Establecer reglas estrictas sin considerar la comunicación asertiva y el diálogo."
        ],
        correctAnswer: "Crear ambientes propiciadores de paz y promover el derecho fundamental del libre desarrollo de la persona."
    },
    {
        question: "(Pregunta 8/10) ¿Qué es la 'Concertación' según el Manual de Convivencia?",
        answers: [
            "El proceso mediante el cual las partes en conflicto logran acuerdos.", // Correcta
            "Un conjunto de garantías legales para la protección de los miembros de la comunidad educativa.",
            "Un tipo de agresión escolar en la que se utiliza la tecnología para intimidar."
        ],
        correctAnswer: "El proceso mediante el cual las partes en conflicto logran acuerdos."
    },
    {
        question: "(Pregunta 9/10) ¿Cuál es uno de los aspectos abordados en el capítulo 'Concertación, Esencia de la Participación' del Manual de Convivencia?",
        answers: [
            "El desarrollo del proyecto 'El Poder Público en la Escuela'.",
            "El procedimiento y las instancias para la solución de conflictos, asegurando el cumplimiento del debido proceso.", // Correcta
            "La evaluación y promoción de estudiantes en relación a sus desempeños académicos."
        ],
        correctAnswer: "El procedimiento y las instancias para la solución de conflictos, asegurando el cumplimiento del debido proceso."
    },
    {
        question: "(Pregunta 10/10) ¿Cuál de las siguientes es una de las responsabilidades de los estudiantes según el Manual de Convivencia del Colegio Brasilia – Bosa I. E. D.?",
        answers: [
            "Participar libremente en cualquier actividad externa sin necesidad de permisos.", 
            "No presentar las justificaciones de las inasistencias a actividades institucionales.", 
            "Entregar los trabajos y tareas en las fechas previstas, siguiendo los parámetros establecidos.", // Correcta
            "Ignorar las normativas sobre el uso de tecnologías en la institución."
        ],
        correctAnswer: "Entregar los trabajos y tareas en las fechas previstas, siguiendo los parámetros establecidos."
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
