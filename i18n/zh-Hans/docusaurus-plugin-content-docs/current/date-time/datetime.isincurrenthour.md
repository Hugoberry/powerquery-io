---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


指示此日期时间是否按系统当前日期和时间所确定的那样处于当前小时内。


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

指示给定的日期时间值 `dateTime` 是否按系统当前日期和时间所确定的那样处于当前小时内。

-   `dateTime`: 要计算的 `datetime` 或 `datetimezone` 值。


## Examples

### Example #1
确定当前系统时间是否处于当前小时内。
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
