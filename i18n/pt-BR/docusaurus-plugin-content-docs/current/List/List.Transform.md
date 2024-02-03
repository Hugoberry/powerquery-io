---
title: List.Transform
---

# List.Transform


## Description

Retorna uma nova lista de valores computados nesta lista.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Retorna uma nova lista de valores aplicando a função transform <code>transform</code> à lista <code>list</code>.


## Examples

### Example #1 
Adicione 1 a cada valor na lista \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
