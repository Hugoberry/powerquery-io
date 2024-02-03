---
title: Vertica.Database
---

# Vertica.Database


## Description

Permet importar dades del Vertica.


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retorna una taula dels esquemes disponibles al servidor especificat mitjançant el paràmetre <code>server</code> a la base de dades especificada mitjançant el paràmetre <code>database</code>.És possible proporcionar un paràmetre de registre opcional <code>options</code> per especificar més propietats. El registre pot contenir els camps següents:<ul>    <li><code>ConnectionTimeout</code>: durada que controla el període que cal esperar abans de cancel·lar un intent d'establir la connexió amb el servidor. El valor per defecte depèn del controlador.</li>    <li><code>CommandTimeout </code>: durada que controla el període en què es permet executar la consulta del servidor abans de cancel·lar-la. El valor per defecte depèn del controlador.</li></ul>


## Examples

### Example #1 
Permet llistar les taules del Vertica.
```powerquery

```



