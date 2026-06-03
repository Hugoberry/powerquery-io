---
title: Binary.Split
---

# Binary.Split


Divide o binário especificado em uma lista de binários utilizando o tamanho de página especificado.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Divide `binary` em uma lista de binários onde o primeiro elemento da lista de saída é um binário contendo os primeiros `pageSize` bytes de o binário de origem, o próximo elemento da lista de saída é um binário contendo os próximos `pageSize` bytes do binário de origem, e assim por diante.



## Category
Binary
