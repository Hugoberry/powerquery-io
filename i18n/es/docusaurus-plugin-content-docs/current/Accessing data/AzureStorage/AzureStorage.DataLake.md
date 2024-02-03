---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Devuelve una tabla de navegación que contiene los documentos que se han encontrado en el contenedor especificado y en sus subcarpetas desde Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Devuelve una tabla de navegación que contiene los documentos encontrados en el contendedor especificado y en sus subcarpetas de la URL de la cuenta, <code>endpoint</code>, desde un sistema de archivos de Azure Data Lake Storage. Se puede especificar <code>options</code> para controlar las siguientes opciones:    <ul><li><code>BlockSize</code> : N&#250;mero de bytes que se van a leer antes de esperar en el consumidor de datos. El valor predeterminado es 4&#160;MB.</li><li><code>RequestSize</code> : N&#250;mero de bytes que se intentar&#225;n leer en una &#250;nica solicitud HTTP al servidor. El valor predeterminado es 4&#160;MB.</li><li><code>ConcurrentRequests</code> : La opci&#243;n ConcurrentRequests permite una descarga de datos m&#225;s r&#225;pida; para ello, hay que especificar el n&#250;mero de solicitudes que se van a realizar en paralelo a costa del uso de la memoria. La memoria necesaria es (ConcurrentRequest \* RequestSize). El valor predeterminado es 16.</li><li><code>HierarchicalNavigation</code> : Un valor l&#243;gico (true/false) que controla si los archivos se devuelven en una vista de directorio de tipo &#225;rbol o en una lista plana. El valor predeterminado es false.</li></ul>



## Category
Accessing data
