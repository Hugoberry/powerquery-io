---
title: Salesforce.Data
---

# Salesforce.Data


Torna els objectes del compte del Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Retorna els objectes del compte del Salesforce especificat a les credencials. El compte es connectarà a través de l'entorn `loginUrl` que s'hagi proporcionat. Si no se'n proporciona cap, el compte es connectarà al de producció (https://login.salesforce.com). Es pot proporcionar un paràmetre de registre opcional, `options`, per especificar propietats addicionals. El registre pot contenir els camps següents:

-   `CreateNavigationProperties` : Disjunció lògica ("true" o "false") que estableix si cal generar propietats de navegació als valors retornats. El valor per defecte és "false".
-   `ApiVersion` : Versió de l'API del Salesforce que s'utilitzarà per a aquesta consulta. Si no s'especifica, s'utilitzarà la versió 29.0 de l'API.
-   `Timeout` : Duració que controla el temps que cal esperar abans de cancel·lar la sol·licitud al servidor. El valor per defecte és específic de l'origen.



## Category
Accessing data
