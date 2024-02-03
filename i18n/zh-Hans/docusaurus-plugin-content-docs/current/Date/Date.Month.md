---
title: Date.Month
---

# Date.Month


## Description

返回月份部分。


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

返回提供的 <code>datetime</code> 值 <code>dateTime</code> 的月份部分。


## Examples

### Example #1 
查找 #datetime(2011, 12, 31, 9, 15, 36) 中的月份。
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
