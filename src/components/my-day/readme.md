# my-day



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description | Type            | Default     |
| ------------- | --------- | ----------- | --------------- | ----------- |
| `currentDate` | --        |             | `Date`          | `undefined` |
| `listTasks`   | --        |             | `MyTaskModel[]` | `[]`        |


## Events

| Event             | Description | Type                  |
| ----------------- | ----------- | --------------------- |
| `requestAddTask`  |             | `CustomEvent<Date>`   |
| `requestEditTask` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [my-grid](../my-grid)

### Depends on

- [my-task](../my-task)

### Graph
```mermaid
graph TD;
  my-day --> my-task
  my-grid --> my-day
  style my-day fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
