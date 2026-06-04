---
title: Duration.Minutes
---

# Duration.Minutes


Retorna la part de minuts d'una duració.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Retorna la part de minuts de `duration`.


## Examples

### Example #1
Extraieu els minuts d'un valor de duració.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
