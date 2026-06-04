---
title: Type.Is
---

# Type.Is


Conclúe se un valor do primeiro tipo sempre é compatible co segundo tipo.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Determina se un valor de `type1` é sempre compatible con `type2`. O parámetro `type2` debe ser un valor de tipo primitivo (ou primitivo nulo). En caso contrario, o comportamento desta función non está definido e non debe confiarse.


## Examples

### Example #1
Conclúe se un valor de número de tipo se pode tratar sempre coma un tipo calquera.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Conclúe se un valor de calquera tipo se pode tratar sempre como número de tipo.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
