---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Vráti celkový počet dní rozsahu tohto trvania.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Vráti celkový počet dní zahrnutých podľa <code>duration</code>.


## Examples

### Example #1 
Nájdite celkový počet dní zahrnutých podľa hodnoty trvania.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
