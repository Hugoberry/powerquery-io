---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


获取值的时区分钟数。


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

返回 "datetimezone" 值的时区分钟部分。

-   `dateTimeZone`: 从中提取时区分钟部分的 `datetimezone` 值。如果 `dateTimeZone` 为 `null`，则该函数会返回 `null`。


## Examples

### Example #1
获取指定“datetimezone”值的时区分钟部分。
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
