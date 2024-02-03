---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

ส่งกลับจุดเริ่มต้นของปี


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

ส่งกลับจุดเริ่มต้นของปีที่มี <code>dateTime</code>    <code>dateTime</code> ต้องเป็นค่า<code>วันที่</code> <code>วันที่เวลา</code> หรือ<code>โซนวันที่เวลา</code>


## Examples

### Example #1 
ค้นหาจุดเริ่มต้นของปีสําหรับวันที่ 10 ตุลาคม 2011 เวลา 8:10:32 น.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
