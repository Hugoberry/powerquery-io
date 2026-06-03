---
title: Date.EndOfMonth
---

# Date.EndOfMonth


返回月结束值。


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

返回包含 `dateTime` 的月结束值。

-   `dateTime`: 从中计算月结束值的 `date`、`datetime` 或 `datetimezone`。


## Examples

### Example #1
获取 5/14/2011 的月份结束值。
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
获取 5/17/2011 05:00:00 PM -7:00 的月份结束值。
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
