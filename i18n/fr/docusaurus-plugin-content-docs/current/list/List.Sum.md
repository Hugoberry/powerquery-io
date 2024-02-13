---
title: List.Sum
---

# List.Sum


Retourne la somme des éléments dans la liste.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Retourne la somme des valeurs non null dans la liste, <code>list</code>.  Retourne null s'il n'y a pas de valeur non null dans la liste.


## Examples

### Example #1 
Recherche la somme des nombres dans la liste &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
