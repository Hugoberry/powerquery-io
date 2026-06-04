---
title: Duration.Seconds
---

# Duration.Seconds


Devolve a parte dos segundos dunha duración.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Devolve a parte dos segundos de `duration`.


## Examples

### Example #1
Extrae os segundos dun valor de duración.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
