---
title: Value.As
---

# Value.As


Retourne la valeur si elle est compatible avec le type spécifié.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Remarks

Renvoie la valeur si elle est compatible avec le type spécifié. C'est l'équivalent de l'opérateur "as" dans M, à l'exception du fait qu'il peut accepter des références de type d'identifiant comme Number.Type.


## Examples

### Example #1 
Effectuez un cast d’un nombre en nombre.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Tentative d’effectuer un cast d’une valeur de texte en nombre.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
