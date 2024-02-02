---
title: List.Intersect
---

# List.Intersect


## Description

Retourne l&#39;intersection des valeurs de la liste trouvées dans l&#39;entrée.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Retourne l'intersection des valeurs de la liste trouvées dans la liste d'entrée <code>lists</code>. Un paramètre facultatif, <code>equationCriteria</code>, peut être spécifié.


## Examples

### Example #1 
Recherche l&#39;intersection des listes \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
