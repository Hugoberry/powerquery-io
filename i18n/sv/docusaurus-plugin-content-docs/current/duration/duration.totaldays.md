---
title: Duration.TotalDays
---

# Duration.TotalDays


Returnerar totalt antal dagar som varaktigheten omfattar.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Returnerar det totala antalet dagar som omfattas av <code>duration</code>.


## Examples

### Example #1 
Hitta det totala antalet dagar som omfattas av ett varaktighetsvärde.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
