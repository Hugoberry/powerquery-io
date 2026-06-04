---
title: MySQL.Database
---

# MySQL.Database


Retorna una taula de taules, visualitzacions i funcions escalars emmagatzemades SQL disponibles en una base de dades MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula de visualitzacions, taules i funcions escalars SQL emmagatzemades disponibles en una base de dades MySQL del servidor `server`, a la instància de base dades anomenada `database`. El port es pot especificar opcionalment amb el servidor, separat per dos punts. Es pot especificar un paràmetre de registre opcional, `options`, per controlar les opcions següents:

-   `Encoding` : Valor de TextEncoding que especifica el conjunt de caràcters que s'ha fet servir per codificar totes les consultes enviades al servidor (el valor per defecte és "null").
-   `CreateNavigationProperties` : Disjunció lògica ("true" o "false") que estableix si cal generar propietats de navegació als valors retornats. El valor per defecte és "true".
-   `NavigationPropertyNameGenerator` : Funció que s'utilitza per crear noms de propietats de navegació.
-   `Query` : Consulta SQL nativa que s'utilitza per recuperar dades. Si produeix diversos conjunts de resultats, només se'n retornarà el primer.
-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte és de deu minuts.
-   `ConnectionTimeout` : Duració que controla el temps que cal esperar abans de cancel·lar un intent per establir una connexió amb el servidor. El valor per defecte depèn del controlador.
-   `TreatTinyAsBoolean` : Disjunció lògica ("true" o "false") que determina si cal forçar les columnes "tinyint" al servidor com a valors lògics. El valor per defecte és "true".
-   `OldGuids` : Disjunció lògica ("true" o "false") que estableix si cal tractar les columnes char(36) ("si és "false") o binary(16) (si és "true") com a GUID. El valor per defecte és "false".
-   `ReturnSingleDatabase` : Disjunció lògica ("true" o "false") que estableix si cal retornar totes les taules de totes les bases de dades (si és "false") o bé si s'han de retornar les taules i les visualitzacions de la base de dades especificada (si és "true"). El valor per defecte és "false".
-   `HierarchicalNavigation` : Disjunció lògica ("true" o "false") que estableix si cal visualitzar les taules agrupades pel nom d'esquema. El valor per defecte és "false".

El paràmetre de registre s'especifica com a \[opció1 = valor1, opció2 = valor2...\] o bé \[Consulta = "selecciona ..."\], per exemple.



## Category
Accessing data
