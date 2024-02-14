---
title: Record.Combine
---

# Record.Combine


Combina os registros na lista especificada.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Combina os registros na <code>records</code> especificada. Se a <code>records</code> contiver valores não pertencentes a registro, um erro será retornado.


## Examples

### Example #1 
Criar um registro combinado dos registros.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
