---
title: List.RemoveItems
---

# List.RemoveItems


Iš list1 pašalinami sąraše esantys elementai.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Pašalinami visi nurodytų reikšmių, esančių `list2`, atvejai iš `list1`. Jei `list2` reikšmių nėra `list1`, pateikiamas pradinis sąrašas.


## Examples

### Example #1
Pašalinkite sąrašo \{2, 4, 6\} elementus iš sąrašo \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
