---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Vrátí celkový počet sekund doby trvání.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

Vrátí celkový počet sekund zahrnutý do <code>duration</code>.


## Examples

### Example #1 
Vyhledat celkový počet sekund zahrnutý do hodnoty doby trvání.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
