---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Supprime toutes les occurrences des valeurs d&#39;entrée.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Supprime toutes les occurrences des valeurs spécifiées dans <code>list2</code> depuis la liste <code>list1</code>. Si les valeurs dans <code>list2</code> n'existent pas dans <code>list1</code>, la liste d'origine est retournée.    La valeur du critère d'équation facultatif, <code>equationCriteria</code>, peut être spécifiée pour contrôler le test d'égalité. 


## Examples

### Example #1 
Crée une liste à partir \{1, 2, 3, 4, 5, 5} sans \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
