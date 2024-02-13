---
title: Date.AddDays
---

# Date.AddDays


เพิ่มวันที่ระบุลงในวันที่


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

ส่งกลับผลลัพธ์ <code>date</code>, <code>datetime</code> หรือ <code>datetimezone</code> จากการเพิ่ม <code>numberOfDays</code> วันลงในค่า <code>datetime</code> <code>dateTime</code>      <ul>      <li><code>dateTime</code>: ค่า <code>date</code>, <code>datetime</code> หรือ <code>datetimezone</code> ที่วันถูกเพิ่ม</li>      <li><code>numberOfDays</code>: จำนวนวันที่จะเพิ่ม</li>      </ul>


## Examples

### Example #1 
เพิ่ม 5 วันลงในค่า &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; หรือ &lt;code&gt;datetimezone&lt;/code&gt; ที่แสดงวันที่ 5/14/2011
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
