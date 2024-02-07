---
title: DateTime.Time
---

# DateTime.Time


ส่งกลับส่วนเวลาของค่าวันที่เวลาที่กำหนด


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

ส่งกลับส่วนเวลาของค่าวันที่เวลาที่กำหนด <code>dateTime</code>


## Examples

### Example #1 
ค้นหาค่าเวลาของ #datetime(2010, 12, 31, 11, 56, 02)
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
