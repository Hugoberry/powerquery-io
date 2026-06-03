---
title: Binary.Split
---

# Binary.Split


Divide il file binario specificato in un elenco di file binari usando le dimensioni di pagina specificate.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Divide `binary` in un elenco di file binari in cui il primo elemento dell'elenco di output è un file binario contenente i primi `pageSize` bye del file binario di origine, l'elemento successivo dell'elenco di output è un file binario contenente i successivi `pageSize` byte del file binario di origine e così via.



## Category
Binary
