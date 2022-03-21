import { MyTaskModel } from './utils/models/myTaskModel';

export { Components, JSX } from './components';


const tasks: MyTaskModel[] = [
    {
        colorCode: '#FF6A6A',
        description: 'Questo è un bellissimo evento di prova',
        id: 'dlfkslfs09s8fsoidks9f0s',
        name: 'Prova',
        startDate: new Date(2022, 2, 24, 2, 0),
        endDate: new Date(2022, 2, 24, 3, 0)
    },
    {
        colorCode: '#6AFF7A',
        description: 'Questo è un bellissimo evento di prova',
        id: 'dlfkslfs09s8fsoidks9f0s',
        name: 'Prova',
        startDate: new Date(2022, 2, 24, 4, 0),
        endDate: new Date(2022, 2, 24, 6, 0)
    },
    {
        colorCode: '#FF6A6A',
        description: 'Questo è un bellissimo evento di prova',
        id: 'dlfkslfs09s8fsoidks9f0s',
        name: 'Prova2',
        startDate: new Date(2022, 2, 23, 4, 30),
        endDate: new Date(2022, 2, 23, 7, 50)
    },
    {
        colorCode: '#6AFFC0',
        description: 'Questo è un bellissimo evento di prova',
        id: 'dlfkslfs09s8fsoidks9f0s',
        name: 'Prova2',
        startDate: new Date(2022, 2, 23, 8, 30),
        endDate: new Date(2022, 2, 23, 12, 0)
    },
    {
        colorCode: '#6AFFC0',
        description: 'Questo è un bellissimo evento di prova',
        id: 'dlfkslfs09s8fsoidks9f0s',
        name: 'Prova2',
        startDate: new Date(2022, 2, 21, 4, 40),
        endDate: new Date(2022, 2, 21, 7, 0)
    },
    {
        colorCode: '#419DFF',
        description: 'Questo è un bellissimo evento di prova',
        id: 'dlfkslfs09s8fsoidks9f0s',
        name: 'Prova2',
        startDate: new Date(2022, 2, 21, 1, 30),
        endDate: new Date(2022, 2, 21, 4, 0)
    },
    {
        colorCode: '#6AFFC0',
        description: 'Questo è un bellissimo evento di prova',
        id: 'dlfkslfs09s8fsoidks9f0s',
        name: 'Prova2',
        startDate: new Date(2022, 2, 25, 6, 30),
        endDate: new Date(2022, 2, 25, 13, 50)
    },
    
]

// const myComponents = document.querySelectorAll('my-day');
// myComponents.forEach(comp => {
//     comp.listTasks = tasks; 
//     comp.addEventListener('clickedTitle', (ev) => {console.log(ev)})
//     comp.addEventListener('clickedBody', (ev) => {console.log(ev)})

// })


const myCalendar = document.querySelector('my-calendar');

myCalendar.inputTasks = tasks


myCalendar.addEventListener('requestEditTask', console.log)
myCalendar.addEventListener('requestAddTask', console.log)
myCalendar.addEventListener('requestChangeDates', console.log)

