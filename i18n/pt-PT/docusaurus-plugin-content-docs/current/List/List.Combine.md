---
title: List.Combine
---

# List.Combine


## Description

Devolve uma única lista através da combinação de várias listas.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Utiliza uma lista de listas, <code>lists</code>, e intercala-a numa única lista nova.


## Examples

### Example #1 
Combinar as duas listas simples \{1, 2} e \{3, 4}.
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
Combinar as duas listas, \{1, 2} e \{3, \{4, 5}}, uma das quais contém uma lista aninhada.
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
