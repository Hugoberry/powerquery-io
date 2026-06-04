---
title: List.RemoveRange
---

# List.RemoveRange


Көрсетілген орыннан бастап саналған мәндер санын жояды.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

`index` көрсетілген орнынан бастап `list` ішіндегі `count` мәнді жояды.


## Examples

### Example #1
4 индексінен бастап \{1, 2, 3, 4, -6, -2, -1, 5\} тізіміндегі 3 мәнді жояды.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
