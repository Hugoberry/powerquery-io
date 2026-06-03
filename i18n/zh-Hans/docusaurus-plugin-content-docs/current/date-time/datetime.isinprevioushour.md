---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


指示此日期时间是否会在系统当前日期和时间确定的上一小时中出现。请注意，当传递一个在当前小时内出现的值时，此函数将返回 false。


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

指示给定的日期时间值 `dateTime` 是否会在系统当前日期和时间确定的上一小时中出现。请注意，当传递一个在当前小时中出现的值时，此函数将返回 false。

-   `dateTime`: 要计算的 `datetime` 或 `datetimezone` 值。


## Examples

### Example #1
确定当前系统时间前的小时是否处于前一小时内。
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
