---
title: Date.WeekOfYear
---

# Date.WeekOfYear


ส่งกลับตัวเลข 1 ถึง 54 ที่ระบุสัปดาห์ของปีที่วันที่นี้ตกอยู่ในสัปดาห์นั้น


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

ส่งกลับตัวเลขตั้งแต่ 1 ถึง 54 ที่ระบุสัปดาห์ของปีที่ตรงกับวันที่ <code>dateTime</code> <ul>        <li><code>dateTime</code>: ค่า <code>datetime</code> สำหรับสัปดาห์ของปีถูกกำหนด</li>        <li><code>firstDayOfWeek</code>: ค่า <code>Day.Type</code> เพิ่มเติมที่ระบุวันที่ถือว่าเป็นวันเริ่มต้นของสัปดาห์ใหม่ (ตัวอย่างเช่น <code>Day.Sunday</code>) ถ้าไม่ได้ระบุ ระบบจะใช้ค่าเริ่มต้นที่อิงตามวัฒนธรรม</li>      </ul>


## Examples

### Example #1 
กําหนดสัปดาห์ของปีที่มีวันที่ 27 มีนาคม 2011
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
กําหนดสัปดาห์ของปีที่มีวันที่ 27 มีนาคม 2011 โดยใช้วันจันทร์เป็นวันเริ่มต้นของสัปดาห์
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
