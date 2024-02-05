---
title: Date.AddMonths
---

# Date.AddMonths


## Description

เพิ่มเดือนที่ระบุลงในวันที่


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

ส่งกลับผลลัพธ์ <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> จากการเพิ่ม <code>numberOfMonths</code> เดือนลงในค่า <code>วันที่เวลา</code> <code>dateTime</code>      <ul>        <li><code>dateTime</code>: ค่า <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่เพิ่มเดือน</li>        <li><code>numberOfMonths</code>: จำนวนเดือนที่จะเพิ่ม</li>       </ul>


## Examples

### Example #1 
เพิ่ม 5 เดือนลงในค่า &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; หรือ &lt;code&gt;datetimezone&lt;/code&gt; ที่แสดงวันที่ 5/14/2011
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
เพิ่ม 18 เดือนลงในค่า &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; หรือ &lt;code&gt;datetimezone&lt;/code&gt; ที่แสดงวันที่และเวลา 5/14/2011 08:15:22 AM
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
