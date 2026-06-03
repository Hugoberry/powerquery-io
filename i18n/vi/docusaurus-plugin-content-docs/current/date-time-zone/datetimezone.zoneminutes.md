---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Nhận phút theo múi giờ của giá trị.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Trả về thành phần phút theo múi giờ của giá trị “datetimezone”.

-   `dateTimeZone`: Giá trị `datetimezone` mà từ đó trích xuất được thành phần phút theo múi giờ. Nếu `dateTimeZone` là `null`, hàm sẽ trả về `null`.


## Examples

### Example #1
Nhận thành phần phút theo múi giờ của giá trị “datetimezone” được chỉ định.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
