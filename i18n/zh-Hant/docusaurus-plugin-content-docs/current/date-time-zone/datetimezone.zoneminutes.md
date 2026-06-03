---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


取得值的時區分鐘。


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

會傳回 \`datetimezone\` 值的時區分鐘元件。

-   `dateTimeZone`: 會從時區分鐘元件中擷取 `datetimezone` 值。如果 `dateTimeZone` 是 `null`，函數會傳回 `null`。


## Examples

### Example #1
取得指定 'datetimezone' 值的時區分鐘元件。
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
