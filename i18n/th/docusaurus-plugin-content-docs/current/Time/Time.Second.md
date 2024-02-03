---
title: Time.Second
---

# Time.Second


## Description

ส่งกลับส่วนประกอบของวินาที


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

ส่งกลับส่วนประกอบวินาทีของค่า <code>time</code>, <code>datetime</code> หรือ <code>datetimezone</code> ที่กำหนดให้ ได้แก่ <code>dateTime</code>


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
