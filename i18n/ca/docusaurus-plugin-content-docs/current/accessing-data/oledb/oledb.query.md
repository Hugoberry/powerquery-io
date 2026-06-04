---
title: OleDb.Query
---

# OleDb.Query


Retorna el resultat de l'execució d'una consulta nativa en un origen de dades OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Retorna el resultat d'executar `query` amb la cadena de connexió `connectionString` mitjançant l'OLE DB. `connectionString` pot ser un text o un registre de parells de valors de propietat. Els valors de propietat poden ser un text o un número. Es pot proporcionar un paràmetre de registre opcional, `options`, per especificar les propietats addicionals. El registre pot contenir els camps següents:

-   `ConnectionTimeout` : Duració que controla el temps que cal esperar abans de cancel·lar un intent per establir una connexió amb el servidor. El valor per defecte depèn del controlador.
-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte és de deu minuts.
-   `SqlCompatibleWindowsAuth` : Un operador lògic ("true" o "false") que determina si s'han de produir opcions de cadenes de connexió compatibles amb l'SQL Server per a l'autenticació del Windows. El valor predeterminat és "true".



## Category
Accessing data
