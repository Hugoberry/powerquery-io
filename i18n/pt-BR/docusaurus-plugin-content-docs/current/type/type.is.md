---
title: Type.Is
---

# Type.Is


Determina se um valor do primeiro tipo é sempre compatível com o segundo tipo.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Determina se um valor de `type1` é sempre compatível com `type2`. O `type2` deve ser um valor de tipo primitivo (ou anulável). Caso contrário, o comportamento desta função é indefinido e não deve ser confiável.


## Examples

### Example #1
Determine se um valor do tipo number também pode ser tratado como tipo any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Determine se um valor do tipo any também pode ser tratado como número do tipo.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
