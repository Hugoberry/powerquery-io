---
title: Date.StartOfDay
---

# Date.StartOfDay


ส่งกลับจุดเริ่มต้นของวัน


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

ส่งกลับจุดเริ่มต้นของวันที่แสดงโดย `dateTime` `dateTime` ต้องเป็นค่า`วันที่` `วันที่เวลา` หรือ`โซนวันที่เวลา`


## Examples

### Example #1
ค้นหาจุดเริ่มต้นของวันสําหรับวันที่ 10 ตุลาคม 2011 เวลา 8:00 น.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
