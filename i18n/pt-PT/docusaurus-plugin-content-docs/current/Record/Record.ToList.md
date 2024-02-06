---
title: Record.ToList
---

# Record.ToList


Devolve uma lista de valores que contêm os valores do registo de entrada.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Devolve uma lista de valores que contêm os valores dos campos existentes na entrada <code>record</code>.


## Examples

### Example #1 
Extrair os valores dos campos de um registo.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
