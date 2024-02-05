---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

ส่งกลับเวอร์ชันปิดของประเภทระเบียนที่ระบุ (หรือประเภทเดียวกัน ถ้าปิดแล้ว)


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

ส่งกลับเวอร์ชันปิดของ <code>record</code> <code>type</code> ที่ระบุ (หรือประเภทเดียวกัน ถ้าปิดแล้ว)


## Examples

### Example #1 
สร้างเวอร์ชันปิดของ &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
