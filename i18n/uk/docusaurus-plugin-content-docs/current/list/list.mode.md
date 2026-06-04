---
title: List.Mode
---

# List.Mode


Повертає найчастіше значення у списку.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Повертає елемент, який найчастіше зустрічається у `list`. Якщо список пустий, стається помилка. Якщо кілька елементів відображаються з однаковою максимальною частотою, буде вибрано останній. Можна вказати додаткове значення критерію порівняння, `equationCriteria`, щоб керувати перевіркою на рівність.


## Examples

### Example #1
Знайти елемент, який найчастіше зустрічається у списку `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Знайти елемент, який найчастіше зустрічається у списку `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
