const questions = [
    {
        question: "(Pregunta 1/17) ¿Cuál de las siguientes señales podría indicar la existencia de acoso escolar desde el punto de vista familiar?",
        answers: [
            "Risas o murmullos cuando entra en clase",
            "Maltrato físico con lesiones inexplicables", // Correcta
            "Descenso en el rendimiento escolar",
            "Falta de atención médica o dental"
        ],
        correctAnswer: "Maltrato físico con lesiones inexplicables"
    },
    {
        question: "(Pregunta 2/17) ¿En cuál de las siguientes situaciones NO se renovará la matrícula para el año siguiente según el Artículo 14° del manual de convivencia?",
        answers: [
            "Cuando los padres de familia y/o acudientes no cumplan con los compromisos establecidos en el manual de convivencia.",
            "Cuando el estudiante no haga uso del derecho de matrícula programado por el colegio o la Secretaria de Educación.",
            "Cuando el estudiante participe activamente en todos los talleres y reuniones programadas por el colegio.",
            "Cuando el estudiante incurra en incumplimiento de las normas que lesionen la moral institucional según el Consejo Directivo."
        ],
        correctAnswer: "Cuando el estudiante participe activamente en todos los talleres y reuniones programadas por el colegio."
    },
    {
        question: "(Pregunta 3/17) Según el Artículo 15°, ¿cuál de los siguientes NO es un requisito para optar por el Grado de Bachiller Brasilista?",
        answers: [
            "Haber aprobado todos los Grados de la Educación Básica Primaria, Básica Secundaria y Educación Media.",
            "Estar a Paz y Salvo con toda la documentación de matrícula, certificados de años anteriores y entrega de materiales suministrados en calidad de préstamo.",
            "Haber participado en actividades extracurriculares organizadas por la institución durante toda la educación básica.",
            "Haber cumplido satisfactoriamente su Servicio Social."
        ],
        correctAnswer: "Haber participado en actividades extracurriculares organizadas por la institución durante toda la educación básica."
    },
    {
        question: "(Pregunta 4/17) Según el Artículo 16°, ¿cuál de los siguientes aspectos NO es un requisito para participar en la ceremonia de proclamación de bachilleres?",
        answers: [
            "Haber cumplido los requisitos para el grado de bachiller.",
            "Haber presentado y superado todas las nivelaciones.",
            "No haber presentado faltas que se encuentren tipificadas como graves o gravísimas en el manual de convivencia durante el último año.",
            "Haber participado en al menos una actividad extracurricular durante el último año escolar."
        ],
        correctAnswer: "Haber participado en al menos una actividad extracurricular durante el último año escolar."
    },
    {
        question: "(Pregunta 5/17) Según el Artículo 17°, ¿cuál de los siguientes integrantes NO forma parte del Comité Escolar de Convivencia?",
        answers: [
            "El rector del establecimiento educativo.",
            "El personero estudiantil.",
            "Un representante de los sectores productivos organizados en el ámbito local.",
            "El presidente del consejo de estudiantes."
        ],
        correctAnswer: "Un representante de los sectores productivos organizados en el ámbito local."
    },
    {
        question: "(Pregunta 6/17) Según el Artículo 18°, ¿cuál de las siguientes características NO es relevante para los representantes a los diferentes órganos del consejo estudiantil?",
        answers: [
            "Conocer el Proyecto Educativo Institucional.",
            "Tener pleno conocimiento de las funciones de todos los representantes de los órganos de gobierno escolar.",
            "Contar con una trayectoria en actividades extracurriculares.",
            "Resaltar los principios democráticos, el respeto, la tolerancia, la convivencia, la reconciliación, el diálogo y la paz.",
            "Mantener buena comunicación con compañeros, padres, docentes, directivos, administrativos y personal de servicios generales."
        ],
        correctAnswer: "Contar con una trayectoria en actividades extracurriculares."
    },
    {
        question: "(Pregunta 7/17) Según los párrafos del documento, ¿cuál de las siguientes afirmaciones es incorrecta sobre el cargo de Contralor Estudiantil?",
        answers: [
            "El Contralor Estudiantil debe conocer el presupuesto de la institución, sus activos y distribución.",
            "El Contralor Estudiantil puede presentar quejas relacionadas con el mal uso de los recursos a la Contraloría Distrital.",
            "El Contralor Estudiantil tiene derecho a asistir a reuniones del Consejo Directivo con voz pero sin voto.",
            "El Contralor Estudiantil puede ser designado por los estudiantes del ciclo dos hasta el ciclo cinco.",
            "El Contralor Estudiantil debe motivar a sus compañeros en la formación del sentido de pertenencia a la institución."
        ],
        correctAnswer: "El Contralor Estudiantil puede ser designado por los estudiantes del ciclo dos hasta el ciclo cinco."
    },
    {
        question: "(Pregunta 8/17) Según el documento, ¿cuál es el procedimiento correcto en caso de revocatoria del mandato de un representante de los estudiantes?",
        answers: [
            "La revocatoria del mandato procede en caso de incumplimiento del programa, siempre y cuando se haya ejecutado un porcentaje mínimo del programa proporcional al tiempo transcurrido.",
            "El procedimiento de revocatoria requiere una recolección de firmas del 60% del total del potencial electoral, tras lo cual se convoca a una votación que debe ser aprobada por mayoría simple.",
            "El cargo será ocupado por quien haya obtenido la segunda votación en el proceso electoral si se ha transcurrido más de cuatro meses desde el mandato.",
            "La revocatoria del mandato puede ser realizada por el Consejo Directivo en caso de faltas graves o gravísimas, respetando el debido proceso.",
            "La revocatoria del mandato solo procede si el representante ha cumplido al menos el 50% del programa propuesto."
        ],
        correctAnswer: "La revocatoria del mandato procede en caso de incumplimiento del programa, siempre y cuando se haya ejecutado un porcentaje mínimo del programa proporcional al tiempo transcurrido."
    },
    {
        question: "(Pregunta 9/17) De acuerdo con la Resolución Rectoral No. 13 del Colegio Brasilia Bosa I.E.D., ¿cuál es uno de los propósitos de la evaluación de los estudiantes?",
        answers: [
            "Suministrar información básica para consolidar o reorientar los procesos educativos relacionados con el desarrollo integral del estudiante.",
            "Garantizar la promoción automática de todos los estudiantes al siguiente grado.",
            "Revisar anualmente el Sistema Institucional de Evaluación sin considerar las necesidades y contexto de la comunidad educativa.",
            "Establecer un sistema de evaluación exclusivamente basado en la normativa nacional vigente.",
            "Implementar estrategias pedagógicas únicamente para estudiantes con debilidades académicas."
        ],
        correctAnswer: "Suministrar información básica para consolidar o reorientar los procesos educativos relacionados con el desarrollo integral del estudiante."
    },
    {
        question: "(Pregunta 10/17) Según el Artículo 23° de la Resolución Rectoral No. 13 del Colegio Brasilia Bosa I.E.D., ¿qué enfoque pedagógico se aplica para la evaluación de los estudiantes?",
        answers: [
            "El Enfoque Basado en Competencias.",
            "El Aprendizaje Significativo propuesto por Ausubel.",
            "El Enfoque de Evaluación por Resultados.",
            "El Enfoque de Aprendizaje Autónomo.",
            "El Enfoque de Evaluación Diagnóstica."
        ],
        correctAnswer: "El Aprendizaje Significativo propuesto por Ausubel."
    },
    {
        question: "(Pregunta 11/19) Según la Resolución Rectoral No. 13 del Colegio Brasilia Bosa I.E.D., ¿cuál es la calificación mínima necesaria para aprobar un área en los ciclos III-IV-V?",
        answers: [
            "3.0",
            "3.2",
            "3.3",
            "3.5",
            "4.0"
        ],
        correctAnswer: "3.3"
    },
    {
        question: "(Pregunta 12/17) Según el Artículo 25º de la Resolución Rectoral No. 13 del Colegio Brasilia Bosa I.E.D., ¿qué competencia se evalúa a través de estrategias como el trabajo en equipo y la participación en actividades grupales?",
        answers: [
            "Laboral",
            "Procedimental",
            "Cognitiva",
            "Axiológica",
            "Ninguna de las anteriores"
        ],
        correctAnswer: "Laboral"
    },
    {
        question: "(Pregunta 13/17) Según el Artículo 27º de la Resolución Rectoral No. 13 del Colegio Brasilia Bosa I.E.D., ¿qué herramienta es utilizada para que los estudiantes establezcan metas y propósitos académicos?",
        answers: [
            "Agenda Escolar",
            "Observador del estudiante",
            "Sistema de Evaluación Basada",
            "Control de asistencia",
            "Manual de convivencia"
        ],
        correctAnswer: "Observador del estudiante"
    },
    {
        question: "(Pregunta 14/17) Según el Artículo 30º de la Resolución Rectoral No. 13 del Colegio Brasilia Bosa I.E.D., ¿qué debe registrar el informe académico al final del periodo?",
        answers: [
            "Las ausencias justificadas y no justificadas en todas las asignaturas.",
            "Solo las observaciones de comportamiento social.",
            "Solo las valoraciones numéricas por cada área.",
            "Reconocimientos obtenidos en actividades extracurriculares.",
            "Solo las recomendaciones para superar dificultades."
        ],
        correctAnswer: "Las ausencias justificadas y no justificadas en todas las asignaturas."
    },
    {
        question: "(Pregunta 15/17) Según el Artículo 34º del Proyecto de Servicio Social del Colegio Brasilia Bosa, ¿cuál es uno de los objetivos del servicio social estudiantil?",
        answers: [
            "Generar ingresos adicionales para la institución.",
            "Establecer vínculos con otras instituciones educativas.",
            "Lograr una mayor identidad de los estudiantes con su institución.",
            "Desarrollar habilidades técnicas específicas en áreas de tecnología.",
            "Reducir el tiempo de clases en el aula."
        ],
        correctAnswer: "Lograr una mayor identidad de los estudiantes con su institución."
    },
    {
        question: "(Pregunta 16/17) Según el Artículo 37º del Capítulo 7 del Proyecto de Protección Integral de Niños, Niñas y Adolescentes en el Ámbito Escolar del Colegio Brasilia Bosa, ¿cuál es uno de los principios fundamentales de la perspectiva de Protección Integral?",
        answers: [
            "Colocar al niño y a la niña como sujetos de compasión.",
            "Considerar al niño como un instrumento de la sociedad.",
            "Poner el interés superior del niño y de la niña como el criterio fundamental en la toma de decisiones.",
            "Tratar al niño y a la niña exclusivamente en función de su desempeño académico.",
            "Actuar solo sobre factores aislados en lugar de las condiciones materiales y ambientales."
        ],
        correctAnswer: "Poner el interés superior del niño y de la niña como el criterio fundamental en la toma de decisiones."
    },
    {
        question: "(Pregunta 17/17) De acuerdo con las normas establecidas para el uso de la biblioteca en el Colegio Brasilia Bosa, ¿cuál es uno de los requisitos para solicitar un libro en préstamo?",
        answers: [
            "Mostrar el carné del colegio.",
            "Presentar una carta de recomendación de un docente.",
            "Proporcionar una identificación con fotografía.",
            "Asegurar el libro con un depósito de garantía.",
            "Cumplir con una prueba de lectura."
        ],
        correctAnswer: "Mostrar el carné del colegio."
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
