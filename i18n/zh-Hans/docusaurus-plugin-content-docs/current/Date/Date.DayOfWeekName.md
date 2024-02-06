---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


返回星期几。


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

返回所提供的 <code>date</code> 的星期几名称。还可提供可选的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
获取星期几。
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
