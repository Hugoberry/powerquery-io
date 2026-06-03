---
title: Time.ToRecord
---

# Time.ToRecord


Devuelve un registro que contiene los elementos del valor Time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Devuelve un registro que contiene los elementos del valor Time especificado, `time`.

-   `time`: un valor `time` a partir del cual se calculará el registro de sus partes.


## Examples

### Example #1
Convertir el valor `#time(11, 56, 2)` en un registro que contenga valores Time.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
