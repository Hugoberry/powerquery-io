---
title: Duration.TotalHours
---

# Duration.TotalHours


Vrátí celkový počet hodin doby trvání.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Vrátí celkový počet hodin zahrnutý do `duration`.


## Examples

### Example #1
Vyhledat celkový počet hodin zahrnutý do hodnoty doby trvání.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
