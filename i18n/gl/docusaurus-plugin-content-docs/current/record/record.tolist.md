---
title: Record.ToList
---

# Record.ToList


Devolve unha lista de valores que contén os valores de campo do rexistro de entrada.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Devolve unha lista de valores que contén os valores de campo da entrada `record`.


## Examples

### Example #1
Extraer os valores de campo dun rexistro.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
