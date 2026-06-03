---
title: List.Combine
---

# List.Combine


Retourne une seule liste en associant plusieurs listes.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Remarks

Prend une liste de listes, `lists`, et les fusionne dans une seule nouvelle liste.


## Examples

### Example #1
Combine les deux listes simples \{1, 2\} et \{3, 4\}.
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
Combine les deux listes, \{1, 2\} et \{3, \{4, 5\}\}, dont l'une contient une liste imbriquée.
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
