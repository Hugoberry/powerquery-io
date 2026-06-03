---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Devuelve una tabla navegacional que contiene los contenedores encontrados en la cuenta especificada de un almacenamiento de Windows Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de navegación que contiene una fila por cada contenedor encontrado en la dirección URL de la cuenta, `account`, de un almacén de Azure Storage. Cada fila contiene un vínculo a los blobs del contenedor. Se puede especificar `options` para controlar las siguientes opciones:

-   `BlockSize` : Número de bytes que se van a leer antes de esperar en el consumidor de datos. El valor predeterminado es 4 MB.
-   `RequestSize` : Número de bytes que se intentarán leer en una única solicitud HTTP al servidor. El valor predeterminado es 4 MB.
-   `ConcurrentRequests` : La opción ConcurrentRequests permite una descarga de datos más rápida; para ello, hay que especificar el número de solicitudes que se van a realizar en paralelo a costa del uso de la memoria. La memoria necesaria es (ConcurrentRequest \* RequestSize). El valor predeterminado es 16.



## Category
Accessing data
