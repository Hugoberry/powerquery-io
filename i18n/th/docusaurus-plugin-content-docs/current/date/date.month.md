---
title: Date.Month
---

# Date.Month


ส่งกลับคอมโพเนนต์เดือน


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

ส่งกลับคอมโพเนนต์เดือนของค่า `datetime` ที่ระบุ `dateTime`


## Examples

### Example #1
ค้นหาเดือนใน #datetime(2011, 12, 31, 9, 15, 36)
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
