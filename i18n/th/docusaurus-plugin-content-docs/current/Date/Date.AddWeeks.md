---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

เพิ่มสัปดาห์ที่ระบุลงในวันที่


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

ส่งกลับผลลัพธ์ <code>date</code>, <code>datetime</code> หรือ <code>datetimezone</code> จากการเพิ่ม <code>numberOfWeeks</code> สัปดาห์ลงในค่า <code>datetime</code> <code>dateTime</code>      <ul>      <li><code>dateTime</code>: ค่า <code>date</code>, <code>datetime</code> หรือ <code>datetimezone</code> ที่สัปดาห์ถูกเพิ่ม</li>      <li><code>numberOfWeeks</code>: จำนวนสัปดาห์ที่จะเพิ่ม</li>      </ul>


## Examples

### Example #1 
เพิ่ม 2 สัปดาห์ลงในค่า &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; หรือ &lt;code&gt;datetimezone&lt;/code&gt; ที่แสดงวันที่ 5/14/2011
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
