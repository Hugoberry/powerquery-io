---
title: Duration.ToRecord
---

# Duration.ToRecord


Retorna um registro contendo as partes do valor duration.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Retorna um registro contendo as partes do valor duration, `duration`.

-   `duration`: um valor `duration` por meio do qual o registro é criado.


## Examples

### Example #1
Converta `#duration(2, 5, 55, 20)` em um registro de suas partes, incluindo dias, horas, minutos e segundos, se aplicável.
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
