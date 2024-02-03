---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Видаляє всі входження вхідних значень.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Видаляє всі входження заданих значень у списку <code>list2</code> зі списку <code>list1</code>. Якщо значення списку <code>list2</code> не існують у списку <code>list1</code>, повертається вихідний список.    Можна вказати додаткове значення критеріїв рівняння, <code>equationCriteria</code>, для керування перевіркою на рівність. 


## Examples

### Example #1 
Створити список зі списку \{1, 2, 3, 4, 5, 5} без \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
