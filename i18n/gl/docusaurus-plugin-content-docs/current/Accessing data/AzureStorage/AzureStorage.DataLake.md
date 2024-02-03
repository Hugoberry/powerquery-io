---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Devolve unha táboa de navegación que contén os documentos atopados no contedor especificado e os seus subcartafoles de Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa de navegación que contén os documentos atopados no contedor especificado e os seus subcartafoles no URL da conta, <code>endpoint</code>, dun sistema de ficheiros de Azure Data Lake Storage. Pódese especificar <code>options</code> para controlar as opcións seguintes:    <ul><li><code>BlockSize</code> : N&#250;mero de bytes que se van ler antes de esperar o consumidor de datos. O valor predefinido &#233; 4 MB.</li><li><code>RequestSize</code> : N&#250;mero de bytes que se van tentar ler nunha solicitude HTTP &#250;nica no servidor. O valor predefinido &#233; 4 MB.</li><li><code>ConcurrentRequests</code> : A opci&#243;n ConcurrentRequests admite unha descarga m&#225;is r&#225;pida de datos mediante a especificaci&#243;n do n&#250;mero de solicitudes que se van realizar simultaneamente, en detrimento do uso da memoria. A memoria necesaria &#233; (ConcurrentRequest \* RequestSize). O valor predefinido &#233; 16.</li><li><code>HierarchicalNavigation</code> : Unha l&#243;xica (true/false) que controla se os ficheiros se devolven nunha visualizaci&#243;n de directorio de &#225;rbore ou nunha lista simple. O valor predefinido &#233; false.</li></ul>



## Category
Accessing data
