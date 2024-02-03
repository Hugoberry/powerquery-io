---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

傳回這個持續時間跨越的總秒數。


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

傳回 <code>duration</code> 跨越的總秒數。


## Examples

### Example #1 
尋找持續時間值跨越的總秒數。
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
