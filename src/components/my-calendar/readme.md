# my-calendar



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description | Type            | Default |
| ------------ | --------- | ----------- | --------------- | ------- |
| `inputTasks` | --        |             | `MyTaskModel[]` | `[]`    |


## Dependencies

### Depends on

- [days-scale](../days-scale)
- [my-grid](../my-grid)

### Graph
```mermaid
graph TD;
  my-calendar --> days-scale
  my-calendar --> my-grid
  my-grid --> time-scale
  my-grid --> my-day
  my-day --> my-task
  style my-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
