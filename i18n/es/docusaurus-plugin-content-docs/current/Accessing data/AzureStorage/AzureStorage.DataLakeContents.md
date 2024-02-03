---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Devuelve el contenido del archivo especificado desde un sistema de archivos de Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Devuelve el contenido del archivo en la dirección URL, <code>url</code>, desde un sistema de archivos de Azure Data Lake Storage. Se puede especificar <code>options</code> para controlar las siguientes opciones:    <ul><li><code>BlockSize</code> : N&#250;mero de bytes que se van a leer antes de esperar en el consumidor de datos. El valor predeterminado es 4&#160;MB.</li><li><code>RequestSize</code> : N&#250;mero de bytes que se intentar&#225;n leer en una &#250;nica solicitud HTTP al servidor. El valor predeterminado es 4&#160;MB.</li><li><code>ConcurrentRequests</code> : La opci&#243;n ConcurrentRequests permite una descarga de datos m&#225;s r&#225;pida; para ello, hay que especificar el n&#250;mero de solicitudes que se van a realizar en paralelo a costa del uso de la memoria. La memoria necesaria es (ConcurrentRequest \* RequestSize). El valor predeterminado es 16.</li></ul>



## Category
Accessing data
