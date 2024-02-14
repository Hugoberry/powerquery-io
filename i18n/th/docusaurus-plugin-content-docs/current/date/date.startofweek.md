---
title: Date.StartOfWeek
---

# Date.StartOfWeek


ส่งกลับจุดเริ่มต้นของสัปดาห์


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

ส่งกลับวันเริ่มต้นสัปดาห์ที่มี <code>dateTime</code>    <code>dateTime</code> ต้องเป็นค่า<code>วันที่</code> <code>วันที่เวลา</code> หรือ<code>โซนวันที่เวลา</code>


## Examples

### Example #1 
ค้นหาจุดเริ่มต้นของสัปดาห์สําหรับวันอังคารที่ 11 ตุลาคม 2011
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
ค้นหาจุดเริ่มต้นของสัปดาห์สําหรับวันอังคารที่ 11 ตุลาคม 2011 โดยใช้วันจันทร์เป็นวันเริ่มต้นของสัปดาห์
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
