---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Atgriež tipu, ko atgrieza funkcijas tips.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Atgriež tipu, ko atgrieza funkcija `type`.


## Examples

### Example #1
Atrodiet `() as any)` atgriešanas tipu.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
