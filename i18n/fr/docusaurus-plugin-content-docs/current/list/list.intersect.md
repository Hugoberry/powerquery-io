---
title: List.Intersect
---

# List.Intersect


Retourne l'intersection des valeurs de la liste trouvées dans l'entrée.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retourne l'intersection des valeurs de la liste trouvées dans la liste d'entrée `lists`. Un paramètre facultatif, `equationCriteria`, peut être spécifié.


## Examples

### Example #1
Recherche l'intersection des listes \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
