---
title: Date.ToRecord
---

# Date.ToRecord


Devuelve un registro que contiene los elementos del valor de fecha.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Devuelve un registro que contiene los elementos del valor date especificado, `date`.

-   `date`: un valor `date` a partir del cual se calculará el registro de sus partes.


## Examples

### Example #1
Convertir el valor `#date(2011, 12, 31)` en un registro que contenga las partes del valor de fecha.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
