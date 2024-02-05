---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Tar bort alla förekomster av indatavärdena.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Tar bort alla förekomster av de angivna värdena i <code>list2</code> från listan <code>list1</code>. Om värdena i <code>list2</code> inte finns i <code>list1</code> returneras den ursprungliga listan.    Ett valfritt ekvationsvillkorsvärde, <code>equationCriteria</code>, kan anges för att hantera likhetstestning. 


## Examples

### Example #1 
Skapa en lista från \{1, 2, 3, 4, 5, 5} utan \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
