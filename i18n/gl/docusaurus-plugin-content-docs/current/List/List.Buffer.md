---
title: List.Buffer
---

# List.Buffer


## Description

Almacena no búfer unha lista.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Almacena no búfer a lista <code>list</code> na memoria. O resultado desta chamada é unha lista estable.


## Examples

### Example #1 
Crear unha copia estable da lista \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
