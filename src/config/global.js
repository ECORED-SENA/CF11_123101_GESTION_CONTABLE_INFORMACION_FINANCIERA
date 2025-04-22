export default {
  global: {
    Name: 'Contratos de trabajo y liquidación de nómina',
    Description:
      'El talento humano es el recurso más importante con el que cuenta una organización, se encarga de hacer realidad todas las metas y estrategias que la empresa propone, por lo anterior, es de vital importancia que sus prestaciones sociales sean garantizadas, como una forma de compensar la contraprestación del servicio del colaborador hacia la empresa; a partir de esto, es necesario tener conocimiento con respecto a la liquidación y pago correcto de las prestaciones sociales, las cuales se reflejan en el presente componente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Legislación laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Política contable',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Contrato de trabajo, elementos y tipos de contratos de trabajo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Deberes y derechos de empleado y empleador',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Causales de terminación del contrato de trabajo e indemnizaciones',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Nómina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Beneficios a empleados',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Trabajo extra y recargos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Devengado',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Deducciones',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Seguridad social y parafiscales',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Prestaciones sociales',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Retenciones a salarios',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Salario integral',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Novedades',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Liquidación de nómina',
            hash: 't_2_10',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Legislación laboral',
      referencia:
        'Decreto 1072 de 2015. [Ministerio del Trabajo]. <i>Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo</i>. Mayo 26 de 2015 (versión actualizada abril 15 de 2016). ',
      tipo: 'Decreto',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8',
    },
    {
      tema: 'Liquidación de nómina',
      referencia:
        'Angulo, U. (2018). <i>Contabilidad financiera, correlacionado con NIIF. (2ª ed.). Ediciones de la U</i>.',
      tipo: 'Libro',
      link:
        'https://api.pageplace.de/preview/DT0400.9789587628876_A41151132/preview-9789587628876_A41151132.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Persona natural',
      significado:
        'individuo que al actuar en su propio nombre se ocupa de alguna o algunas actividades que la ley considera mercantiles.',
    },
    {
      termino: 'Provisión',
      significado:
        'valores que deben ser reconocidos, hoy, con el propósito de ser desembolsados en el futuro.',
    },
    {
      termino: 'Ingreso Base de Cotización IBC',
      significado:
        'se utiliza para calcular los aportes a seguridad social y parafiscales.',
    },
    {
      termino: 'Agente de retención',
      significado:
        'persona natural o jurídica que ha sido designada para que efectúe la retención en la fuente cuando haga un pago que esté sometido a retención.',
    },
    {
      termino: 'Depuración',
      significado:
        'determinación de la base para calcular impuestos, restando a los ingresos totales todos los beneficios posibles que la legislación tributaria consagra.',
    },
    {
      termino: 'Rentas exentas',
      significado:
        'son un tipo de ingresos que, aun siendo ingresos fiscales, no están sujetos al impuesto de renta y complementarios.',
    },
  ],
  referencias: [
    {
      referencia:
        'Angulo, U. (2018). <i>Contabilidad financiera, correlacionado con NIIF. (2ª ed.). Ediciones de la U</i>. ',
      link:
        'https://api.pageplace.de/preview/DT0400.9789587628876_A41151132/preview-9789587628876_A41151132.pdf',
    },
    {
      referencia: 'CAFASUR. (2018, 23 febrero). <i>Aportes parafiscales</i>. ',
      link: 'https://www.cafasur.com.co/subsidios/aportes-parafiscales',
    },
    {
      referencia:
        'Castro, Y. (2020, 23 julio). <i>Obligaciones de los trabajadores</i>. ',
      link:
        'https://www.consultorcontable.com/obligaciones-de-los-trabajadores',
    },
    {
      referencia:
        'Comité de Normas Internacionales de Contabilidad. (1998). <i>Beneficios a los empleados (NIC 19)</i>. ',
      link:
        'https://www2.deloitte.com/content/dam/Deloitte/cr/Documents/audit/documentos/niif-2019/NIC%2019%20-%20Beneficios%20a%20los%20Empleados.pdf',
    },
    {
      referencia:
        'Coral, L. y Gudiño, E. (2014). <i>Contabilidad universitaria. (7.a ed.)</i>. McGraw Hill - Colombia. ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=105',
    },
    {
      referencia:
        'Dussán, W. (2019, 8 enero). <i>Tarifa de retención en la fuente por ingresos laborales ley 1943</i>. ',
      link:
        'https://www.consultorcontable.com/tarifa-de-retenci%C3%B3n-en-la-fuente-por-ingresos-laborales-ley-1943/',
    },
    {
      referencia: 'Dussán, W. (2020). <i>Prestaciones sociales</i>. ',
      link:
        'https://www.consultorcontable.com/datos-hist%C3%B3ricos/prestaciones-sociales/',
    },
    {
      referencia:
        'Gerencie.com. (2019, 26 marzo). <i>Elementos del contrato de trabajo</i>. ',
      link:
        'https://www.gerencie.com/elementos-del-contrato-de-trabajo.html#:%7E:text=El%20art%C3%ADculo%2023%20del%20c%C3%B3digo,Retribuci%C3%B3n%20o%20remuneraci%C3%B3n%20del%20servicio',
    },
    {
      referencia:
        'Gerencie.com. (2020a, 3 febrero). <i>¿Cómo se liquidan las horas extras?</i> ',
      link: 'https://www.gerencie.com/como-se-liquidan-las-horas-extras.html',
    },
    {
      referencia:
        'Gerencie.com. (2020b, junio 13). <i>Retención en la fuente por ingresos laborales</i>. ',
      link:
        'https://www.gerencie.com/retencion-en-la-fuente-por-ingresos-laborales.html',
    },
    {
      referencia:
        'Gerencie.com. (2021a, febrero 8). <i>¿Qué es la seguridad social?</i> ',
      link:
        'https://www.gerencie.com/que-es-la-seguridad-social-en-una-relacion-laboral.html',
    },
    {
      referencia:
        'Gerencie.com. (2021b, 20 abril). <i>Exoneración de aportes parafiscales y seguridad social</i>. ',
      link:
        'https://www.gerencie.com/exoneracion-de-aportes-a-seguridad-social-y-parafiscales.html',
    },
    {
      referencia: 'Gerencie.com. (2021c, abril 16). <i>Salario integral</i>. ',
      link:
        'https://www.gerencie.com/salario-integral.html#:%7E:text=El%20salario%20integral%20es%20una,los%20conceptos%20en%20uno%20s%C3%B3lo',
    },
    {
      referencia:
        'Ginnamarce. (2014, septiembre). <i>Derecho laboral colombiano</i>. ',
      link: 'https://ginnamaece.wordpress.com/derecho-familiar/',
    },
    {
      referencia:
        'Hernandez, C. (2015, 9 noviembre). <i>¿Cuáles son las justas causas que tiene el empleador para dar por terminado el contrato de trabajo?</i> Instituto Nacional de Contadores Públicos de Colombia. ',
      link:
        'https://incp.org.co/cuales-son-las-justas-causas-que-tiene-el-empleador-para-dar-por-terminado-el-contrato-de-trabajo/',
    },
    {
      referencia:
        'Instituto Nacional de Contadores Públicos de Colombia. (s. f.). <i>Código Sustantivo del Trabajo</i>. ',
      link: 'https://incp.org.co/Site/productosyservicios/legislativa/cst.htm',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2008, 22 agosto) <i>Terminación unilateral del contrato de trabajo sin justa causa</i>. ',
      link: 'https://cijuf.org.co/conceptosminproteccion/agosto/c246299.html',
    },
    {
      referencia:
        'Ministerio del Trabajo. Republica de Colombia. (2013). <i>Formas y libertad de estipulación</i>. ',
      link:
        'www.comunidadcontable.com http://www.comunidadcontable.com/BancoMedios/Documentos%20PDF/cpto-2556-%2013.pdf',
    },
    {
      referencia:
        'Moncayo, C. (2015, 21 septiembre). <i>¿Cuáles son las justas causas que tiene el trabajador para dar por terminado el contrato de trabajo?</i> Instituto Nacional de Contadores Públicos de Colombia. ',
      link:
        'https://incp.org.co/cuales-son-las-justas-causas-que-tiene-el-trabajador-para-dar-por-terminado-el-contrato-de-trabajo/',
    },
    {
      referencia:
        'Moncayo, C. (2017, 11 diciembre). <i>Políticas Contables</i>. Instituto Nacional de Contadores Públicos de Colombia. ',
      link: 'https://incp.org.co/politicas-contables-2/',
    },
    {
      referencia:
        'Moreno, S. (2013, 24 mayo). <i>El derecho laboral colombiano</i>. ',
      link:
        'https://derecho-laboral8.webnode.com.co/news/el-derecho-laboral-colombiano/',
    },
    {
      referencia:
        'Secretaría del Senado (2020, 6 noviembre). <i>Código Sustantivo del Trabajo</i>. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html',
    },
    {
      referencia:
        'Varón, L. (2014, 24 abril). <i>Qué debe contener una política contable</i>. ',
      link:
        'https://www.gerencie.com/que-debe-contener-una-politica-contable.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ricardo Larrota',
          cargo: 'Experto temático',
          centro: 'Centro de Servicios Financieros - Regional Distrito Capital',
        },
        {
          nombre: 'Maryuri Agudelo Franco',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Adriana Ariza',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Adriana Marcela Suárez Eljure',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodriguez Rodriguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nelson Vera',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
