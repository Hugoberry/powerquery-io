---
title: List.First
---

# List.First


Retourne la première valeur dans la liste ou la valeur par défaut spécifiée si l'objet est vide.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Retourne le premier élément dans la liste `list`, ou la valeur par défaut facultative `defaultValue`, si la liste est vide. Si la liste est vide et une valeur par défaut n'est pas spécifiée, la fonction retourne `null`.


## Examples

### Example #1
Recherche la première valeur dans la liste \{1, 2, 3\}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Recherche la première valeur dans la liste \{\}. Si la liste est vide, retourne -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
