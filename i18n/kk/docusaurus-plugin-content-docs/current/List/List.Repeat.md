---
title: List.Repeat
---

# List.Repeat


## Description

Бастапқы тізімнің қайталаулар саны болып табылатын тізімді қайтарады.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

<code>list</code> бастапқы тізімінің <code>count</code> қайталауы болып табылатын тізімді қайтарады.


## Examples

### Example #1 
\{1, 2} 3 рет қайталанатын тізімді жасау.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
