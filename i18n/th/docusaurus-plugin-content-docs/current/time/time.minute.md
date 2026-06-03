---
title: Time.Minute
---

# Time.Minute


ส่งกลับส่วนประกอบของนาที


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

ส่งกลับส่วนประกอบนาทีของค่า `time`, `datetime` หรือ `datetimezone` ที่กำหนดให้ ได้แก่ `dateTime`


## Examples

### Example #1
หานาทีใน #datetime(2011, 12, 31, 9, 15, 36)
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
