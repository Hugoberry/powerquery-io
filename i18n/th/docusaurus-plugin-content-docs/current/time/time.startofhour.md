---
title: Time.StartOfHour
---

# Time.StartOfHour


ส่งกลับจุดเริ่มต้นของชั่วโมง


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

ส่งกลับจุดเริ่มต้นของชั่วโมงที่แสดงโดย `dateTime` `dateTime` ต้องเป็นค่า`วันที่` `วันที่เวลา` หรือ`โซนวันที่เวลา`


## Examples

### Example #1
ค้นหาจุดเริ่มต้นของชั่วโมงสําหรับวันที่ 10 ตุลาคม 2011 เวลา 8:10:32 น.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
