---
title: Duration.Hours
---

# Duration.Hours


Devolve a parte das horas dunha duración.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Devolve a parte das horas de `duration`.


## Examples

### Example #1
Extrae as horas dun valor de duración.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
