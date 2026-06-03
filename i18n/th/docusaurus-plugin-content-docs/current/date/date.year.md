---
title: Date.Year
---

# Date.Year


ส่งกลับคอมโพเนนต์ปี


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

ส่งกลับคอมโพเนนต์ปีของค่า `datetime` ที่ระบุ `dateTime`


## Examples

### Example #1
ค้นหาปีใน #datetime(2011, 12, 31, 9, 15, 36)
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
