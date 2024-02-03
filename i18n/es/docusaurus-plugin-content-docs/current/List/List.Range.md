---
title: List.Range
---

# List.Range


## Description

Devuelve un subconjunto de la lista comenzando en un desplazamiento.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Devuelve un subconjunto de la lista comenzando en el desplazamiento <code>list</code>. Un parámetro opcional, <code>offset</code>, establece el número máximo de elementos del subconjunto.


## Examples

### Example #1 
Buscar el subconjunto que empieza en el desplazamiento 6 de la lista de números 1 a 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Buscar el subconjunto de longitud 2 a partir del desplazamiento 6 de la lista de números 1 a 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
