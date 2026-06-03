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

Trả về một loại do hàm trả về `type`.


## Examples

### Example #1
Tìm loại trả về của `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
