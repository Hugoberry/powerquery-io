---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Devolve un tipo devolto por un tipo de función.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Devolve un tipo devolto por unha función `type`.


## Examples

### Example #1
Busque o tipo de retorno de `() como calquera)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
