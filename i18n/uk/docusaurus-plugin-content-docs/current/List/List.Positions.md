---
title: List.Positions
---

# List.Positions


## Description

Повертає список зсувів для вхідного списку.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Повертає список зсувів для вхідного списку <code>list</code>.    Список позицій забезпечує доступ до позицій, коли список змінюється за допомогою функції List.Transform.


## Examples

### Example #1 
Знайти зсуви значень у списку \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
