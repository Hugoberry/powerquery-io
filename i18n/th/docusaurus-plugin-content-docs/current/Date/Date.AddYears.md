---
title: Date.AddYears
---

# Date.AddYears


เพิ่มปีที่ระบุลงในวันที่


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

ส่งกลับผลลัพธ์ <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ของการเพิ่ม <code>numberOfYears</code> ลงในค่า <code>วันที่เวลา</code> <code>dateTime</code>      <ul>        <li><code>dateTime</code>: ค่า <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่เพิ่มปี</li>        <li><code>numberOfYears</code>: จำนวนปีที่จะเพิ่ม</li>      </ul>


## Examples

### Example #1 
เพิ่ม 4 ปีลงในค่า &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; หรือ &lt;code&gt;datetimezone&lt;/code&gt; ที่แสดงวันที่ 5/14/2011
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
เพิ่ม 10 ปีลงในค่า &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; หรือ &lt;code&gt;datetimezone&lt;/code&gt; ที่แสดงวันที่และเวลา 5/14/2011 08:15:22 AM
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
