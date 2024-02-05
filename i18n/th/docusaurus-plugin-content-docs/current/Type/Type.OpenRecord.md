---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

ส่งกลับเวอร์ชันที่ถูกเปิดของประเภทระเบียนที่ระบุ (หรือประเภทเดียวกัน ถ้าเปิดอยู่แล้ว)


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

ส่งกลับเวอร์ชันของ <code>record</code> <code>type</code> ที่ระบุซึ่งถูกเปิด (หรือประเภทเดียวกัน ถ้าเปิดอยู่แล้ว)


## Examples

### Example #1 
สร้างเวอร์ชันที่ถูกเปิดของ &lt;code&gt;type [ A = number]&lt;/code&gt;
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
