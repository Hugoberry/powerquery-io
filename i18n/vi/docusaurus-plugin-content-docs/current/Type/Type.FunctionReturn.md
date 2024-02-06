---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Trả về một loại do loại hàm trả về.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Trả về một loại do hàm trả về <code>type</code>.


## Examples

### Example #1 
Tìm loại trả về của &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
