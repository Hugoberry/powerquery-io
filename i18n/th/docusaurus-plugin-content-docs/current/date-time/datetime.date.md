---
title: DateTime.Date
---

# DateTime.Date


ส่งกลับคอมโพเนนต์วันที่ของค่าวันที่ เวลาของวันที่ หรือโซนเวลาของวันที่ที่ระบุ


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

ส่งกลับคอมโพเนนต์วันที่ของพารามิเตอร์ `dateTime` หากพารามิเตอร์เป็นค่า `date`, `datetime` หรือ `datetimezone` หรือ `null` หากพารามิเตอร์เป็น `null`


## Examples

### Example #1
ค้นหาค่าวันที่ของ #datetime(2010, 12, 31, 11, 56, 02)
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
