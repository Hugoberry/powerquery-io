---
title: Odbc.DataSource
---

# Odbc.DataSource


Retorna una taula de vistes i taules SQL de l'origen de dades ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Retorna una taula de vistes i taules SQL de l'origen de dades ODBC que especifica la cadena de connexió `connectionString`. `connectionString` pot ser un text o un registre de parells de valors de propietat. Els valors de propietat poden ser un text o un número. Es pot proporcionar un paràmetre de registre opcional, `options`, per especificar les propietats addicionals. El registre pot contenir els camps següents:

-   `CreateNavigationProperties` : Disjunció lògica ("true" o "false") que estableix si cal generar propietats de navegació als valors retornats. El valor per defecte és "true".
-   `HierarchicalNavigation` : Disjunció lògica ("true" o "false") que estableix si cal visualitzar les taules agrupades pel nom d'esquema. El valor per defecte és "false".
-   `ConnectionTimeout` : Duració que controla el temps que cal esperar abans de cancel·lar un intent per establir una connexió amb el servidor. El valor per defecte és de 15 segons.
-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte és de deu minuts.
-   `SqlCompatibleWindowsAuth` : Un operador lògic ("true" o "false") que determina si s'han de produir opcions de cadenes de connexió compatibles amb l'SQL Server per a l'autenticació del Windows. El valor predeterminat és "true".


## Examples

### Example #1
Retorna les taules i visualitzacions d'SQL de la cadena de connexió proporcionada.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
