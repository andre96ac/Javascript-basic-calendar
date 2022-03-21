# my-grid



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description | Type            | Default      |
| ----------- | --------- | ----------- | --------------- | ------------ |
| `listTasks` | --        |             | `MyTaskModel[]` | `[]`         |
| `startDate` | --        |             | `Date`          | `new Date()` |


## Dependencies

### Used by

 - [my-calendar](../my-calendar)

### Depends on

- [time-scale](../time-scale)
- [my-day](../my-day)

### Graph
```mermaid
graph TD;
  my-grid --> time-scale
  my-grid --> my-day
  my-day --> my-task
  my-calendar --> my-grid
  style my-grid fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
