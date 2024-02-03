---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

ส่งกลับว่าประเภทระเบียนเปิดอยู่หรือไม่


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

ส่งกลับ <code>logical</code>ที่ระบุว่า <code>type</code> เปิดอยู่หรือไม่


## Examples

### Example #1 
กำหนดว่าระเบียน &lt;code&gt;type [ A = number, ...]&lt;/code&gt; เปิดอยู่หรือไม่
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
