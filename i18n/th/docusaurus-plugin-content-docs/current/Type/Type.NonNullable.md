---
title: Type.NonNullable
---

# Type.NonNullable


## Description

ส่งกลับประเภทที่ไม่สามารถเป็น NULL ได้จากประเภท


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

ส่งกลับประเภทที่ไม่สามารถเป็น <code>nullable</code> ได้จาก <code>type</code>


## Examples

### Example #1 
ส่งกลับประเภทที่ไม่สามารถเป็น NULL ได้ของ &lt;code&gt;type nullable number&lt;/code&gt;
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
