---
title: Duration.TotalHours
---

# Duration.TotalHours


Returnerar totalt antal timmar som varaktigheten omfattar.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Returnerar det totala antalet timmar som omfattas av `duration`.


## Examples

### Example #1
Hitta det totala antalet timmar som omfattas av ett varaktighetsvärde.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
