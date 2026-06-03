---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Devuelve una tabla de navegación que contiene los documentos que se han encontrado en el contenedor especificado y en sus subcarpetas desde Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de navegación que contiene los documentos encontrados en el contendedor especificado y en sus subcarpetas de la URL de la cuenta, `endpoint`, desde un sistema de archivos de Azure Data Lake Storage. Se puede especificar `options` para controlar las siguientes opciones:

-   `BlockSize` : Número de bytes que se van a leer antes de esperar en el consumidor de datos. El valor predeterminado es 4 MB.
-   `RequestSize` : Número de bytes que se intentarán leer en una única solicitud HTTP al servidor. El valor predeterminado es 4 MB.
-   `ConcurrentRequests` : La opción ConcurrentRequests permite una descarga de datos más rápida; para ello, hay que especificar el número de solicitudes que se van a realizar en paralelo a costa del uso de la memoria. La memoria necesaria es (ConcurrentRequest \* RequestSize). El valor predeterminado es 16.
-   `HierarchicalNavigation` : Un valor lógico (true/false) que controla si los archivos se devuelven en una vista de directorio de tipo árbol o en una lista plana. El valor predeterminado es false.



## Category
Accessing data
