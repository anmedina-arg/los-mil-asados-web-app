const { AsadosData } = require('./asadoJSON.js');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  // Crear usuarios fijos
  const usuarios = await prisma.usuario.createMany({
    data: [
      { nombre: 'Usuario A', correo: 'ueusuarioa1235211aa@example.com' },
      { nombre: 'Usuario B', correo: 'ueusuariob1235211aa@example.com' },
      { nombre: 'Usuario C', correo: 'ueusuarioc1235211aa@example.com' },
      { nombre: 'Usuario D', correo: 'ueusuariod1235211aa@example.com' },
      { nombre: 'Usuario E', correo: 'ueusuarioe1235211aa@example.com' },
      { nombre: 'Usuario F', correo: 'ueusuariof1235211aa@example.com' },
      { nombre: 'Usuario G', correo: 'ueusuariog1235211aa@example.com' },
      { nombre: 'Usuario H', correo: 'ueusuarioh1235211aa@example.com' },
      { nombre: 'Usuario I', correo: 'ueusuarioi1235211aa@example.com' },
      { nombre: 'Usuario J', correo: 'ueusuarioj1235211aa@example.com' },
    ],
  });

  // console.log('Usuarios sembrados')

  // Crear tipos de gasto (insumos)
  const tiposDeGasto = await prisma.tipoGasto.createMany({
    data: [{ nombre: 'Carne' }, { nombre: 'Pan' }, { nombre: 'Bebidas' }],
  });

  // console.log('Tipos de gasto sembrados')

  // Crear asados (con fechas aleatorias)
  const asadoData = [
    {
      date: '01/06/2023',
      name: '#601',
    },
    {
      date: '08/06/2023',
      name: '#602',
    },
    {
      date: '15/06/2023',
      name: '#603',
    },
    {
      date: '22/06/2023',
      name: '#604',
    },
    {
      date: '29/06/2023',
      name: '#605',
    },
    {
      date: '06/07/2023',
      name: '#606',
    },
    {
      date: '13/07/2023',
      name: '#607',
    },
    {
      date: '20/07/2023',
      name: '#608',
    },
    {
      date: '27/07/2023',
      name: '#609',
    },
    {
      date: '03/08/2023',
      name: '#610',
    },
    {
      date: '10/08/2023',
      name: '#611',
    },
    {
      date: '17/08/2023',
      name: '#612',
    },
    {
      date: '24/08/2023',
      name: '#613',
    },
    {
      date: '31/08/2023',
      name: '#614',
    },
    {
      date: '07/09/2023',
      name: '#615',
    },
    {
      date: '14/09/2023',
      name: '#616',
    },
    {
      date: '21/09/2023',
      name: '#617',
    },
    {
      date: '28/09/2023',
      name: '#618',
    },
    {
      date: '05/10/2023',
      name: '#619',
    },
    {
      date: '12/10/2023',
      name: '#620',
    },
    {
      date: '19/10/2023',
      name: '#621',
    },
    {
      date: '26/10/2023',
      name: '#622',
    },
    {
      date: '02/11/2023',
      name: '#623',
    },
    {
      date: '09/11/2023',
      name: '#624',
    },
    {
      date: '16/11/2023',
      name: '#625',
    },
    {
      date: '23/11/2023',
      name: '#626',
    },
    {
      date: '30/11/2023',
      name: '#627',
    },
    {
      date: '07/12/2023',
      name: '#628',
    },
    {
      date: '14/12/2023',
      name: '#629',
    },
    {
      date: '21/12/2023',
      name: '#630',
    },
    {
      date: '28/12/2023',
      name: '#631',
    },
    {
      date: '04/01/2024',
      name: '#632',
    },
    {
      date: '11/01/2024',
      name: '#633',
    },
    {
      date: '18/01/2024',
      name: '#634',
    },
    {
      date: '25/01/2024',
      name: '#635',
    },
    {
      date: '01/02/2024',
      name: '#636',
    },
    {
      date: '08/02/2024',
      name: '#637',
    },
    {
      date: '15/02/2024',
      name: '#638',
    },
    {
      date: '22/02/2024',
      name: '#639',
    },
    {
      date: '29/02/2024',
      name: '#640',
    },
    {
      date: '07/03/2024',
      name: '#641',
    },
    {
      date: '14/03/2024',
      name: '#642',
    },
    {
      date: '21/03/2024',
      name: '#643',
    },
    {
      date: '28/03/2024',
      name: '#644',
    },
    {
      date: '04/04/2024',
      name: '#645',
    },
    {
      date: '11/04/2024',
      name: '#646',
    },
    {
      date: '18/04/2024',
      name: '#647',
    },
    {
      date: '25/04/2024',
      name: '#648',
    },
    {
      date: '02/05/2024',
      name: '#649',
    },
    {
      date: '09/05/2024',
      name: '#650',
    },
    {
      date: '16/05/2024',
      name: '#651',
    },
    {
      date: '23/05/2024',
      name: '#652',
    },
    {
      date: '30/05/2024',
      name: '#653',
    },
    {
      date: '06/06/2024',
      name: '#654',
    },
    {
      date: '13/06/2024',
      name: '#655',
    },
    {
      date: '20/06/2024',
      name: '#656',
    },
    {
      date: '27/06/2024',
      name: '#657',
    },
    {
      date: '04/07/2024',
      name: '#658',
    },
    {
      date: '11/07/2024',
      name: '#659',
    },
    {
      date: '18/07/2024',
      name: '#660',
    },
    {
      date: '25/07/2024',
      name: '#661',
    },
    {
      date: '01/08/2024',
      name: '#662',
    },
    {
      date: '08/08/2024',
      name: '#663',
    },
    {
      date: '15/08/2024',
      name: '#664',
    },
    {
      date: '22/08/2024',
      name: '#665',
    },
    {
      date: '29/08/2024',
      name: '#666',
    },
    {
      date: '05/09/2024',
      name: '#667',
    },
    {
      date: '12/09/2024',
      name: '#668',
    },
    {
      date: '19/09/2024',
      name: '#669',
    },
    {
      date: '26/09/2024',
      name: '#670',
    },
    {
      date: '03/10/2024',
      name: '#671',
    },
    {
      date: '10/10/2024',
      name: '#672',
    },
    {
      date: '17/10/2024',
      name: '#673',
    },
    {
      date: '24/10/2024',
      name: '#674',
    },
    {
      date: '31/10/2024',
      name: '#675',
    },
    {
      date: '07/11/2024',
      name: '#676',
    },
    {
      date: '14/11/2024',
      name: '#677',
    },
    {
      date: '21/11/2024',
      name: '#678',
    },
    {
      date: '28/11/2024',
      name: '#679',
    },
    {
      date: '05/12/2024',
      name: '#680',
    },
    {
      date: '12/12/2024',
      name: '#681',
    },
    {
      date: '19/12/2024',
      name: '#682',
    },
    {
      date: '26/12/2024',
      name: '#683',
    },
    {
      date: '02/01/2025',
      name: '#684',
    },
    {
      date: '09/01/2025',
      name: '#685',
    },
    {
      date: '16/01/2025',
      name: '#686',
    },
    {
      date: '23/01/2025',
      name: '#687',
    },
    {
      date: '30/01/2025',
      name: '#688',
    },
    {
      date: '06/02/2025',
      name: '#689',
    },
    {
      date: '13/02/2025',
      name: '#690',
    },
    {
      date: '20/02/2025',
      name: '#691',
    },
    {
      date: '27/02/2025',
      name: '#692',
    },
    {
      date: '06/03/2025',
      name: '#693',
    },
    {
      date: '13/03/2025',
      name: '#694',
    },
    {
      date: '20/03/2025',
      name: '#695',
    },
    {
      date: '27/03/2025',
      name: '#696',
    },
    {
      date: '03/04/2025',
      name: '#697',
    },
    {
      date: '10/04/2025',
      name: '#698',
    },
    {
      date: '17/04/2025',
      name: '#699',
    },
    {
      date: '24/04/2025',
      name: '#700',
    },
    {
      date: '01/05/2025',
      name: '#701',
    },
    {
      date: '08/05/2025',
      name: '#702',
    },
    {
      date: '15/05/2025',
      name: '#703',
    },
    {
      date: '22/05/2025',
      name: '#704',
    },
    {
      date: '29/05/2025',
      name: '#705',
    },
    {
      date: '05/06/2025',
      name: '#706',
    },
    {
      date: '12/06/2025',
      name: '#707',
    },
    {
      date: '19/06/2025',
      name: '#708',
    },
    {
      date: '26/06/2025',
      name: '#709',
    },
    {
      date: '03/07/2025',
      name: '#710',
    },
    {
      date: '10/07/2025',
      name: '#711',
    },
    {
      date: '17/07/2025',
      name: '#712',
    },
    {
      date: '24/07/2025',
      name: '#713',
    },
    {
      date: '31/07/2025',
      name: '#714',
    },
    {
      date: '07/08/2025',
      name: '#715',
    },
    {
      date: '14/08/2025',
      name: '#716',
    },
    {
      date: '21/08/2025',
      name: '#717',
    },
    {
      date: '28/08/2025',
      name: '#718',
    },
    {
      date: '04/09/2025',
      name: '#719',
    },
    {
      date: '11/09/2025',
      name: '#720',
    },
    {
      date: '18/09/2025',
      name: '#721',
    },
    {
      date: '25/09/2025',
      name: '#722',
    },
    {
      date: '02/10/2025',
      name: '#723',
    },
    {
      date: '09/10/2025',
      name: '#724',
    },
    {
      date: '16/10/2025',
      name: '#725',
    },
    {
      date: '23/10/2025',
      name: '#726',
    },
    {
      date: '30/10/2025',
      name: '#727',
    },
    {
      date: '06/11/2025',
      name: '#728',
    },
    {
      date: '13/11/2025',
      name: '#729',
    },
    {
      date: '20/11/2025',
      name: '#730',
    },
    {
      date: '27/11/2025',
      name: '#731',
    },
    {
      date: '04/12/2025',
      name: '#732',
    },
    {
      date: '11/12/2025',
      name: '#733',
    },
    {
      date: '18/12/2025',
      name: '#734',
    },
    {
      date: '25/12/2025',
      name: '#735',
    },
    {
      date: '01/01/2026',
      name: '#736',
    },
    {
      date: '08/01/2026',
      name: '#737',
    },
    {
      date: '15/01/2026',
      name: '#738',
    },
    {
      date: '22/01/2026',
      name: '#739',
    },
    {
      date: '29/01/2026',
      name: '#740',
    },
    {
      date: '05/02/2026',
      name: '#741',
    },
    {
      date: '12/02/2026',
      name: '#742',
    },
    {
      date: '19/02/2026',
      name: '#743',
    },
    {
      date: '26/02/2026',
      name: '#744',
    },
    {
      date: '05/03/2026',
      name: '#745',
    },
    {
      date: '12/03/2026',
      name: '#746',
    },
    {
      date: '19/03/2026',
      name: '#747',
    },
    {
      date: '26/03/2026',
      name: '#748',
    },
    {
      date: '02/04/2026',
      name: '#749',
    },
    {
      date: '09/04/2026',
      name: '#750',
    },
    {
      date: '16/04/2026',
      name: '#751',
    },
    {
      date: '23/04/2026',
      name: '#752',
    },
    {
      date: '30/04/2026',
      name: '#753',
    },
    {
      date: '07/05/2026',
      name: '#754',
    },
    {
      date: '14/05/2026',
      name: '#755',
    },
    {
      date: '21/05/2026',
      name: '#756',
    },
    {
      date: '28/05/2026',
      name: '#757',
    },
    {
      date: '04/06/2026',
      name: '#758',
    },
    {
      date: '11/06/2026',
      name: '#759',
    },
    {
      date: '18/06/2026',
      name: '#760',
    },
    {
      date: '25/06/2026',
      name: '#761',
    },
    {
      date: '02/07/2026',
      name: '#762',
    },
    {
      date: '09/07/2026',
      name: '#763',
    },
    {
      date: '16/07/2026',
      name: '#764',
    },
    {
      date: '23/07/2026',
      name: '#765',
    },
    {
      date: '30/07/2026',
      name: '#766',
    },
    {
      date: '06/08/2026',
      name: '#767',
    },
    {
      date: '13/08/2026',
      name: '#768',
    },
    {
      date: '20/08/2026',
      name: '#769',
    },
    {
      date: '27/08/2026',
      name: '#770',
    },
    {
      date: '03/09/2026',
      name: '#771',
    },
    {
      date: '10/09/2026',
      name: '#772',
    },
    {
      date: '17/09/2026',
      name: '#773',
    },
    {
      date: '24/09/2026',
      name: '#774',
    },
    {
      date: '01/10/2026',
      name: '#775',
    },
    {
      date: '08/10/2026',
      name: '#776',
    },
    {
      date: '15/10/2026',
      name: '#777',
    },
    {
      date: '22/10/2026',
      name: '#778',
    },
    {
      date: '29/10/2026',
      name: '#779',
    },
    {
      date: '05/11/2026',
      name: '#780',
    },
    {
      date: '12/11/2026',
      name: '#781',
    },
    {
      date: '19/11/2026',
      name: '#782',
    },
    {
      date: '26/11/2026',
      name: '#783',
    },
    {
      date: '03/12/2026',
      name: '#784',
    },
    {
      date: '10/12/2026',
      name: '#785',
    },
    {
      date: '17/12/2026',
      name: '#786',
    },
    {
      date: '24/12/2026',
      name: '#787',
    },
    {
      date: '31/12/2026',
      name: '#788',
    },
    {
      date: '07/01/2027',
      name: '#789',
    },
    {
      date: '14/01/2027',
      name: '#790',
    },
    {
      date: '21/01/2027',
      name: '#791',
    },
    {
      date: '28/01/2027',
      name: '#792',
    },
    {
      date: '05/02/2027',
      name: '#793',
    },
    {
      date: '12/02/2027',
      name: '#794',
    },
    {
      date: '19/02/2027',
      name: '#795',
    },
    {
      date: '26/02/2027',
      name: '#796',
    },
    {
      date: '05/03/2027',
      name: '#797',
    },
    {
      date: '12/03/2027',
      name: '#798',
    },
    {
      date: '19/03/2027',
      name: '#799',
    },
    {
      date: '26/03/2027',
      name: '#800',
    },
    {
      date: '02/04/2027',
      name: '#801',
    },
    {
      date: '09/04/2027',
      name: '#802',
    },
    {
      date: '16/04/2027',
      name: '#803',
    },
    {
      date: '23/04/2027',
      name: '#804',
    },
    {
      date: '30/04/2027',
      name: '#805',
    },
    {
      date: '07/05/2027',
      name: '#806',
    },
    {
      date: '14/05/2027',
      name: '#807',
    },
    {
      date: '21/05/2027',
      name: '#808',
    },
    {
      date: '28/05/2027',
      name: '#809',
    },
    {
      date: '04/06/2027',
      name: '#810',
    },
    {
      date: '11/06/2027',
      name: '#811',
    },
    {
      date: '18/06/2027',
      name: '#812',
    },
    {
      date: '25/06/2027',
      name: '#813',
    },
    {
      date: '02/07/2027',
      name: '#814',
    },
    {
      date: '09/07/2027',
      name: '#815',
    },
    {
      date: '16/07/2027',
      name: '#816',
    },
    {
      date: '23/07/2027',
      name: '#817',
    },
    {
      date: '30/07/2027',
      name: '#818',
    },
    {
      date: '06/08/2027',
      name: '#819',
    },
    {
      date: '13/08/2027',
      name: '#820',
    },
    {
      date: '20/08/2027',
      name: '#821',
    },
    {
      date: '27/08/2027',
      name: '#822',
    },
    {
      date: '03/09/2027',
      name: '#823',
    },
    {
      date: '10/09/2027',
      name: '#824',
    },
    {
      date: '17/09/2027',
      name: '#825',
    },
    {
      date: '24/09/2027',
      name: '#826',
    },
    {
      date: '01/10/2027',
      name: '#827',
    },
    {
      date: '08/10/2027',
      name: '#828',
    },
    {
      date: '15/10/2027',
      name: '#829',
    },
    {
      date: '22/10/2027',
      name: '#830',
    },
    {
      date: '29/10/2027',
      name: '#831',
    },
    {
      date: '05/11/2027',
      name: '#832',
    },
    {
      date: '12/11/2027',
      name: '#833',
    },
    {
      date: '19/11/2027',
      name: '#834',
    },
    {
      date: '26/11/2027',
      name: '#835',
    },
    {
      date: '03/12/2027',
      name: '#836',
    },
    {
      date: '10/12/2027',
      name: '#837',
    },
    {
      date: '17/12/2027',
      name: '#838',
    },
    {
      date: '24/12/2027',
      name: '#839',
    },
    {
      date: '31/12/2027',
      name: '#840',
    },
    {
      date: '07/01/2028',
      name: '#841',
    },
    {
      date: '14/01/2028',
      name: '#842',
    },
    {
      date: '21/01/2028',
      name: '#843',
    },
    {
      date: '28/01/2028',
      name: '#844',
    },
    {
      date: '05/02/2028',
      name: '#845',
    },
    {
      date: '12/02/2028',
      name: '#846',
    },
    {
      date: '19/02/2028',
      name: '#847',
    },
    {
      date: '26/02/2028',
      name: '#848',
    },
    {
      date: '04/03/2028',
      name: '#849',
    },
    {
      date: '11/03/2028',
      name: '#850',
    },
    {
      date: '18/03/2028',
      name: '#851',
    },
    {
      date: '25/03/2028',
      name: '#852',
    },
    {
      date: '01/04/2028',
      name: '#853',
    },
    {
      date: '08/04/2028',
      name: '#854',
    },
    {
      date: '15/04/2028',
      name: '#855',
    },
    {
      date: '22/04/2028',
      name: '#856',
    },
    {
      date: '29/04/2028',
      name: '#857',
    },
    {
      date: '06/05/2028',
      name: '#858',
    },
    {
      date: '13/05/2028',
      name: '#859',
    },
    {
      date: '20/05/2028',
      name: '#860',
    },
    {
      date: '27/05/2028',
      name: '#861',
    },
    {
      date: '03/06/2028',
      name: '#862',
    },
    {
      date: '10/06/2028',
      name: '#863',
    },
    {
      date: '17/06/2028',
      name: '#864',
    },
    {
      date: '24/06/2028',
      name: '#865',
    },
    {
      date: '01/07/2028',
      name: '#866',
    },
    {
      date: '08/07/2028',
      name: '#867',
    },
    {
      date: '15/07/2028',
      name: '#868',
    },
    {
      date: '22/07/2028',
      name: '#869',
    },
    {
      date: '29/07/2028',
      name: '#870',
    },
    {
      date: '05/08/2028',
      name: '#871',
    },
    {
      date: '12/08/2028',
      name: '#872',
    },
    {
      date: '19/08/2028',
      name: '#873',
    },
    {
      date: '26/08/2028',
      name: '#874',
    },
    {
      date: '02/09/2028',
      name: '#875',
    },
    {
      date: '09/09/2028',
      name: '#876',
    },
    {
      date: '16/09/2028',
      name: '#877',
    },
    {
      date: '23/09/2028',
      name: '#878',
    },
    {
      date: '30/09/2028',
      name: '#879',
    },
    {
      date: '07/10/2028',
      name: '#880',
    },
    {
      date: '14/10/2028',
      name: '#881',
    },
    {
      date: '21/10/2028',
      name: '#882',
    },
    {
      date: '28/10/2028',
      name: '#883',
    },
    {
      date: '04/11/2028',
      name: '#884',
    },
    {
      date: '11/11/2028',
      name: '#885',
    },
    {
      date: '18/11/2028',
      name: '#886',
    },
    {
      date: '25/11/2028',
      name: '#887',
    },
    {
      date: '02/12/2028',
      name: '#888',
    },
    {
      date: '09/12/2028',
      name: '#889',
    },
    {
      date: '16/12/2028',
      name: '#890',
    },
    {
      date: '23/12/2028',
      name: '#891',
    },
    {
      date: '30/12/2028',
      name: '#892',
    },
    {
      date: '06/01/2029',
      name: '#893',
    },
    {
      date: '13/01/2029',
      name: '#894',
    },
    {
      date: '20/01/2029',
      name: '#895',
    },
    {
      date: '27/01/2029',
      name: '#896',
    },
    {
      date: '03/02/2029',
      name: '#897',
    },
    {
      date: '10/02/2029',
      name: '#898',
    },
    {
      date: '17/02/2029',
      name: '#899',
    },
    {
      date: '24/02/2029',
      name: '#900',
    },
    {
      date: '03/03/2029',
      name: '#901',
    },
    {
      date: '10/03/2029',
      name: '#902',
    },
    {
      date: '17/03/2029',
      name: '#903',
    },
    {
      date: '24/03/2029',
      name: '#904',
    },
    {
      date: '31/03/2029',
      name: '#905',
    },
    {
      date: '07/04/2029',
      name: '#906',
    },
    {
      date: '14/04/2029',
      name: '#907',
    },
    {
      date: '21/04/2029',
      name: '#908',
    },
    {
      date: '28/04/2029',
      name: '#909',
    },
    {
      date: '05/05/2029',
      name: '#910',
    },
    {
      date: '12/05/2029',
      name: '#911',
    },
    {
      date: '19/05/2029',
      name: '#912',
    },
    {
      date: '26/05/2029',
      name: '#913',
    },
    {
      date: '02/06/2029',
      name: '#914',
    },
    {
      date: '09/06/2029',
      name: '#915',
    },
    {
      date: '16/06/2029',
      name: '#916',
    },
    {
      date: '23/06/2029',
      name: '#917',
    },
    {
      date: '30/06/2029',
      name: '#918',
    },
    {
      date: '07/07/2029',
      name: '#919',
    },
    {
      date: '14/07/2029',
      name: '#920',
    },
    {
      date: '21/07/2029',
      name: '#921',
    },
    {
      date: '28/07/2029',
      name: '#922',
    },
    {
      date: '04/08/2029',
      name: '#923',
    },
    {
      date: '11/08/2029',
      name: '#924',
    },
    {
      date: '18/08/2029',
      name: '#925',
    },
    {
      date: '25/08/2029',
      name: '#926',
    },
    {
      date: '01/09/2029',
      name: '#927',
    },
    {
      date: '08/09/2029',
      name: '#928',
    },
    {
      date: '15/09/2029',
      name: '#929',
    },
    {
      date: '22/09/2029',
      name: '#930',
    },
    {
      date: '29/09/2029',
      name: '#931',
    },
    {
      date: '06/10/2029',
      name: '#932',
    },
    {
      date: '13/10/2029',
      name: '#933',
    },
    {
      date: '20/10/2029',
      name: '#934',
    },
    {
      date: '27/10/2029',
      name: '#935',
    },
    {
      date: '03/11/2029',
      name: '#936',
    },
    {
      date: '10/11/2029',
      name: '#937',
    },
    {
      date: '17/11/2029',
      name: '#938',
    },
    {
      date: '24/11/2029',
      name: '#939',
    },
    {
      date: '01/12/2029',
      name: '#940',
    },
    {
      date: '08/12/2029',
      name: '#941',
    },
    {
      date: '15/12/2029',
      name: '#942',
    },
    {
      date: '22/12/2029',
      name: '#943',
    },
    {
      date: '29/12/2029',
      name: '#944',
    },
    {
      date: '05/01/2030',
      name: '#945',
    },
    {
      date: '12/01/2030',
      name: '#946',
    },
    {
      date: '19/01/2030',
      name: '#947',
    },
    {
      date: '26/01/2030',
      name: '#948',
    },
    {
      date: '02/02/2030',
      name: '#949',
    },
    {
      date: '09/02/2030',
      name: '#950',
    },
    {
      date: '16/02/2030',
      name: '#951',
    },
    {
      date: '23/02/2030',
      name: '#952',
    },
    {
      date: '02/03/2030',
      name: '#953',
    },
    {
      date: '09/03/2030',
      name: '#954',
    },
    {
      date: '16/03/2030',
      name: '#955',
    },
    {
      date: '23/03/2030',
      name: '#956',
    },
    {
      date: '30/03/2030',
      name: '#957',
    },
    {
      date: '06/04/2030',
      name: '#958',
    },
    {
      date: '13/04/2030',
      name: '#959',
    },
    {
      date: '20/04/2030',
      name: '#960',
    },
    {
      date: '27/04/2030',
      name: '#961',
    },
    {
      date: '04/05/2030',
      name: '#962',
    },
    {
      date: '11/05/2030',
      name: '#963',
    },
    {
      date: '18/05/2030',
      name: '#964',
    },
    {
      date: '25/05/2030',
      name: '#965',
    },
    {
      date: '01/06/2030',
      name: '#966',
    },
    {
      date: '08/06/2030',
      name: '#967',
    },
    {
      date: '15/06/2030',
      name: '#968',
    },
    {
      date: '22/06/2030',
      name: '#969',
    },
    {
      date: '29/06/2030',
      name: '#970',
    },
    {
      date: '06/07/2030',
      name: '#971',
    },
    {
      date: '13/07/2030',
      name: '#972',
    },
    {
      date: '20/07/2030',
      name: '#973',
    },
    {
      date: '27/07/2030',
      name: '#974',
    },
    {
      date: '03/08/2030',
      name: '#975',
    },
    {
      date: '10/08/2030',
      name: '#976',
    },
    {
      date: '17/08/2030',
      name: '#977',
    },
    {
      date: '24/08/2030',
      name: '#978',
    },
    {
      date: '31/08/2030',
      name: '#979',
    },
    {
      date: '07/09/2030',
      name: '#980',
    },
    {
      date: '14/09/2030',
      name: '#981',
    },
    {
      date: '21/09/2030',
      name: '#982',
    },
    {
      date: '28/09/2030',
      name: '#983',
    },
    {
      date: '05/10/2030',
      name: '#984',
    },
    {
      date: '12/10/2030',
      name: '#985',
    },
    {
      date: '19/10/2030',
      name: '#986',
    },
    {
      date: '26/10/2030',
      name: '#987',
    },
    {
      date: '02/11/2030',
      name: '#988',
    },
    {
      date: '09/11/2030',
      name: '#989',
    },
    {
      date: '16/11/2030',
      name: '#990',
    },
    {
      date: '23/11/2030',
      name: '#991',
    },
    {
      date: '30/11/2030',
      name: '#992',
    },
    {
      date: '07/12/2030',
      name: '#993',
    },
    {
      date: '14/12/2030',
      name: '#994',
    },
    {
      date: '21/12/2030',
      name: '#995',
    },
    {
      date: '28/12/2030',
      name: '#996',
    },
    {
      date: '04/01/2031',
      name: '#997',
    },
    {
      date: '11/01/2031',
      name: '#998',
    },
    {
      date: '18/01/2031',
      name: '#999',
    },
    {
      date: '25/01/2031',
      name: '#1000',
    },
  ];

  const asados = [];
  for (const data of asadoData) {
    const { date, ...rest } = data;

    // Convertir la fecha de string a Date
    const formattedDate = new Date(date.split('/').reverse().join('-')); // Cambiar de "DD/MM/YYYY" a "YYYY-MM-DD"

    const asado = await prisma.asado.create({
      data: {
        ...rest, // Resto de los campos
        date: formattedDate, // Fecha convertida
      },
    });

    asados.push(asado);
  }

  // console.log('Asados sembrados')

  // Sembrar eventos (5 eventos, cada uno con un asado asociado)
  for (let i = 0; i < 5; i++) {
    const evento = await prisma.evento.create({
      data: {
        nombre: `Evento ${i + 1}`,
        fecha: asados[i].date,
        sede: `Sede ${i + 1}`,
        usuarioId: Math.floor(Math.random() * 10) + 1, // Asignar usuario aleatorio
        asadoId: asados[i].id, // Asignar asado correspondiente
      },
    });

    // console.log(`Evento ${i + 1} sembrado`)

    // Asociar participantes aleatorios (de los 10 usuarios)
    const participantes = await prisma.participante.createMany({
      data: Array.from({ length: Math.floor(Math.random() * 5) + 1 }).map(
        () => ({
          nombre: `Participante ${Math.floor(Math.random() * 10) + 1}`,
          eventoId: evento.id,
        })
      ),
    });

    // console.log(`Participantes sembrados para el evento ${i + 1}`)

    // Crear gastos aleatorios (asociados a tipo de gasto y evento)
    const gastos = await prisma.gasto.createMany({
      data: Array.from({ length: 3 }).map(() => ({
        monto: Math.floor(Math.random() * 100) + 1,
        descripcion: `Gasto en insumo ${Math.floor(Math.random() * 3) + 1}`,
        tipoGastoId: Math.floor(Math.random() * 3) + 1,
        eventoId: evento.id,
      })),
    });

    // console.log(`Gastos sembrados para el evento ${i + 1}`)
  }

  // console.log('Siembra completada')
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
