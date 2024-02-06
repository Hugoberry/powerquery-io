---
title: List.Zip
---

# List.Zip


Combina los elementos situados en la misma posición de múltiples listas y devuelve una elaborada a partir de dichas listas.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Remarks

Toma una lista elaborada a partir de varias listas (<code>lists</code>), combina los elementos situados en la misma posición y devuelve otra lista también elaborada a partir de varias.


## Examples

### Example #1 
Comprime las dos listas simples \{1, 2} y \{3, 4}.
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
Comprime las dos listas simples de longitudes distintas \{1, 2} y \{3}.
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
