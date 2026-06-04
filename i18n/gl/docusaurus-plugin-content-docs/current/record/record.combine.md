---
title: Record.Combine
---

# Record.Combine


Combina os rexistros na lista indicada.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Combina os rexistros na `records` indicada. Se `records` contén valores que non son rexistros, devólvese un erro.


## Examples

### Example #1
Crear un rexistro combinado a partir dos rexistros.
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
