---
title: Record.Combine
---

# Record.Combine


## Description

Combina els registres de la llista donada.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Combina els registres de la <code>records</code> donada. Si la <code>records</code> conté valors que no es troben al registre, es retorna un error.


## Examples

### Example #1 
Crea un registre combinat a partir dels registres.
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
