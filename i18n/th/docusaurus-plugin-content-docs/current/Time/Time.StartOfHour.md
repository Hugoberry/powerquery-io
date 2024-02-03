---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

ส่งกลับจุดเริ่มต้นของชั่วโมง


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

ส่งกลับจุดเริ่มต้นของชั่วโมงที่แสดงโดย <code>dateTime</code>    <code>dateTime</code> ต้องเป็นค่า<code>วันที่</code> <code>วันที่เวลา</code> หรือ<code>โซนวันที่เวลา</code>


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
