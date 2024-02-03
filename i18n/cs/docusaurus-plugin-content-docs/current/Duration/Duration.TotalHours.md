---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Vrátí celkový počet hodin doby trvání.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Vrátí celkový počet hodin zahrnutý do <code>duration</code>.


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
