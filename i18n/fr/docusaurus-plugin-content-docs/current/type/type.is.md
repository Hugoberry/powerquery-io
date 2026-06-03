---
title: Type.Is
---

# Type.Is


Détermine si une valeur du premier type est toujours compatible avec le second type.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Détermine si une valeur de `type1` est toujours compatible avec `type2`. Le paramètre `type2` doit être une valeur de type primitif (ou primitif nullable). Sinon, le comportement de cette fonction n’est pas défini et ne doit pas être activé.


## Examples

### Example #1
Détermine si une valeur de type nombre peut toujours être traitée comme un des types.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Détermine si une valeur de type quelconque peut toujours être traitée comme un nombre de types.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
