---
title: List.Positions
---

# List.Positions


## Description

Devuelve una lista de desplazamientos para la entrada.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Devuelve una lista de desplazamientos para la lista de entrada <code>list</code>.    Al usar List.Transform para cambiar una lista, la lista de posiciones se puede usar para dar a la transformación acceso a la posición.


## Examples

### Example #1 
Buscar los desplazamientos de los valores de la lista \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
