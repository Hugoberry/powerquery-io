---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Retorna la col·lecció d'esquemes per a un origen de dades ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Retorna la col·lecció d'esquemes per a l'origen de dades ADO.NET amb el nom de proveïdor `providerName` i la cadena de connexió `connectionString`. `connectionString` pot ser text o un registre de parells de valors de propietat. Els valors de propietat poden ser text o un número. Es pot especificar un paràmetre de registre opcional, `options`, per especificar propietats addicionals. El registre pot contenir els camps següents:

-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte és de deu minuts.
-   `SqlCompatibleWindowsAuth` : Un operador lògic ("true" o "false") que determina si s'han de produir opcions de cadenes de connexió compatibles amb l'SQL Server per a l'autenticació del Windows. El valor predeterminat és "true".
-   `TypeMap`



## Category
Accessing data
