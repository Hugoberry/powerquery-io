---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Retorna un tipus que ha retornat un tipus de funció.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Retorna un tipus que ha retornat una funció `type`.


## Examples

### Example #1
Cerqueu el tipus de retorn de `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
