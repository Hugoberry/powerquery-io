---
title: Type.ClosedRecord
---

# Type.ClosedRecord


ส่งกลับเวอร์ชันปิดของประเภทระเบียนที่ระบุ (หรือประเภทเดียวกัน ถ้าปิดแล้ว)


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

ส่งกลับเวอร์ชันปิดของ `record` `type` ที่ระบุ (หรือประเภทเดียวกัน ถ้าปิดแล้ว)


## Examples

### Example #1
สร้างเวอร์ชันปิดของ `type [ A = number,...]`
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
