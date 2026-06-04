---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Vrátí typ vrácený typem funkce.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Vrátí typ vrácený funkcí `type`.


## Examples

### Example #1
Umožňuje najít návratový typ pro `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
