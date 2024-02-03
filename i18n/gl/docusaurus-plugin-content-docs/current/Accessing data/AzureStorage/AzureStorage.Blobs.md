---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Devolve unha táboa de navegación que inclúe os contedores atopados na conta especificada dunha caixa forte de almacenamento Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa de navegación que inclúe unha fila para cada contedor do URL da conta, <code>account</code>, dun almacén de Azure Storage. Cada fila contén unha ligazón aos BLOB do contedor. Pódese especificar <code>options</code> para controlar as opcións seguintes:    <ul><li><code>BlockSize</code> : N&#250;mero de bytes que se van ler antes de esperar o consumidor de datos. O valor predefinido &#233; 4 MB.</li><li><code>RequestSize</code> : N&#250;mero de bytes que se van tentar ler nunha solicitude HTTP &#250;nica no servidor. O valor predefinido &#233; 4 MB.</li><li><code>ConcurrentRequests</code> : A opci&#243;n ConcurrentRequests admite unha descarga m&#225;is r&#225;pida de datos mediante a especificaci&#243;n do n&#250;mero de solicitudes que se van realizar simultaneamente, en detrimento do uso da memoria. A memoria necesaria &#233; (ConcurrentRequest \* RequestSize). O valor predefinido &#233; 16.</li></ul>



## Category
Accessing data
