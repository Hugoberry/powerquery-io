---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Pašalinami visi įvesties reikšmių atvejai.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Pašalinami visi nurodytų `list2` reikšmių atvejai iš sąrašo `list1`. Jei `list2` reikšmių nėra `list1`, pateikiamas pradinis sąrašas. Pasirenkama lygties kriterijų reikšmė, `equationCriteria`, gali būti nurodyta norint valdyti lygybės bandymą.


## Examples

### Example #1
Kurkite sąrašą iš \{1, 2, 3, 4, 5, 5\} be \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
