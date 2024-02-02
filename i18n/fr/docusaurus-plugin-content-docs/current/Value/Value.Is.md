---
title: Value.Is
---

# Value.Is


## Description

Détermine si une valeur est compatible avec le type spécifié.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Détermine si une valeur est compatible avec le type spécifié. Ceci est équivalent à " est "l’opérateur en M, à l’exception du fait qu’il peut accepter des références de type d’identificateur comme Number. type.


## Examples

### Example #1 
Comparez deux manières de déterminer si un nombre est compatible avec le nombre de types.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
