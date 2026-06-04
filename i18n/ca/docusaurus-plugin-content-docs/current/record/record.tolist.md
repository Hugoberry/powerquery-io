---
title: Record.ToList
---

# Record.ToList


Retorna una llista de valors que conté els valors de camp del registre d'entrada.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Retorna una llista de valors que conté els valors de camp de l'entrada `record`.


## Examples

### Example #1
Extreu els valors de camp d'un registre.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
