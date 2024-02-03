---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

ส่งกลับประเภทที่ส่งกลับโดยประเภทฟังก์ชัน


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

ส่งกลับประเภทที่ส่งกลับโดยฟังก์ชัน <code>type</code>


## Examples

### Example #1 
ค้นหาประเภทการส่งกลับของ &lt;code&gt;() as any)&lt;/code&gt;
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
