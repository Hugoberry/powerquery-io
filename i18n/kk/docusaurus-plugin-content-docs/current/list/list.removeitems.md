---
title: List.RemoveItems
---

# List.RemoveItems


Тізімде бар 1-тізім элементтерін жояды.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

`list2` ішіндегі көрсетілген мәндердің барлық даналарын `list1` ішінен жояды. Егер `list2` ішіндегі мәндер `list1` ішінде жоқ болса, бастапқы тізім қайтарылады.


## Examples

### Example #1
\{2, 4, 6\} тізіміндегі элементтерді \{1, 2, 3, 4, 2, 5, 5\} тізімінен жою.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
