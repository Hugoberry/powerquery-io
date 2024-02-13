---
title: Date.AddQuarters
---

# Date.AddQuarters


เพิ่มไตรมาสที่ระบุลงในวันที่


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

ส่งกลับผลลัพธ์ <code>date</code>, <code>datetime</code> หรือ <code>datetimezone</code> จากการเพิ่ม <code>numberOfQuarters</code> ไตรมาสลงในค่า <code>datetime</code> <code>dateTime</code>      <ul>      <li><code>dateTime</code>: ค่า <code>date</code>, <code>datetime</code> หรือ <code>datetimezone</code> ที่ไตรมาสถูกเพิ่ม</li>      <li><code>numberOfQuarters</code>: จำนวนไตรมาสที่จะเพิ่ม</li>      </ul>


## Examples

### Example #1 
เพิ่ม 1 ไตรมาสลงในค่า &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; หรือ &lt;code&gt;datetimezone&lt;/code&gt; ที่แสดงวันที่ 5/14/2011
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
