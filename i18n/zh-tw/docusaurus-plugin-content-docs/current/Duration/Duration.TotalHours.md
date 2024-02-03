---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

傳回這個持續時間跨越的總時數。


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

傳回 <code>duration</code> 跨越的總時數。


## Examples

### Example #1 
尋找持續時間值跨越的總時數。
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
