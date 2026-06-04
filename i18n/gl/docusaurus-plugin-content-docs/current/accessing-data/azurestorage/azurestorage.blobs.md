---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Devolve unha táboa de navegación que inclúe os contedores atopados na conta especificada dunha caixa forte de almacenamento Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de navegación que inclúe unha fila para cada contedor do URL da conta, `account`, dun almacén de Azure Storage. Cada fila contén unha ligazón aos BLOB do contedor. Pódese especificar `options` para controlar as opcións seguintes:

-   `BlockSize` : Número de bytes que se van ler antes de esperar o consumidor de datos. O valor predefinido é 4 MB.
-   `RequestSize` : Número de bytes que se van tentar ler nunha solicitude HTTP única no servidor. O valor predefinido é 4 MB.
-   `ConcurrentRequests` : A opción ConcurrentRequests admite unha descarga máis rápida de datos mediante a especificación do número de solicitudes que se van realizar simultaneamente, en detrimento do uso da memoria. A memoria necesaria é (ConcurrentRequest \* RequestSize). O valor predefinido é 16.



## Category
Accessing data
