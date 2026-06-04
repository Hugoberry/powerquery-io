---
title: Informix.Database
---

# Informix.Database


Retorna una taula de les visualitzacions i les taules de SQL disponibles en una base de dades Informix.


## Syntax

```powerquery
Informix.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula de taules i visualitzacions de l'SQL disponibles en una base de dades Informix del servidor `server`, a la instància de base de dades anomenada `database`. El port es pot especificar opcionalment amb el servidor, separat per dos punts. Es pot especificar un paràmetre de registre opcional, `options`, per controlar les opcions següents:

-   `CreateNavigationProperties` : Disjunció lògica ("true" o "false") que estableix si cal generar propietats de navegació als valors retornats. El valor per defecte és "true".
-   `NavigationPropertyNameGenerator` : Funció que s'utilitza per crear noms de propietats de navegació.
-   `Query` : Consulta SQL nativa que s'utilitza per recuperar dades. Si produeix diversos conjunts de resultats, només se'n retornarà el primer.
-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte és de deu minuts.
-   `ConnectionTimeout` : Duració que controla el temps que cal esperar abans de cancel·lar un intent per establir una connexió amb el servidor. El valor per defecte depèn del controlador.
-   `HierarchicalNavigation` : Disjunció lògica ("true" o "false") que estableix si cal visualitzar les taules agrupades pel nom d'esquema. El valor per defecte és "false".

El paràmetre de registre s'especifica com a \[opció1 = valor1, opció2 = valor2...\] o bé \[Consulta = "selecciona ..."\], per exemple.



## Category
Accessing data
