---
title: List.Combine
---

# List.Combine


## Description

Retorna uma única lista combinando várias listas.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Faça uma lista das listas, <code>lists</code>, e mescle-as em uma única lista nova.


## Examples

### Example #1 
Combine as duas listas simples \{1, 2} e \{3, 4}.
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
Combine as duas listas, \{1, 2} e \{3, \{4, 5}}, uma delas contendo uma lista aninhada.
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
