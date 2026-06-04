---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Devolve o contido do BLOB especificado dun almacén de Azure Storage.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Devolve o contido do BLOB no URL, `url`, dun almacén de Azure Storage. Pódese especificar `options` para controlar as opcións seguintes:

-   `BlockSize` : Número de bytes que se van ler antes de esperar o consumidor de datos. O valor predefinido é 4 MB.
-   `RequestSize` : Número de bytes que se van tentar ler nunha solicitude HTTP única no servidor. O valor predefinido é 4 MB.
-   `ConcurrentRequests` : A opción ConcurrentRequests admite unha descarga máis rápida de datos mediante a especificación do número de solicitudes que se van realizar simultaneamente, en detrimento do uso da memoria. A memoria necesaria é (ConcurrentRequest \* RequestSize). O valor predefinido é 16.



## Category
Accessing data
