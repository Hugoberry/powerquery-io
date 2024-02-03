---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

Vrátí celkový počet minut doby trvání.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

Vrátí celkový počet minut zahrnutý do <code>duration</code>.


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
