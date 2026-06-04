---
title: List.Single
---

# List.Single


Повертає один елемент списку для списку довжиною 1, в іншому випадку генерує повідомлення про помилку.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Якщо список `list` містить тільки один елемент, повертається цей елемент. Якщо список містить кілька елементів або пустий, функція генерує повідомлення про помилку.


## Examples

### Example #1
Знайти одне значення у списку \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Знайти одне значення у списку \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
