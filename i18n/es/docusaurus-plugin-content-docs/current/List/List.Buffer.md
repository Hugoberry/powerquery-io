---
title: List.Buffer
---

# List.Buffer


## Description

Almacenar en búfer una lista.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Almacena en búfer la lista <code>list</code> en memoria. El resultado de esta llamada es una lista estable.


## Examples

### Example #1 
Crear una copia estable de la lista \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
