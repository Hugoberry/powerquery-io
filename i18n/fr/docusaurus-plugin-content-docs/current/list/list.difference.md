---
title: List.Difference
---

# List.Difference


Retourne la différence entre les deux listes spécifiées.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retourne les éléments dans la liste `list1` qui n'apparaissent pas dans la liste `list2`. Les valeurs dupliquées sont prises en charge. La valeur du critère d'équation facultatif, `equationCriteria`, peut être spécifiée pour contrôler le test d'égalité.


## Examples

### Example #1
Recherche les éléments dans la liste \{1, 2, 3, 4, 5\} qui n'apparaissent pas dans \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Recherche les éléments dans la liste \{1, 2\} qui n'apparaissent pas dans \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
