---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Замінює задану кількість значень, починаючи з указаної позиції, на значення заміни.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

Замінює <code>count</code> значення у списку <code>list</code> на список <code>replaceWith</code>, починаючи з указаної позиції, <code>index</code>.


## Examples

### Example #1 
Замінити \{7, 8, 9} у списку \{1, 2, 7, 8, 9, 5} на \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
