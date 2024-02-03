---
title: Record.ToList
---

# Record.ToList


## Description

Retorna una llista de valors que conté els valors de camp del registre d&#39;entrada.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Retorna una llista de valors que conté els valors de camp de l'entrada <code>record</code>.


## Examples

### Example #1 
Extreu els valors de camp d&#39;un registre.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
