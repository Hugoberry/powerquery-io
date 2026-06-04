---
title: Date.Year
---

# Date.Year


返回年份部分。


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

返回提供的 `datetime` 值 `dateTime` 的年份部分。


## Examples

### Example #1
查找 #datetime(2011, 12, 31, 9, 15, 36) 中的年份。
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
