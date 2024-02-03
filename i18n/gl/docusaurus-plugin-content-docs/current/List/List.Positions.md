---
title: List.Positions
---

# List.Positions


## Description

Devolve unha lista de desprazamentos da entrada.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Devolve unha lista de desprazamentos da lista de entradas <code>list</code>.    Ao usar List.Transform para modificar unha lista, a lista de posicións pódese usar para permitir o acceso da transformación á posición.


## Examples

### Example #1 
Buscar os desprazamentos dos valores na lista \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
