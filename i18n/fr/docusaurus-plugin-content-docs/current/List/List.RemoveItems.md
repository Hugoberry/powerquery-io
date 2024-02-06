---
title: List.RemoveItems
---

# List.RemoveItems


Supprime des éléments de list1 qui sont présents dans la liste.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Supprime toutes les occurrences des valeurs spécifiées dans <code>list2</code> depuis <code>list1</code>. Si les valeurs dans <code>list2</code> n'existent pas dans <code>list1</code>, la liste d'origine est retournée.


## Examples

### Example #1 
Supprime des éléments de la liste \{2, 4, 6} dans la liste \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
