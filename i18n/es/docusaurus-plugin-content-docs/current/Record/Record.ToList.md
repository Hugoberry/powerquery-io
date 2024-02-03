---
title: Record.ToList
---

# Record.ToList


## Description

Devuelve una lista de valores que contiene los valores de campo del registro de entrada.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Devuelve una lista de valores que contiene los valores de campo de la entrada <code>record</code>.


## Examples

### Example #1 
Extraer los valores de campo de un registro.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
