---
title: Record.ToList
---

# Record.ToList


## Description

Retorna uma lista de valores que contêm valores de campo do registro de entrada.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Retorna uma lista de valores que contêm valores de campo da entrada <code>record</code>.


## Examples

### Example #1 
Extraia os valores de campo de um registro.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
