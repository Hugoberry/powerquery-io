---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Uklanja sva pojavljivanja ulaznih vrednosti.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Uklanja sva pojavljivanja datih vrednosti u <code>list2</code> iz liste <code>list1</code>. Ako vrednosti iz <code>list2</code> ne postoje u <code>list1</code>, vraća se prvobitna lista.    Može se navesti opcionalna vrednost kriterijuma jednakosti, <code>equationCriteria</code>, radi kontrole testiranja jednakosti. 


## Examples

### Example #1 
Kreiranje liste od \{1, 2, 3, 4, 5, 5} bez \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
