---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Devolve o contido do ficheiro especificado dun sistema de ficheiros de Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Devolve o contido do ficheiro no URL, <code>url</code>, dun sistema de ficheiros de Azure Data Lake Storage. Pódese especificar <code>options</code> para controlar as opcións seguintes:    <ul><li><code>BlockSize</code> : N&#250;mero de bytes que se van ler antes de esperar o consumidor de datos. O valor predefinido &#233; 4 MB.</li><li><code>RequestSize</code> : N&#250;mero de bytes que se van tentar ler nunha solicitude HTTP &#250;nica no servidor. O valor predefinido &#233; 4 MB.</li><li><code>ConcurrentRequests</code> : A opci&#243;n ConcurrentRequests admite unha descarga m&#225;is r&#225;pida de datos mediante a especificaci&#243;n do n&#250;mero de solicitudes que se van realizar simultaneamente, en detrimento do uso da memoria. A memoria necesaria &#233; (ConcurrentRequest \* RequestSize). O valor predefinido &#233; 16.</li></ul>



## Category
Accessing data
