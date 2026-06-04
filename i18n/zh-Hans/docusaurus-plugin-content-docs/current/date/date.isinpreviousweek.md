---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


指示此日期是否会在系统当前日期和时间确定的上一周中出现。请注意，当传递一个在当前周内出现的值时，此函数将返回 false。


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Remarks

指示给定的日期时间值 `dateTime` 是否会在系统当前日期和时间确定的上一周中出现。请注意，当传递一个在当前周内出现的值时，此函数将返回 false。

-   `dateTime`: 要计算的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
确定当前系统时间之前的那个星期是否处于上个星期。
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
