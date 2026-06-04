---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Retorna una taula de navegació que conté les taules que s'han trobat al compte especificat des d'un dipòsit d'emmagatzematge de l'Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula de navegació que conté una fila per a cada taula que es troba a l'URL del compte (`account`) d'un dipòsit d'emmagatzematge de l'Azure. Cada fila conté un enllaç a la taula de l'Azure. És possible proporcionar un paràmetre de registre opcional (`options`) per especificar propietats addicionals. El registre pot contenir els camps següents:

-   `Timeout` : Duració que controla el temps que cal esperar abans de cancel·lar la sol·licitud al servidor. El valor per defecte és específic de l'origen.



## Category
Accessing data
