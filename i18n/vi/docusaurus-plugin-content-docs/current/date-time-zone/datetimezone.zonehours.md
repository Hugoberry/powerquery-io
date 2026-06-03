---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Nhận giờ theo múi giờ của giá trị.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Trả về thành phần giờ theo múi giờ của giá trị `datetimezone`.

-   `dateTimeZone`: Giá trị `datetimezone` từ đó trích xuất được thành phần giờ theo múi giờ. Nếu `dateTimeZone` là `null`, hàm sẽ trả về `null`.


## Examples

### Example #1
Nhận thành phần giờ theo múi giờ của giá trị `datetimezone` được chỉ định.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
