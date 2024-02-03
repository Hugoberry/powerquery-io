---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Uklanja stavke iz liste 1 koje su prisutne na listi.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Uklanja sva pojavljivanja datih vrednosti u <code>list2</code> iz <code>list1</code>. Ako vrednosti iz <code>list2</code> ne postoje u <code>list1</code>, vraća se prvobitna lista.


## Examples

### Example #1 
Uklanjanje stavki sa liste \{2, 4, 6} iz liste \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
