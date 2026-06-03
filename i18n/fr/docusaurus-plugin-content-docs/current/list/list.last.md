---
title: List.Last
---

# List.Last


Retourne la dernière valeur dans la liste ou la valeur par défaut spécifiée si l'objet est vide.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Renvoie le dernier élément de la liste spécifiée, ou la valeur par défaut facultative si la liste est vide.

-   `list` : La liste à examiner.
-   `defaultValue` : (Facultatif) La valeur par défaut à renvoyer si la liste est vide. Si la liste est vide et qu'aucune valeur par défaut n'est spécifiée, la fonction renvoie `null`.


## Examples

### Example #1
Recherche la dernière valeur dans la liste \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Recherche la dernière valeur dans la liste \{\} ou -1 si elle est vide.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
