---
title: List.Combine
---

# List.Combine


## Description

Retorna una llista única amb la combinació de diverses llistes.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Pren una llista de llistes, <code>lists</code>, i les combina en una única llista nova.


## Examples

### Example #1 
Combina les dues llistes senzilles \{1, 2} i \{3, 4}.
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
Combina les dues llistes, \{1, 2} i \{3, \{4, 5}}, una de les quals conté una llista imbricada.
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
