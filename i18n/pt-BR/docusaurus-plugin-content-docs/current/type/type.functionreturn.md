---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Retorna um tipo retornado por um tipo de função.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Retorna um tipo retornado por uma função `type`.


## Examples

### Example #1
Encontre o tipo de retorno de `() como qualquer um)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
