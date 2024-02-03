---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Tar bort objekt från list1 som finns i listan.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Tar bort alla förekomster av de angivna värdena i <code>list2</code> från <code>list1</code>. Om värdena i <code>list2</code> inte finns i <code>list1</code> returneras den ursprungliga listan.


## Examples

### Example #1 
Ta bort objekten i listan \{2, 4, 6} från listan \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
