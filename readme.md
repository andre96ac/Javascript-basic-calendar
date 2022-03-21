# Javascript basic calendar

Simple implementation of a graphic calendar, created with Stencil Js

<img src="./assets/screenshot.png">

<br>
<br>
<br>

## Vanilla Js
<hr>

### Installation


### Use


### Passing tasks
```html
<body>
    <my-calendar></my-calendar>
</body>
```


```typescript
const tasks: MyTaskModel[] = [
    {
        colorCode: '#6AFFC0',
        description: 'Questo è un bellissimo evento di prova',
        id: 'dlfkslfs09s8fsoidks9f0s',
        name: 'Prova',
        startDate: new Date(2022, 2, 24, 2, 0),
        endDate: new Date(2022, 2, 24, 3, 0)
    },
    {
        colorCode: '#6AFFC0',
        description: 'Questo è un bellissimo evento di prova',
        id: 'dlfkslfs09s8fsoidks9f0s',
        name: 'Prova2',
        startDate: new Date(2022, 2, 23, 4, 30),
        endDate: new Date(2022, 2, 23, 7, 50)
    },
    
]

const myCalendar = document.querySelector('my-calendar');
myCalendar.inputTasks = tasks

```


### Handling Events
Events Availables: 
- requestEditTask => Fired when user click on the task
- requestAddTask => Fired when user click on an empty slot
- requestChangeDates => Fired when user click on the topbar (days bar)

```Typescript
const myCalendar = document.querySelector('my-calendar');

myCalendar.addEventListener('requestEditTask', () => console.log(ev.detail)) //ev.detail => clicked task id, as you passed in the array (dlfkslfs09s8fsoidks9f0s)
myCalendar.addEventListener('requestAddTask', console.log) //ev.detail => clicked slot date and time
myCalendar.addEventListener('requestChangeDates', console.log) //ev.detail => void

```


<br>
<br>
<br>
<br>

## Angular
<hr>


###### Not tested yet