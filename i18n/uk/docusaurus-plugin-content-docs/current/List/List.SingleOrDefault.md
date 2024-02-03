---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Повертає один елемент списку для списку довжиною 1 і значення за замовчуванням для пустого списку.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Якщо список <code>list</code> містить тільки один елемент, повертає цей елемент.    Якщо список пустий, функція повертає Null-значення, якщо не вказано додаткове значення <code>default</code>. Якщо список містить більше одного елемента, функція повертає помилку.


## Examples

### Example #1 
Знайти одне значення у списку \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Знайти одне значення у списку \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Знайти одне значення у списку \{}. Якщо список пустий, повернути -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
