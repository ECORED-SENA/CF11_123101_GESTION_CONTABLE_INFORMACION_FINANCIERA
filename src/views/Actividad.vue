<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con la legislación laboral colombiana, los tipos de contrato de trabajo, derechos y deberes de las partes, y el proceso de liquidación de nómina conforme a la normativa vigente.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los elementos esenciales del contrato de trabajo según el CST? La duración determinada.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La duración determinada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La prestación personal del servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La firma de testigos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El auxilio de transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la duración máxima del contrato accidental o transitorio?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dos meses.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un año.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un mes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tres meses.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué porcentaje de recargo aplica a una hora extra ordinaria diurna (HEOD)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '75 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '25 %.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '100 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '50 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué tipo de contrato no tiene una duración establecida?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contrato de obra o labor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contrato a término fijo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contrato a término indefinido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Contrato accidental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué entidad recibe los aportes parafiscales del 2 % de la nómina?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'SENA.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Caja de compensación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'ICBF.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'ARL.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes es un deber del empleador según el CST?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prestar servicios en los horarios establecidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pagar la remuneración pactada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Obedecer las órdenes del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Guardar información confidencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el porcentaje que el trabajador aporta para salud y pensión, respectivamente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '6 % y 6 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '4 % y 4 %.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '8.5 % y 12 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '1 % y 4 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué documento regula los principios contables para la elaboración de nóminas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Política contable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Acta de constitución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Manual de funciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Código Penal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la duración de las vacaciones legales por cada año laborado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '10 días hábiles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '15 días hábiles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '20 días calendario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '30 días hábiles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué beneficio se debe pagar en dos cuotas al año?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prima de servicios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Vacaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cesantías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Auxilio de transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El salario integral incluye todos los conceptos salariales, incluidas las vacaciones.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El trabajador no puede delegar la ejecución de sus labores en otra persona.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Las cesantías deben consignarse en el fondo elegido por el trabajador.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El recargo nocturno equivale al 25 % del valor hora ordinaria.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El contrato de aprendizaje es considerado un contrato de trabajo común.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
