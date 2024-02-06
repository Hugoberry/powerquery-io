---
title: Duration.TotalDays
---

# Duration.TotalDays


傳回這個持續時間跨越的總天數。


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

傳回 <code>duration</code> 跨越的總天數。


## Examples

### Example #1 
尋找持續時間值跨越的總天數。
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
