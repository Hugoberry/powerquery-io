---
title: List.PositionOf
---

# List.PositionOf


## Description

Повертає зсуви значень у списку.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Повертає зсув для значення <code>value</code>, у якому воно зустрічається в списку <code>list</code>. Повертає -1, якщо значення не зустрічається.    Можна вказати додатковий параметр екземпляра <code>occurrence</code>.<ul>   <li><code>occurrence</code>: максимальна кількість екземплярів, про які слід повідомити.</li></ul>


## Examples

### Example #1 
Знайти позицію у списку \{1, 2, 3}, в якій зустрічається значення 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
