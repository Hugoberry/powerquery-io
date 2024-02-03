---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Pašalinami visi įvesties reikšmių atvejai.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Pašalinami visi nurodytų <code>list2</code> reikšmių atvejai iš sąrašo <code>list1</code>. Jei <code>list2</code> reikšmių nėra <code>list1</code>, pateikiamas pradinis sąrašas.    Pasirenkama lygties kriterijų reikšmė, <code>equationCriteria</code>, gali būti nurodyta norint valdyti lygybės bandymą. 


## Examples

### Example #1 
Kurkite sąrašą iš \{1, 2, 3, 4, 5, 5} be \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
