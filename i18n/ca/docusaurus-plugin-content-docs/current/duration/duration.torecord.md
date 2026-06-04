---
title: Duration.ToRecord
---

# Duration.ToRecord


Retorna un registre que conté les parts de la durada.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Retorna un registre que conté les parts del valor duration, `duration`.

-   `duration`: valor `duration` a partir del qual es crea el registre.


## Examples

### Example #1
Converteix `#duration(2, 5, 55, 20)` en un registre de les seves parts, que inclouen dies, hores, minuts i segons, si correspon.
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
