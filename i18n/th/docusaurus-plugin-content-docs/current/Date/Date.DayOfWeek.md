---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

ส่งกลับตัวเลข (จาก 0 ถึง 6) ที่ระบุวันในสัปดาห์ของค่าที่ระบุ


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

ส่งกลับตัวเลข (จาก 0 ถึง 6) ที่ระบุวันในสัปดาห์ของ <code>dateTime</code> ที่ระบุ  <ul>        <li><code>dateTime</code>: ค่า <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> </li>        <li><code>firstDayOfWeek</code>: ค่า <code>วัน</code> ที่ระบุว่าวันใดที่ควรจะเป็นวันแรกของสัปดาห์ ค่าที่อนุญาตคือ วัน.วันอาทิตย์, วัน.วันจันทร์, วัน.วันอังคาร, วัน.วันพุธ, วัน.วันพฤหัสบดี, วัน.วันศุกร์ หรือ วัน.วันเสาร์ ถ้าไม่ได้ระบุ จะมีการใช้ค่าเริ่มต้นที่ขึ้นอยู่กับวัฒนธรรม</li>      </ul>


## Examples

### Example #1 
ดึงข้อมูลวันของสัปดาห์ที่แสดงเป็นวันจันทร์ที่ 21 กุมภาพันธ์ 2011 โดยให้วันอาทิตย์เป็นวันแรกของสัปดาห์
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
ดึงข้อมูลวันของสัปดาห์ที่แสดงเป็นวันจันทร์ที่ 21 กุมภาพันธ์ 2011 โดยให้วันจันทร์เป็นวันแรกของสัปดาห์
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
