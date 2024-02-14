---
title: Time.EndOfHour
---

# Time.EndOfHour


ส่งกลับจุดสิ้นสุดของชั่วโมง


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

ส่งกลับจุดสิ้นสุดของชั่วโมงที่แสดงโดย <code>dateTime</code> รวมถึงเศษส่วนวินาที ข้อมูลโซนเวลาจะถูกเก็บไว้      <ul>        <li><code>dateTime</code>: ค่า<code>วันที่</code> <code>วันที่เวลา</code> หรือ<code>โซนวันที่เวลา</code>ที่คํานวณว่ามีจุดสิ้นสุดของชั่วโมงใดบ้าง</li>      </ul>


## Examples

### Example #1 
รับจุดสิ้นสุดของชั่วโมงสำหรับ 5/14/2011 05:00:00 PM
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
รับจุดสิ้นสุดของชั่วโมงสำหรับ 5/17/2011 05:00:00 PM -7:00
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
