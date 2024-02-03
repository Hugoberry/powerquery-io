---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Vrátí celkový počet dnů doby trvání.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Vrátí celkový počet dnů zahrnutý do <code>duration</code>.


## Examples

### Example #1 
Vyhledat celkový počet dnů zahrnutý do hodnoty doby trvání.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
