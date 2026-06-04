---
title: List.Modes
---

# List.Modes


Повертає список найчастіших значень у списку.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Повертає елементи, які найчастіше зустрічаються у `list`. Якщо список пустий, стається помилка. Якщо кілька елементів відображаються з однаковою максимальною частотою, буде повернуто всі. Можна вказати додаткове значення критерію порівняння, `equationCriteria`, щоб керувати перевіркою на рівність.


## Examples

### Example #1
Знайти елементи, які найчастіше зустрічаються у списку `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
