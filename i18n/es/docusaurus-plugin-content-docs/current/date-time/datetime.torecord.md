---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Devuelve un registro que contiene los elementos del valor de datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Devuelve un registro que contiene los elementos del valor datetime especificado, `dateTime`.

-   `dateTime`: un valor `datetime` a partir del cual se calculará el registro de sus partes.


## Examples

### Example #1
Convertir el valor `#datetime(2011, 12, 31, 11, 56, 2)` en un registro que contenga valores de fecha y hora.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
