---
title: Time.ToRecord
---

# Time.ToRecord


## Description

ส่งกลับระเบียนที่มีส่วนของค่าเวลา


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

ส่งกลับระเบียนที่มีส่วนประกอบของค่าเวลา <code>time</code> ที่กำหนด <ul>        <li><code>time</code>: ค่า<code>เวลา</code> สำหรับเริ่มคำนวณระเบียนของส่วนประกอบดังกล่าว</li>      </ul>


## Examples

### Example #1 
แปลงค่า &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; ให้เป็นระเบียนที่มีค่าเวลา
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
