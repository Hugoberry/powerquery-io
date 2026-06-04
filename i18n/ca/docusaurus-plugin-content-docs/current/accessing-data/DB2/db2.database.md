---
title: DB2.Database
---

# DB2.Database


Retorna una taula de taules i visualitzacions SQL disponibles en una base de dades DB2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula de taules i visualitzacions de l'SQL disponibles en una base de dades DB2 del servidor `server`, a la instància de base de dades anomenada `database`. El port es pot especificar opcionalment amb el servidor, separat per dos punts. Es pot especificar un paràmetre de registre opcional, `options`, per controlar les opcions següents:

-   `CreateNavigationProperties` : Disjunció lògica ("true" o "false") que estableix si cal generar propietats de navegació als valors retornats. El valor per defecte és "true".
-   `NavigationPropertyNameGenerator` : Funció que s'utilitza per crear noms de propietats de navegació.
-   `Query` : Consulta SQL nativa que s'utilitza per recuperar dades. Si produeix diversos conjunts de resultats, només se'n retornarà el primer.
-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte és de deu minuts.
-   `ConnectionTimeout` : Duració que controla el temps que cal esperar abans de cancel·lar un intent per establir una connexió amb el servidor. El valor per defecte depèn del controlador.
-   `HierarchicalNavigation` : Disjunció lògica ("true" o "false") que estableix si cal visualitzar les taules agrupades pel nom d'esquema. El valor per defecte és "false".
-   `Implementation` : Especifica la implementació de la base de dades interna del proveïdor que s'ha d'utilitzar. Els valors vàlids són "IBM" i "Microsoft".
-   `BinaryCodePage` : Número del CCSID (identificador del joc de caràcters codificats) per descodificar les dades binàries de DB2 FOR BIT en cadenes de caràcters. S'aplica a Implementation = "Microsoft". Definiu el valor en 0 per inhabilitar la conversió (valor per defecte) o 1 per fer-la d'acord amb la codificació de la base de dades. També podeu fer servir qualsevol altre número de CCSID per fer la conversió segons la codificació de l'aplicació.
-   `PackageCollection` : Especifica un valor de cadena per a la col·lecció de paquets (el valor per defecte és "NULLID") per habilitar l'ús de paquets compartits i necessaris per processar instruccions SQL. S'aplica a Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Permet especificar si la connexió s'està realitzant a través d'una passarel·la del DB2 Connect. S'aplica a la implementació "Microsoft".

El paràmetre de registre s'especifica com a \[opció1 = valor1, opció2 = valor2...\] o bé \[Consulta = "selecciona ..."\], per exemple.



## Category
Accessing data
