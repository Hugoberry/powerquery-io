---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Pateikiamas funkcijos tipo pateiktas tipas.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Pateikiamas funkcijos `type` pateiktas tipas.


## Examples

### Example #1
Raskite `() as any)` pateikimo tipą.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
