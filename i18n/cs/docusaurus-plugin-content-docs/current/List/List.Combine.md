---
title: List.Combine
---

# List.Combine


## Description

Vrátí jediný seznam spojující více seznamů.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Přebere seznam seznamů <code>lists</code> a sloučí je do jediného nového seznamu.


## Examples

### Example #1 
Spojí dva jednoduché seznamy \{1, 2} a \{3, 4}.
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
Spojí dva seznamy \{1, 2} a \{3, \{4, 5}} z nichž jeden obsahuje vnořený seznam.
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
