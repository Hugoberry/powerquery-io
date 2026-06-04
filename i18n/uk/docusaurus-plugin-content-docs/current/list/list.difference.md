---
title: List.Difference
---

# List.Difference


Повертає різницю двох заданих списків.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Повертає елементи списку `list1`, яких немає в списку `list2`. Повтори значень підтримуються. Можна вказати додаткове значення умов рівняння (`equationCriteria`), щоб керувати перевіркою на рівність.


## Examples

### Example #1
Знайти елементи у списку \{1, 2, 3, 4, 5\}, які не з'являються в \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Знайти елементи у списку \{1, 2\}, які не з'являються в \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
