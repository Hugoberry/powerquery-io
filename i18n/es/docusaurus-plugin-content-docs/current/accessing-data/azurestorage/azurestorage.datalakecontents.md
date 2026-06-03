---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Devuelve el contenido del archivo especificado desde un sistema de archivos de Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Devuelve el contenido del archivo en la dirección URL, `url`, desde un sistema de archivos de Azure Data Lake Storage. Se puede especificar `options` para controlar las siguientes opciones:

-   `BlockSize` : Número de bytes que se van a leer antes de esperar en el consumidor de datos. El valor predeterminado es 4 MB.
-   `RequestSize` : Número de bytes que se intentarán leer en una única solicitud HTTP al servidor. El valor predeterminado es 4 MB.
-   `ConcurrentRequests` : La opción ConcurrentRequests permite una descarga de datos más rápida; para ello, hay que especificar el número de solicitudes que se van a realizar en paralelo a costa del uso de la memoria. La memoria necesaria es (ConcurrentRequest \* RequestSize). El valor predeterminado es 16.



## Category
Accessing data
