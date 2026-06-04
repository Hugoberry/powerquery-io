---
title: Duration.Seconds
---

# Duration.Seconds


Retorna la part de segons d'una duració.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Retorna la part de segons de `duration`.


## Examples

### Example #1
Extraieu els segons d'un valor de duració.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
