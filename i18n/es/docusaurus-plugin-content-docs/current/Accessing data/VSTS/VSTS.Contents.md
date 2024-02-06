---
title: VSTS.Contents
---

# VSTS.Contents


Especifique la URL del servicio Analytics de Azure DevOps.


## Syntax

```powerquery
VSTS.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Devuelve el contenido descargado de la dirección URL del servicio Analytics de Azure DevOps como valor binario. Esta función utiliza credenciales globales para todas las organizaciones con acceso.


