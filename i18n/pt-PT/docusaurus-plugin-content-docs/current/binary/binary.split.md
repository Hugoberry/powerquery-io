---
title: Binary.Split
---

# Binary.Split


Divide o binário especificado numa lista de binários com o tamanho de página especificado.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Divide <code>binary</code> numa lista de binários em que o primeiro elemento da lista de saída é um binário que contém os primeiros <code>pageSize</code> bytes de    o binário de origem, o elemento seguinte da lista de saída é um binário que contém os seguintes <code>pageSize</code> bytes do binário de origem, e assim sucessivamente.



## Category
Binary
