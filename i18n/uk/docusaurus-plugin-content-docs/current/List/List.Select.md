---
title: List.Select
---

# List.Select


## Description

Повертає список значень, які задовольняють умову.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Повертає список значень зі списку <code>list</code>, які відповідають умові вибору <code>selection</code>.


## Examples

### Example #1 
Знайти значення у списку \{1, -3, 4, 9, -2}, які більші 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
