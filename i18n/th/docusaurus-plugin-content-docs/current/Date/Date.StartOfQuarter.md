---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

ส่งกลับจุดเริ่มต้นของไตรมาส


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

ส่งกลับจุดเริ่มต้นของไตรมาสที่มี <code>dateTime</code>      <code>dateTime</code> ต้องเป็นค่า<code>วันที่</code> <code>วันที่เวลา</code> หรือ<code>โซนวันที่เวลา</code>


## Examples

### Example #1 
ค้นหาจุดเริ่มต้นไตรมาสสําหรับวันที่ 10 ตุลาคม 2011 เวลา 8:00 น.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
