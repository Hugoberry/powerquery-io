---
title: List.Combine
---

# List.Combine


## Description

Vrne en seznam, tako da združi več seznamov.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Vzame seznam seznamov, <code>lists</code>, in jih spoji v en nov seznam.


## Examples

### Example #1 
Združite dva preprosta seznama \{1, 2} in \{3, 4}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Združite dva seznama, \{1, 2} in \{3, \{4, 5}}, pri čemer eden vsebuje ugnezdeni seznam.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
