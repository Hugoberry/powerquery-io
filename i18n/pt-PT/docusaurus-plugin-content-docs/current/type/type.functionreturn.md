---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Devolve um tipo devolvido por um tipo de função.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Devolve um tipo devolvido por uma função `type`.


## Examples

### Example #1
Encontrar o tipo de retorno de `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
