---
title: AzureDevOpsServer.AccountContents
---

# AzureDevOpsServer.AccountContents


## Description

Especifique la URL del servicio Analytics de Azure DevOps.


## Syntax

```powerquery
AzureDevOpsServer.AccountContents(
    url as text,
    optional options as record
) as table
```


## Details

Devuelve el contenido descargado de la dirección URL del servicio Analytics de Azure DevOps como valor binario. Esta función utiliza credenciales diferentes para cada organización.


