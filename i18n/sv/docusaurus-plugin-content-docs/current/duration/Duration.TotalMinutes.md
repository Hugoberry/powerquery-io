---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Returnerar totalt antal minuter som varaktigheten omfattar.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Returnerar det totala antalet minuter som omfattas av <code>duration</code>.


## Examples

### Example #1 
Hitta det totala antalet minuter som omfattas av ett varaktighetsvärde.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
