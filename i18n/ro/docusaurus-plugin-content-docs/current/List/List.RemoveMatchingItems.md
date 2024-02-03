---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Elimină toate ocurenţele valorilor de intrare.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Elimină toate ocurenţele valorilor specificate în <code>list2</code> din lista <code>list1</code>. Dacă valorile din <code>list2</code> nu există în <code>list1</code>, se returnează lista originală.    O valoare opţională pentru criteriile ecuaţiei, <code>equationCriteria</code>, poate fi specificată pentru a controla testarea egalităţii. 


## Examples

### Example #1 
Creaţi o listă de la \{1, 2, 3, 4, 5, 5} fără \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
