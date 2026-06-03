---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


指示此日期是否会在系统当前日期和时间确定的上一季度中出现。请注意，当传递一个在当前季度内出现的值时，此函数将返回 false。


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

指示给定的日期时间值 `dateTime` 是否会在系统当前日期和时间确定的上一季度中出现。请注意，当传递一个在当前季度内出现的值时，此函数将返回 false。

-   `dateTime`: 要计算的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
确定当前系统时间之前的那个季度是否处于上个季度。
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
