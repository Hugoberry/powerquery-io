---
title: List.Single
---

# List.Single


## Description

Retourne un seul élément de liste pour une liste de longueur 1, sinon lève une exception.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

S'il y a un seul élément dans la liste <code>list</code>, retourne cet élément.    S'il existe plusieurs éléments dans la liste ou si la liste est vide, la fonction lève une exception.


## Examples

### Example #1 
Recherche la seule valeur dans la liste \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Recherche la seule valeur dans la liste \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
