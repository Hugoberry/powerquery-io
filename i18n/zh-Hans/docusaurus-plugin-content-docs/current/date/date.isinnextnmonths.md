---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


指示此日期是否会在系统当前日期和时间确定的下一月数中出现。请注意，当传递一个在当前月内出现的值时，此函数将返回 false。


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

指示给定的日期时间值 `dateTime` 是否会在系统当前日期和时间确定的下一月数中出现。请注意，当传递一个在当前月内出现的值时，此函数将返回 false。

-   `dateTime`: 要计算的 `date`、`datetime` 或 `datetimezone` 值。
-   `months`: 月数。


## Examples

### Example #1
确定当前系统时间之后的月份是否在接下来的两个月中。
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
