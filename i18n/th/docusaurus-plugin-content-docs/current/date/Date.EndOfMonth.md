---
title: Date.EndOfMonth
---

# Date.EndOfMonth


ส่งกลับจุดสิ้นสุดของเดือน


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

ส่งกลับจุดสิ้นสุดของเดือนที่มี <code>dateTime</code>      <ul>        <li><code>dateTime</code>: ค่า<code>วันที่</code> <code>วันที่เวลา</code> หรือ<code>โซนวันที่เวลา</code>ที่คํานวณว่ามีจุดสิ้นสุดของเดือนใดบ้าง</li>      </ul>


## Examples

### Example #1 
รับสิ้นสุดเดือนสำหรับ 5/14/2011 05:00:00 PM
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
รับสิ้นสุดเดือนสำหรับ 5/17/2011 05:00:00 PM -7:00
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
