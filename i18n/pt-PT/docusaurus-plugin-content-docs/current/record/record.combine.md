---
title: Record.Combine
---

# Record.Combine


Combina os registos na lista especificada.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Combina os registos no `records` especificado. Se `records` contiver valores que não sejam registos, é devolvido um erro.


## Examples

### Example #1
Criar um registo combinado a partir dos registos.
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
