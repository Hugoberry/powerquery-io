---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


获取值的时区小时数。


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

返回 `datetimezone` 值的时区小时部分。

-   `dateTimeZone`: 从中提取时区小时部分的 `datetimezone` 值。如果 `dateTimeZone` 为 `null`，则该函数会返回 `null`。


## Examples

### Example #1
获取指定的 `datetimezone` 值的时区小时部分。
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
