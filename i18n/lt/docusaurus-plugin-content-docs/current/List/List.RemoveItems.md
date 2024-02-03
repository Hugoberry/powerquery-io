---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Iš list1 pašalinami sąraše esantys elementai.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Pašalinami visi nurodytų reikšmių, esančių <code>list2</code>, atvejai iš <code>list1</code>. Jei <code>list2</code> reikšmių nėra <code>list1</code>, pateikiamas pradinis sąrašas.


## Examples

### Example #1 
Pašalinkite sąrašo \{2, 4, 6} elementus iš sąrašo \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
