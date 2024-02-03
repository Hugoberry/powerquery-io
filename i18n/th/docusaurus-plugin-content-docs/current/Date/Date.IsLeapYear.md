---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

ระบุว่าวันที่นี้ตกอยู่ในปีอธิกสุรทินหรือไม่


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

ระบุว่าค่าวันที่เวลาที่ระบุ <code>dateTime</code> ตกอยู่ในปีอธิกสุรทินหรือไม่  <ul>        <li><code>dateTime</code>: ค่า <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่จะประเมิน</li>      </ul>


## Examples

### Example #1 
ระบุว่าปี 2012 ตามที่แสดงโดย &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; เป็นปีอธิกสุรทินหรือไม่
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
