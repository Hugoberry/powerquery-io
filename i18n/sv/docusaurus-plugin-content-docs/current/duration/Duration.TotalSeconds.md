---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Returnerar totalt antal sekunder som varaktigheten omfattar.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Returnerar det totala antalet sekunder som <code>duration</code>.


## Examples

### Example #1 
Hitta det totala antalet sekunder som omfattas av ett varaktighetsvärde.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
