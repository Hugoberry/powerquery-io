---
title: Duration.TotalHours
---

# Duration.TotalHours


Restituisce le ore totali della durata.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Restituisce le ore con spanning per <code>duration</code>.


## Examples

### Example #1 
Trovare le ore totali con spanning per un valore di durata.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
