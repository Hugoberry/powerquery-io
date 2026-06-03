---
title: Type.OpenRecord
---

# Type.OpenRecord


ส่งกลับเวอร์ชันที่ถูกเปิดของประเภทระเบียนที่ระบุ (หรือประเภทเดียวกัน ถ้าเปิดอยู่แล้ว)


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

ส่งกลับเวอร์ชันของ `record` `type` ที่ระบุซึ่งถูกเปิด (หรือประเภทเดียวกัน ถ้าเปิดอยู่แล้ว)


## Examples

### Example #1
สร้างเวอร์ชันที่ถูกเปิดของ `type [ A = number]`
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
