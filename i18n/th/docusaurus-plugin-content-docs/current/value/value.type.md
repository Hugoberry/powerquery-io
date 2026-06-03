---
title: Value.Type
---

# Value.Type


ส่งกลับชนิดของค่าที่กำหนด


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

ส่งกลับชนิดค่าที่กำหนด

-   `value`: ค่าที่ชนิดจะถูกส่งกลับ


## Examples

### Example #1
ส่งกลับชนิดตัวเลขที่ระบุ
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
ส่งกลับชนิดวันที่ที่ระบุ
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
ส่งกลับชนิดระเบียนที่ระบุ
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
