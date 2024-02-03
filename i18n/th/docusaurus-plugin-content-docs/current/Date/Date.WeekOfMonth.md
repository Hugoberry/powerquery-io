---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

ส่งกลับตัวเลขตั้งแต่ 1 ถึง 6 ที่ระบุสัปดาห์ของเดือนที่มีวันที่นี้อยู่


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

ส่งกลับตัวเลขตั้งแต่ 1 ถึง 6 ที่ระบุสัปดาห์ของเดือนที่มีวันที่ <code>dateTime</code> อยู่ <ul>        <li><code>dateTime</code>: ค่า<code>วันที่เวลา</code>ที่สัปดาห์ของเดือนถูกกำหนดไว้</li>      </ul>


## Examples

### Example #1 
กําหนดสัปดาห์ของเดือนมีนาคมที่วันที่ 15 ตกอยู่ในปี 2011
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
