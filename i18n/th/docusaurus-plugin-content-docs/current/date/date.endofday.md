---
title: Date.EndOfDay
---

# Date.EndOfDay


ส่งกลับจุดสิ้นสุดของวัน


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

ส่งกลับจุดสิ้นสุดของวันที่แสดงโดย <code>dateTime</code> ข้อมูลโซนเวลาจะถูกเก็บไว้ <ul> <li><code>dateTime</code>: ค่า<code>วันที่</code> <code>วันที่เวลา</code> หรือ<code>โซนวันที่เวลา</code>ที่คํานวณว่ามีจุดสิ้นสุดของวันใดบ้าง</li>      </ul>


## Examples

### Example #1 
รับสิ้นสุดวันสำหรับ 5/14/2011 05:00:00 PM
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
รับสิ้นสุดวันสำหรับ 5/17/2011 05:00:00 PM -7:00
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
