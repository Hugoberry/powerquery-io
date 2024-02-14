---
title: Duration.TotalDays
---

# Duration.TotalDays


Restituisce i giorni totali della durata.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Restituisce i giorni totali con spanning per <code>duration</code>.


## Examples

### Example #1 
Trovare i giorni totali con spanning per un valore di durata.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
