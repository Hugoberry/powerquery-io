---
title: Duration.Hours
---

# Duration.Hours


Retorna la part d'hores d'una duració.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Retorna la part d'hores de `duration`.


## Examples

### Example #1
Extraieu les hores d'un valor de duració.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
