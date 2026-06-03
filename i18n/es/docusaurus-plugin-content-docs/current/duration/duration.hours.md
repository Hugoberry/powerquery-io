---
title: Duration.Hours
---

# Duration.Hours


Devuelve la parte de horas de una duración.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Devuelve la parte de horas de `duration`.


## Examples

### Example #1
Extraiga las horas de un valor de duración.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
