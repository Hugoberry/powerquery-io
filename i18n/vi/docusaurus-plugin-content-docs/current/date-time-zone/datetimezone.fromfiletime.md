---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


Tạo một datetimezone từ một số dài 64 bit.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

Tạo một giá trị `datetimezone` từ giá trị `fileTime` và chuyển đổi giá trị đó thành múi giờ địa phương. Filetime là giá trị thời gian tệp của Windows biểu thị số lượng quãng cách 100 nano giây đã trôi qua kể từ 12:00 giờ đêm, ngày 1 tháng 1 năm 1601 SCN. (C.E) Giờ Quốc tế Phối hợp (UTC).


## Examples

### Example #1
Chuyển đổi `129876402529842245` thành giá trị datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
