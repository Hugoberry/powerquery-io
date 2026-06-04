---
title: Salesforce.Reports
---

# Salesforce.Reports


Torna els informes del compte del Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Retorna els informes del compte del Salesforce especificat a les credencials. El compte es connectarà a través de l'entorn `loginUrl` que s'hagi proporcionat. Si no se'n proporciona cap, el compte es connectarà al de producció (https://login.salesforce.com). Es pot proporcionar un paràmetre de registre opcional, `options`, per especificar propietats addicionals. El registre pot contenir els camps següents:

-   `ApiVersion` : Versió de l'API del Salesforce que s'utilitzarà per a aquesta consulta. Si no s'especifica, s'utilitzarà la versió 29.0 de l'API.
-   `Timeout` : Duració que controla el temps que cal esperar abans de cancel·lar la sol·licitud al servidor. El valor per defecte és específic de l'origen.



## Category
Accessing data
