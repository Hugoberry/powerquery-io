---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Elimina todos os valores &#34;nulo&#34; da lista especifica.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Elimina todas as ocorrencias de valores "nulo" en <code>list</code>. Se non hai valores "nulo" na lista, devólvese a lista orixinal.


## Examples

### Example #1 
Eliminar os valores &#34;nulo&#34; da lista \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
