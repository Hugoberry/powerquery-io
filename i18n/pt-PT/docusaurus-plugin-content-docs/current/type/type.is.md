---
title: Type.Is
---

# Type.Is


Determina se um valor do tipo "primeiro" é sempre compatível com o tipo "segundo".


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Determina se um valor de `type1` é sempre compatível com `type2`. O parâmetro `type2` deve ser um valor primitivo (ou primitivo que pode ser nulo). Caso contrário, o comportamento desta função não está definido e não deve ser invocado.


## Examples

### Example #1
Determine se um valor do tipo "número" também pode ser sempre tratado como o tipo "qualquer".
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Determine se um valor do tipo "qualquer" também pode ser sempre tratado como tipo "número".
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
