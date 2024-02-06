---
title: Date.MonthName
---

# Date.MonthName


返回月份名称部分。


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

返回所提供的 <code>date</code> 的月份部分的名称。还可提供可选的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
获取月份名称。
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
