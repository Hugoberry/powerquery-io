---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


傳回這個持續時間跨越的總分鐘數。


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

傳回 <code>duration</code> 跨越的總分鐘數。


## Examples

### Example #1 
尋找持續時間值跨越的總分鐘數。
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
