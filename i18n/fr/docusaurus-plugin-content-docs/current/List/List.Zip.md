---
title: List.Zip
---

# List.Zip


## Description

Retourne une liste de listes en combinant des éléments à la même position dans plusieurs listes.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Prend une liste de listes, <code>lists</code>, et retourne une liste de listes en combinant des éléments à la même position.


## Examples

### Example #1 
Compresse les deux listes simples \{1, 2} et \{3, 4}.
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
Compresse les deux listes simples de différentes longueurs \{1, 2} et \{3}.
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
