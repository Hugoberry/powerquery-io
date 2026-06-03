---
title: Duration.ToRecord
---

# Duration.ToRecord


Devolve um registo que contém as partes da duração.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Devolve um registo que contém as partes do valor de duração, `duration`.

-   `duration`: um valor `duration` a partir do qual o registo é criado.


## Examples

### Example #1
Converta `#duration(2, 5, 55, 20)` num registo das respetivas partes, com dias, horas, minutos e segundos, se aplicável.
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
