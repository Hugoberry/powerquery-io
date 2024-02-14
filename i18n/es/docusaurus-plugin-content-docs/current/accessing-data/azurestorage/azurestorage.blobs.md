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

Devuelve una tabla de navegación que contiene una fila por cada contenedor encontrado en la dirección URL de la cuenta, <code>account</code>, de un almacén de Azure Storage. Cada fila contiene un vínculo a los blobs del contenedor. Se puede especificar <code>options</code> para controlar las siguientes opciones:    <ul><li><code>BlockSize</code> : N&#250;mero de bytes que se van a leer antes de esperar en el consumidor de datos. El valor predeterminado es 4&#160;MB.</li><li><code>RequestSize</code> : N&#250;mero de bytes que se intentar&#225;n leer en una &#250;nica solicitud HTTP al servidor. El valor predeterminado es 4&#160;MB.</li><li><code>ConcurrentRequests</code> : La opci&#243;n ConcurrentRequests permite una descarga de datos m&#225;s r&#225;pida; para ello, hay que especificar el n&#250;mero de solicitudes que se van a realizar en paralelo a costa del uso de la memoria. La memoria necesaria es (ConcurrentRequest \* RequestSize). El valor predeterminado es 16.</li></ul>



## Category
Accessing data
