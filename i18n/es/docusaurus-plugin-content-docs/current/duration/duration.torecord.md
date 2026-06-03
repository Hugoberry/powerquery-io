---
title: Duration.ToRecord
---

# Duration.ToRecord


Devuelve un registro que contiene los elementos de la duración.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Devuelve un registro que contiene los elementos del valor duration, `duration`.

-   `duration`: un valor `duration` a partir del que se creará el registro.


## Examples

### Example #1
Convierta `#duration(2, 5, 55, 20)` en un registro de sus partes, incluidos días, horas, minutos y segundos, si procede.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
