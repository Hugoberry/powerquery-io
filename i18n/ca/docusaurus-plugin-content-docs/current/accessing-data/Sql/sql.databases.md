---
title: Sql.Databases
---

# Sql.Databases


Retorna una taula de bases de dades en un SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula de bases de dades al servidor SQL especificat (`server`). Es pot especificar un paràmetre de registre opcional, `options`, per controlar les opcions següents:

-   `CreateNavigationProperties` : Disjunció lògica ("true" o "false") que estableix si cal generar propietats de navegació als valors retornats. El valor per defecte és "true".
-   `NavigationPropertyNameGenerator` : Funció que s'utilitza per crear noms de propietats de navegació.
-   `MaxDegreeOfParallelism` : Número que estableix el valor de la clàusula de consulta "maxdop" a la consulta de l'SQL que s'ha generat.
-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte és de deu minuts.
-   `ConnectionTimeout` : Duració que controla el temps que cal esperar abans de cancel·lar un intent per establir una connexió amb el servidor. El valor per defecte depèn del controlador.
-   `HierarchicalNavigation` : Disjunció lògica ("true" o "false") que estableix si cal visualitzar les taules agrupades pel nom d'esquema. El valor per defecte és "false".
-   `MultiSubnetFailover` : Disjunció lògica ("true" o "false") que estableix el valor de la propietat "MultiSubnetFailover" a la cadena de connexió. El valor per defecte és "false".
-   `UnsafeTypeConversions` : Element lògic ("true" o "false") que, si és "true", intenta plegar les conversions de tipus que pot ser que produeixin un error i que impedeixin que es realitzi tota la consulta. No es recomana per a l'ús general.
-   `ContextInfo` : Valor binari que s'utilitza per definir l'element CONTEXT\_INFO abans d'executar cada ordre.
-   `OmitSRID` : Element lògic ("true" o "false") que, si és "true", omet el SRID quan es produeix una entrada de Well-Known Text de la geometria i els tipus de geografia.
-   `EnableCrossDatabaseFolding` : Un valor lògic (true/false) que, si és true, permet fer plegament de consultes entre bases de dades al mateix servidor. El valor per defecte és false.

El paràmetre de registre s'especifica amb el format \[opció1 = valor1, opció2 = valor2...\], per exemple.  
  
No admet la configuració d'una consulta SQL que s'executarà al servidor. `Sql.Database` s'ha d'utilitzar per executar una consulta SQL.



## Category
Accessing data
