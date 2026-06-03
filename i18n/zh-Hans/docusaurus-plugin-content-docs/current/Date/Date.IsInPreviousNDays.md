---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


指示此日期是否会在系统当前日期和时间确定的上一天数中出现。请注意，当传递一个在当前天内出现的值时，此函数将返回 false。


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

指示给定的日期时间值 `dateTime` 是否会在系统当前日期和时间确定的上一天数中出现。请注意，当传递一个在当前天内出现的值时，此函数将返回 false。

-   `dateTime`: 要计算的 `date`、`datetime` 或 `datetimezone` 值。
-   `days`: 天数。


## Examples

### Example #1
确定当前系统时间之前的日期是否在之前的两天中。
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
