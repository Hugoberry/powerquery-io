---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Uklanja sva pojavljivanja ulaznih vrednosti.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Uklanja sva pojavljivanja datih vrednosti u `list2` iz liste `list1`. Ako vrednosti iz `list2` ne postoje u `list1`, vraća se prvobitna lista. Može se navesti opcionalna vrednost kriterijuma jednakosti, `equationCriteria`, radi kontrole testiranja jednakosti.


## Examples

### Example #1
Kreiranje liste od \{1, 2, 3, 4, 5, 5\} bez \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
