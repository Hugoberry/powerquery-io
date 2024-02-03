---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Застосовує кожну заміну \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Вносить задані заміни у список <code>list</code>. Операція заміни <code>replacements</code> складається зі списку двох значень, старого значення та нового значення, які надаються у списку.    Можна вказати додаткове значення критеріїв рівняння, <code>equationCriteria</code>, для керування перевіркою на рівність.


## Examples

### Example #1 
Створити список із \{1, 2, 3, 4, 5} із заміною значення 5 на -5 і значення 1 на -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
