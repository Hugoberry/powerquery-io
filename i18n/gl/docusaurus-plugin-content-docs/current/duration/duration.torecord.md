---
title: Duration.ToRecord
---

# Duration.ToRecord


Devolve un rexistro que contén as partes da duración.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Devolve un rexistro que contén as partes do valor duration, `duration`.

-   `duration`: un valor `duration` desde o que se crea o rexistro.


## Examples

### Example #1
Converte `#duration(2, 5, 55, 20)` nun rexistro das súas partes, incluíndo días, horas, minutos e segundos se corresponde.
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
