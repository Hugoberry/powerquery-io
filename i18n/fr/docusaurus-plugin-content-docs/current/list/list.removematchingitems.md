---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Supprime toutes les occurrences des valeurs d'entrée.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Supprime toutes les occurrences des valeurs spécifiées dans `list2` depuis la liste `list1`. Si les valeurs dans `list2` n'existent pas dans `list1`, la liste d'origine est retournée. La valeur du critère d'équation facultatif, `equationCriteria`, peut être spécifiée pour contrôler le test d'égalité.


## Examples

### Example #1
Crée une liste à partir \{1, 2, 3, 4, 5, 5\} sans \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
