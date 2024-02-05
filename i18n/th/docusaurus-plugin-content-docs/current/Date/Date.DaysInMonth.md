---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

ส่งกลับตัวเลขตั้งแต่ 28 ถึง 31 ที่ระบุจำนวนวันในเดือน


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

ส่งกลับจำนวนวันในเดือนในค่า <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> e <code>dateTime</code>. <ul>        <li><code>dateTime</code>: ค่า <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่จำนวนวันในเดือนถูกส่งกลับ</li>      </ul>


## Examples

### Example #1 
จำนวนวันในเดือนธันวาคมตามที่แสดงโดย &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
