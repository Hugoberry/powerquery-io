---
title: Duration.Seconds
---

# Duration.Seconds


## Description

傳回持續時間的秒數部分。


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

傳回 <code>duration</code> 的秒數部分。


## Examples

### Example #1 
從持續時間值擷取秒數。
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
