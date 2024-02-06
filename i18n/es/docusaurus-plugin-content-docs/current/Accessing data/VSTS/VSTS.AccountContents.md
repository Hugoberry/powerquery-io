---
title: VSTS.AccountContents
---

# VSTS.AccountContents


Especifique la URL del servicio Analytics de Azure DevOps.


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Devuelve el contenido descargado de la dirección URL del servicio Analytics de Azure DevOps como valor binario. Esta función utiliza credenciales diferentes para cada organización.


