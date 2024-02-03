---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Тізімде бар 1-тізім элементтерін жояды.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

<code>list2</code> ішіндегі көрсетілген мәндердің барлық даналарын <code>list1</code> ішінен жояды. Егер <code>list2</code> ішіндегі мәндер <code>list1</code> ішінде жоқ болса, бастапқы тізім қайтарылады.


## Examples

### Example #1 
\{2, 4, 6} тізіміндегі элементтерді \{1, 2, 3, 4, 2, 5, 5} тізімінен жою.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
