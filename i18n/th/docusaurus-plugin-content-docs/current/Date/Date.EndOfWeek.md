---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

ส่งกลับจุดสิ้นสุดของสัปดาห์


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

ส่งกลับจุดสิ้นสุดของสัปดาห์ที่มี <code>dateTime</code>     ฟังก์ชันนี้จะใช้<code>วัน</code>เพิ่มเติม <code>firstDayOfWeek</code> เพื่อตั้งค่าเป็นวันแรกของสัปดาห์สําหรับการคํานวณแบบสัมพัทธ์นี้ ค่าเริ่มต้นคือ <code>Day.Sunday</code>      <ul>        <li><code>dateTime</code>: ค่า<code>วันที่</code> <code>วันที่เวลา</code> หรือ<code>โซนวันที่เวลา</code>ที่คํานวณว่ามีวันสุดท้ายของสัปดาห์ใดบ้าง</li>        <li><code>firstDayOfWeek</code>: <i>[เพิ่มเติม]</i> ค่า <code>Day.Type</code> แสดงถึงวันแรกของสัปดาห์ ค่าที่เป็นไปได้คือ <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> และ <code>Day.Saturday.</code> ค่าเริ่มต้นคือ <code>Day.Sunday</code></li>      </ul>


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
