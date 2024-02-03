---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Повертає перший зсув значення у списку.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Повертає зсув для значення <code>values</code>, у якому воно вперше зустрічається в списку <code>list</code>. Повертає -1, якщо значення не знайдено.    Можна вказати додатковий параметр екземпляра <code>occurrence</code>.<ul>   <li><code>occurrence</code>: максимальна кількість екземплярів, які можна повернути.</li></ul>


## Examples

### Example #1 
Знайти першу позицію у списку \{1, 2, 3}, в якій зустрічається значення 2 або 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
