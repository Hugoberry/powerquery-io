---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Tar bort alla förekomster av indatavärdena.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Tar bort alla förekomster av de angivna värdena i `list2` från listan `list1`. Om värdena i `list2` inte finns i `list1` returneras den ursprungliga listan. Ett valfritt ekvationsvillkorsvärde, `equationCriteria`, kan anges för att hantera likhetstestning.


## Examples

### Example #1
Skapa en lista från \{1, 2, 3, 4, 5, 5\} utan \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
