---
title: List.Combine
---

# List.Combine


## Description

Retourne une seule liste en associant plusieurs listes.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Prend une liste de listes, <code>lists</code>, et les fusionne dans une seule nouvelle liste.


## Examples

### Example #1 
Combine les deux listes simples \{1, 2} et \{3, 4}.
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
Combine les deux listes, \{1, 2} et \{3, \{4, 5}}, dont l&#39;une contient une liste imbriquée.
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
