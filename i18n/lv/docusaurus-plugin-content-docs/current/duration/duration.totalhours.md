---
title: Duration.TotalHours
---

# Duration.TotalHours


Atgriež kopējo stundu skaitu šajos intervālos.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Atgriež kopējo stundu skaitu, kas ietilpst `duration`.


## Examples

### Example #1
Atrast kopējo stundu skaitu, kas ietilpst ilguma vērtībā.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
