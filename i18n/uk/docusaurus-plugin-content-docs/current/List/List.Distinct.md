---
title: List.Distinct
---

# List.Distinct


## Description

Повертає список значень без видалених повторів.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Повертає список, який містить усі значення у списку <code>list</code> без видалених повторів. Якщо список пустий, результатом буде пустий список.


## Examples

### Example #1 
Видалити повтори зі списку \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
