---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


指示此日期时间是否按系统当前日期和时间所确定的那样处于当前秒内。


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

指示给定的日期时间值 `dateTime` 是否按系统当前日期和时间所确定的那样处于当前秒内。

-   `dateTime`: 要计算的 `datetime` 或 `datetimezone` 值。


## Examples

### Example #1
确定当前系统时间是否处于当前秒内。
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
