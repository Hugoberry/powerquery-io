---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


ส่งกลับว่าประเภทระเบียนเปิดอยู่หรือไม่


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

ส่งกลับ `logical`ที่ระบุว่า `type` เปิดอยู่หรือไม่


## Examples

### Example #1
กำหนดว่าระเบียน `type [ A = number, ...]` เปิดอยู่หรือไม่
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
