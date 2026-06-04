---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Devolve unha táboa de navegación que contén os documentos atopados no contedor especificado e os seus subcartafoles de Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de navegación que contén os documentos atopados no contedor especificado e os seus subcartafoles no URL da conta, `endpoint`, dun sistema de ficheiros de Azure Data Lake Storage. Pódese especificar `options` para controlar as opcións seguintes:

-   `BlockSize` : Número de bytes que se van ler antes de esperar o consumidor de datos. O valor predefinido é 4 MB.
-   `RequestSize` : Número de bytes que se van tentar ler nunha solicitude HTTP única no servidor. O valor predefinido é 4 MB.
-   `ConcurrentRequests` : A opción ConcurrentRequests admite unha descarga máis rápida de datos mediante a especificación do número de solicitudes que se van realizar simultaneamente, en detrimento do uso da memoria. A memoria necesaria é (ConcurrentRequest \* RequestSize). O valor predefinido é 16.
-   `HierarchicalNavigation` : Unha lóxica (true/false) que controla se os ficheiros se devolven nunha visualización de directorio de árbore ou nunha lista simple. O valor predefinido é false.



## Category
Accessing data
