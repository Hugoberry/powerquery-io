---
title: Date.EndOfWeek
---

# Date.EndOfWeek


ส่งกลับจุดสิ้นสุดของสัปดาห์


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

ส่งกลับจุดสิ้นสุดของสัปดาห์ที่มี `dateTime` ฟังก์ชันนี้จะใช้`วัน`เพิ่มเติม `firstDayOfWeek` เพื่อตั้งค่าเป็นวันแรกของสัปดาห์สําหรับการคํานวณแบบสัมพัทธ์นี้ ค่าเริ่มต้นคือ `Day.Sunday`

-   `dateTime`: ค่า`วันที่` `วันที่เวลา` หรือ`โซนวันที่เวลา`ที่คํานวณว่ามีวันสุดท้ายของสัปดาห์ใดบ้าง
-   `firstDayOfWeek`: *\[เพิ่มเติม\]* ค่า `Day.Type` แสดงถึงวันแรกของสัปดาห์ ค่าที่เป็นไปได้คือ `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` และ `Day.Saturday.` ค่าเริ่มต้นคือ `Day.Sunday`


## Examples

### Example #1
รับสิ้นสุดสัปดาห์สำหรับ 5/14/2011 05:00:00 PM
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
รับสิ้นสุดสัปดาห์สำหรับ 5/17/2011 05:00:00 PM -7:00 โดยวันอาทิตย์เป็นวันแรกของสัปดาห์
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
