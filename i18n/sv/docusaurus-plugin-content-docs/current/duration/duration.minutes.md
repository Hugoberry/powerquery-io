---
title: Duration.Minutes
---

# Duration.Minutes


Returnerar minuternas del av en varaktighet.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Returnerar minuternas del av <code>duration</code>.


## Examples

### Example #1 
Extrahera minuter från ett varaktighetsvärde.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
