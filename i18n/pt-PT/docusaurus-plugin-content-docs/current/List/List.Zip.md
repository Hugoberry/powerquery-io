---
title: List.Zip
---

# List.Zip


## Description

Devolve uma lista de listas combinando itens na mesma posição em várias listas.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Ontém uma lista de listas, <code>lists</code>, e devolve uma lista de listas combinando itens na mesma posição.


## Examples

### Example #1 
Zipa as duas listas simples \{1, 2} e \{3, 4}.
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
Zipa as duas listas simples de diferentes comprimentos \{1, 2} e \{3}.
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
