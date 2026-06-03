---
title: Type.FunctionReturn
---

# Type.FunctionReturn


ส่งกลับประเภทที่ส่งกลับโดยประเภทฟังก์ชัน


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

ส่งกลับประเภทที่ส่งกลับโดยฟังก์ชัน `type`


## Examples

### Example #1
ค้นหาประเภทการส่งกลับของ `() as any)`
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
