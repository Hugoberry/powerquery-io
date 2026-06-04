---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Видаляє всі входження вхідних значень.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Видаляє всі входження заданих значень у списку `list2` зі списку `list1`. Якщо значення списку `list2` не існують у списку `list1`, повертається вихідний список. Можна вказати додаткове значення критеріїв рівняння, `equationCriteria`, для керування перевіркою на рівність.


## Examples

### Example #1
Створити список зі списку \{1, 2, 3, 4, 5, 5\} без \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
