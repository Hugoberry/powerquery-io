---
title: Binary.Split
---

# Binary.Split


Divide o binario especificado nunha lista de binarios utilizando o tamaño de páxina especificado.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Divide `binary` nunha lista de binarios onde o primeiro elemento da lista de saída é un binario que contén os primeiros `pageSize` bytes do binario de orixe, o seguinte elemento da lista de saída é un binario que contén os seguintes `pageSize` bytes do binario de orixe etc.



## Category
Binary
