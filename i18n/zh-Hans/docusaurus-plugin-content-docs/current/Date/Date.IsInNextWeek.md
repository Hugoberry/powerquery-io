---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


指示此日期是否会在系统当前日期和时间确定的下周中出现。请注意，当传递一个在当前周内出现的值时，此函数将返回 false。


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Remarks

指示给定的日期时间值 `dateTime` 是否会在系统当前日期和时间确定的下周中出现。请注意，当传递一个在当前周内出现的值时，此函数将返回 false。

-   `dateTime`: 要计算的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
确定当前系统时间之后的那一星期是否处于下一星期。
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
