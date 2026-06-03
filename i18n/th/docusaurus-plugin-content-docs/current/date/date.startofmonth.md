---
title: Date.StartOfMonth
---

# Date.StartOfMonth


ส่งกลับจุดเริ่มต้นของเดือน


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

ส่งกลับจุดเริ่มต้นของเดือนที่มี `dateTime` `dateTime` ต้องเป็นค่า`วันที่`หรือ `วันที่เวลา`


## Examples

### Example #1
ค้นหาจุดเริ่มต้นของเดือนสําหรับวันที่ 10 ตุลาคม 2011 เวลา 8:10:32 น.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
