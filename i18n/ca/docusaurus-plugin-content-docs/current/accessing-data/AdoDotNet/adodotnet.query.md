---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Retorna el resultat de l'execució d'una consulta nativa en un origen de dades ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Retorna el resultat d'executar `query` amb la cadena de connexió `connectionString` mitjançant el proveïdor ADO.NET `providerName`. `connectionString` pot ser un text o un registre de parells de valor de propietat. Els valors de propietat poden ser de text o numèrics. Es pot especificar un paràmetre de registre opcional, `options`, per especificar propietats addicionals. El registre pot contenir els camps següents:

-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte és de deu minuts.
-   `SqlCompatibleWindowsAuth` : Un operador lògic ("true" o "false") que determina si s'han de produir opcions de cadenes de connexió compatibles amb l'SQL Server per a l'autenticació del Windows. El valor predeterminat és "true".



## Category
Accessing data
