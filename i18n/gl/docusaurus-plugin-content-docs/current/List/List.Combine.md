---
title: List.Combine
---

# List.Combine


## Description

Devolve unha lista única combinando varias listas.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Acepta unha lista de listas, <code>lists</code> e combínaas nunha nova lista única.


## Examples

### Example #1 
Combinar as dúas listas simples \{1, 2} e \{3, 4}.
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
Combinar as dúas listas, \{1, 2} e \{3, \{4, 5}}, onde unha delas contén unha lista aniñada.
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
