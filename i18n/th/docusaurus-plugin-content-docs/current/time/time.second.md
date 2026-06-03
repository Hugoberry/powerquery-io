---
title: Time.Second
---

# Time.Second


ส่งกลับส่วนประกอบของวินาที


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

ส่งกลับส่วนประกอบวินาทีของค่า `time`, `datetime` หรือ `datetimezone` ที่กำหนดให้ ได้แก่ `dateTime`


## Examples

### Example #1
หาค่าวินาทีจากค่า datetime
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
