---
title: Date.Day
---

# Date.Day


## Description

ส่งกลับคอมโพเนนต์วัน


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

ส่งคืนคอมโพเนนต์วันของค่า <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code>       <ul>        <li><code>dateTime</code>: ค่า <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่คอมโพเนนต์วันถูกแยก</li>      </ul>


## Examples

### Example #1 
รับคอมโพเนนต์วันของค่า &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; หรือ &lt;code&gt;datetimezone&lt;/code&gt; ที่แสดงวันที่และเวลา 5/14/2011 05:00:00 PM
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
