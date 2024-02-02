---
title: List.First
---

# List.First


## Description

Retourne la première valeur dans la liste ou la valeur par défaut spécifiée si l&#39;objet est vide.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Retourne le premier élément dans la liste <code>list</code>, ou la valeur par défaut facultative <code>defaultValue</code>, si la liste est vide.    Si la liste est vide et une valeur par défaut n'est pas spécifiée, la fonction retourne <code>null</code>.


## Examples

### Example #1 
Recherche la première valeur dans la liste \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Recherche la première valeur dans la liste \{}. Si la liste est vide, retourne -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
