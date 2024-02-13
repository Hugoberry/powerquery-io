---
title: List.Last
---

# List.Last


Retourne la dernière valeur dans la liste ou la valeur par défaut spécifiée si l&#39;objet est vide.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Retourne le dernier élément dans la liste <code>list</code>, ou la valeur par défaut facultative <code>defaultValue</code>, si la liste est vide.    Si la liste est vide et une valeur par défaut n'est pas spécifiée, la fonction retourne <code>null</code>.


## Examples

### Example #1 
Recherche la dernière valeur dans la liste \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Recherche la dernière valeur dans la liste \{} ou -1 si elle est vide.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
