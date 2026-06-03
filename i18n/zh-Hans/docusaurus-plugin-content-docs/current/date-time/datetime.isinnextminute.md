---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


指示此日期时间是否会在系统当前日期和时间确定的下一分钟内出现。请注意，当传递一个在当前分钟内出现的值时，此函数将返回 false。


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

指示给定的日期时间值 `dateTime` 是否会在系统当前日期和时间确定的下一分钟内出现。请注意，当传递一个在当前分钟内出现的值时，此函数将返回 false。

-   `dateTime`: 要计算的 `datetime` 或 `datetimezone` 值。


## Examples

### Example #1
确定当前系统时间后的分钟是否处于接下来的一分钟内。
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
