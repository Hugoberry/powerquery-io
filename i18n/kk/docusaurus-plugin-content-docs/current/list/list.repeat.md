---
title: List.Repeat
---

# List.Repeat


Бастапқы тізімнің қайталаулар саны болып табылатын тізімді қайтарады.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

`list` бастапқы тізімінің `count` қайталауы болып табылатын тізімді қайтарады.


## Examples

### Example #1
\{1, 2\} 3 рет қайталанатын тізімді жасау.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
