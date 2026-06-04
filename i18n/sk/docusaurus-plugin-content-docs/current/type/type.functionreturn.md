---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Vráti typ vrátený typom funkcie.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Vráti typ vrátený funkciou `type`.


## Examples

### Example #1
Nájdi typ návratu `() ako ľubovoľné)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
