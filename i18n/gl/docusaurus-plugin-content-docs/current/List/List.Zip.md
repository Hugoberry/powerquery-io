---
title: List.Zip
---

# List.Zip


## Description

Obtén unha lista de listas ao combinar elementos na mesma posición en varias listas.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Colle unha lista de listas, <code>lists</code>, e obtén unha lista de listas ao combinar elementos na mesma posición.


## Examples

### Example #1 
Comprime as dúas listas simples \{1, 2} e \{3, 4}.
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
Comprime as dúas listas simples de diferentes lonxitudes \{1, 2} e \{3}.
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
