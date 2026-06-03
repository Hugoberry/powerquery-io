---
title: Date.StartOfYear
---

# Date.StartOfYear


ส่งกลับจุดเริ่มต้นของปี


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

ส่งกลับจุดเริ่มต้นของปีที่มี `dateTime` `dateTime` ต้องเป็นค่า`วันที่` `วันที่เวลา` หรือ`โซนวันที่เวลา`


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
