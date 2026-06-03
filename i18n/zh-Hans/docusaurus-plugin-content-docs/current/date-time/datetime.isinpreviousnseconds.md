---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


指示此日期时间是否会在系统当前日期和时间确定的上一秒数中出现。请注意，当传递一个在当前秒内出现的值时，此函数将返回 false。


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

指示给定的日期时间值 `dateTime` 是否会在系统当前日期和时间确定的上一秒数中出现。请注意，当传递一个在当前秒内出现的值时，此函数将返回 false。

-   `dateTime`: 要计算的 `datetime` 或 `datetimezone` 值。
-   `seconds`: 秒数。


## Examples

### Example #1
确定当前系统时间前的秒是否处于前两秒内。
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
