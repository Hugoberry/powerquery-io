---
title: Duration.Days
---

# Duration.Days


## Description

傳回持續時間的天數部分。


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

傳回 <code>duration</code> 的天數部分。


## Examples

### Example #1 
擷取兩個日期之間的天數。
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
