---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Vráti celkový počet hodín rozsahu tohto trvania.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Vráti celkový počet hodín zahrnutých podľa <code>duration</code>.


## Examples

### Example #1 
Nájdite celkový počet hodín zahrnutých podľa hodnoty trvania.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
