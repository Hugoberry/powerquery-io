---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


取得值的時區小時。


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

傳回 `datetimezone` 值的時區小時元件。

-   `dateTimeZone`: 會從時區小時元件中擷取 `datetimezone` 值。如果 `dateTimeZone` 是 `null`，函數會傳回 `null`。


## Examples

### Example #1
取得指定 `datetimezone` 值的時區小時元件。
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
