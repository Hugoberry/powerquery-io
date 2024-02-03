---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Elimină elementele din list1 care sunt prezente în listă.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Elimină toate ocurenţele valorilor date în <code>list2</code> din <code>list1</code>. Dacă valorile din <code>list2</code> nu există în <code>list1</code>, se returnează lista originală.


## Examples

### Example #1 
Eliminaţi elementele din lista \{2, 4, 6} din lista \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
