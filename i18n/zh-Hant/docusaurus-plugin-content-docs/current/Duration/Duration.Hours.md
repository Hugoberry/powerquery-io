---
title: Duration.Hours
---

# Duration.Hours


傳回持續時間的小時數部分。


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

傳回 <code>duration</code> 的小時部分。


## Examples

### Example #1 
從持續時間值擷取時數。
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
