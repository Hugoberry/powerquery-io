---
title: List.SingleOrDefault
---

# List.SingleOrDefault


Retourne un seul élément de liste pour une liste de longueur 1, et la valeur par défaut pour une liste vide.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

S'il y a un seul élément dans la liste <code>list</code>, retourne cet élément.    Si la liste est vide, la fonction retourne null sauf si le paramètre facultatif <code>default</code> est spécifié. S'il existe plusieurs éléments dans la liste, la fonction retourne une erreur.


## Examples

### Example #1 
Recherche la seule valeur dans la liste \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Recherche la seule valeur dans la liste \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Recherche la seule valeur dans la liste \{}. Si vide, retourne -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
