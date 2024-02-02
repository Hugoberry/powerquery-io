---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Supprime toutes les valeurs &#34; null &#34; de la liste spécifiée.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Supprime toutes les occurrences des valeurs " null " dans <code>list</code>. S'il n'y a pas de valeurs " null " dans la liste, la liste d'origine est retournée.


## Examples

### Example #1 
Supprime les valeurs &#34; null &#34; de la liste \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
