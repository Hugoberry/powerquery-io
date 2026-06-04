---
title: List.Median
---

# List.Median


Повертає серединне значення у списку.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Повертає медіанний елемент списку `list`. Ця функція повертає `null`, якщо список не містить значень, відмінних від `null`\-значення. Для парної кількості елементів функція вибирає менший із двох серединних елементів. Якщо ж список складається тільки зі значень "Дата й час", "Тривалість", "Число" або "Час", функція повертає середнє двох елементів.


## Examples

### Example #1
Знайти серединний елемент списку `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
