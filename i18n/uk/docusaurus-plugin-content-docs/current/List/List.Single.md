---
title: List.Single
---

# List.Single


## Description

Повертає один елемент списку для списку довжиною 1, у протилежному випадку повертає виняткову ситуацію.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Якщо список <code>list</code> містить тільки один елемент, повертає цей елемент.    Якщо список містить більше одного елемента або пустий, функція повертає виняткову ситуацію.


## Examples

### Example #1 
Знайти одне значення у списку \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Знайти одне значення у списку \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
