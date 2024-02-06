---
title: Binary.Split
---

# Binary.Split


Divide el binario especificado en una lista de archivos binarios con el tamaño de página especificado.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Divide <code>binary</code> en una lista de archivos binarios donde el primer elemento de la lista de salida es un binario que contiene los primeros bytes <code>pageSize</code> de    el binario de origen, el siguiente elemento de la lista de salida es un binario que contiene los siguientes bytes <code>pageSize</code> del binario de origen,  y así sucesivamente.



## Category
Binary
