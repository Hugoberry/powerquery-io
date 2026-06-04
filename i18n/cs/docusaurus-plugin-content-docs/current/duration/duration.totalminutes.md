---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Vrátí celkový počet minut doby trvání.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Vrátí celkový počet minut zahrnutý do `duration`.


## Examples

### Example #1
Vyhledat celkový počet minut zahrnutý do hodnoty doby trvání.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
