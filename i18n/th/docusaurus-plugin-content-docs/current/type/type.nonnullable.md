---
title: Type.NonNullable
---

# Type.NonNullable


ส่งกลับประเภทที่ไม่สามารถเป็น NULL ได้จากประเภท


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

ส่งกลับประเภทที่ไม่สามารถเป็น `nullable` ได้จาก `type`


## Examples

### Example #1
ส่งกลับประเภทที่ไม่สามารถเป็น NULL ได้ของ `type nullable number`
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
