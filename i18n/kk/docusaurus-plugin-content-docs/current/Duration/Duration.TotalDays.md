---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Осы ұзақтықтың жалпы күндер санын қайтарады.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

<code>duration</code> мәніне созылған жалпы күндерді қайтарады.


## Examples

### Example #1 
Ұзақтық мәніне созылған жалпы күндерді табу.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
