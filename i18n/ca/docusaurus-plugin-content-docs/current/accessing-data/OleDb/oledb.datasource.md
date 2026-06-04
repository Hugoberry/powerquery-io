---
title: OleDb.DataSource
---

# OleDb.DataSource


Retorna una taula amb les visualitzacions i les taules SQL de l'origen de dades OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Retorna una taula de visualitzacions i taules SQL de la font de dades OLE DB que s'hagi especificat mitjançant la cadena de connexió `connectionString`. `connectionString` pot ser text o un registre de parells de valors de propietat. Els valors de propietat poden ser text o bé xifres. És possible proporcionar un paràmetre de registre opcional (`options`) per especificar propietats addicionals. El registre pot contenir els camps següents:

-   `CreateNavigationProperties` : Disjunció lògica ("true" o "false") que estableix si cal generar propietats de navegació als valors retornats. El valor per defecte és "true".
-   `NavigationPropertyNameGenerator` : Funció que s'utilitza per crear noms de propietats de navegació.
-   `Query` : Consulta SQL nativa que s'utilitza per recuperar dades. Si produeix diversos conjunts de resultats, només se'n retornarà el primer.
-   `HierarchicalNavigation` : Disjunció lògica ("true" o "false") que estableix si cal visualitzar les taules agrupades pel nom d'esquema. El valor per defecte és "true".
-   `ConnectionTimeout` : Duració que controla el temps que cal esperar abans de cancel·lar un intent per establir una connexió amb el servidor. El valor per defecte depèn del controlador.
-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte és de deu minuts.
-   `SqlCompatibleWindowsAuth` : Un operador lògic ("true" o "false") que determina si s'han de produir opcions de cadenes de connexió compatibles amb l'SQL Server per a l'autenticació del Windows. El valor predeterminat és "true".

El paràmetre de registre s'especifica com a \[opció1 = valor1, opció2 = valor2...\] o bé \[Consulta = "selecciona ..."\], per exemple.



## Category
Accessing data
