---
title: Record.ToList
---

# Record.ToList


## Description

Devolve unha lista de valores que contén os valores de campo do rexistro de entrada.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Devolve unha lista de valores que contén os valores de campo da entrada <code>record</code>.


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
