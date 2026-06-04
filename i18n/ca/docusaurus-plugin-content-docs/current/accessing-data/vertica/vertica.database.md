---
title: Vertica.Database
---

# Vertica.Database


Permet importar dades del Vertica.


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula dels esquemes disponibles al servidor especificat mitjançant el paràmetre `server` a la base de dades especificada mitjançant el paràmetre `database`. És possible proporcionar un paràmetre de registre opcional `options` per especificar més propietats. El registre pot contenir els camps següents:

-   `ConnectionTimeout`: durada que controla el període que cal esperar abans de cancel·lar un intent d'establir la connexió amb el servidor. El valor per defecte depèn del controlador.
-   `CommandTimeout` : durada que controla el període en què es permet executar la consulta del servidor abans de cancel·lar-la. El valor per defecte depèn del controlador.


## Examples

### Example #1
Permet llistar les taules del Vertica.
```powerquery

```



