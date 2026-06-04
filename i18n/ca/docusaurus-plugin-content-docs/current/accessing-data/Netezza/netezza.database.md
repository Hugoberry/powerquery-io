---
title: Netezza.Database
---

# Netezza.Database


Permet importar dades d'una base de dades de l'IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula que conté les taules, les visualitzacions i les funcions emmagatzemades de Netezza a partir de la base de dades `database` del servidor de Netezza disponible a `server`. Opcionalment, el port es pot especificar amb el servidor separat per dos punts. També es pot especificar un paràmetre de registre opcional (`options`) per controlar les opcions següents:

-   `CreateNavigationProperties`: lògica ("true" o "false") que estableix si s'han de generar propietats de navegació als valors retornats (el valor per defecte és "true").
-   `HierarchicalNavigation`: lògica ("true" o "false") que estableix si s'han de consultar les taules agrupades segons el nom del seu esquema (el valor per defecte és "false").
-   `ConnectionTimeout`: duració que controla el temps que cal esperar abans de deixar d'intentar establir una connexió amb el servidor. El valor per defecte depèn del controlador.
-   `CommandTimeout`: duració que controla el temps durant el qual es pot executar la consulta de servidor abans que es cancel·li. El valor per defecte depèn del controlador.
-   `NormalizeDatabaseName`: lògica ("true" o "false") que estableix si cal normalitzar el nom de la base de dades en majúscules o interpretar-lo de manera literal (el valor per defecte és "true").

El paràmetre de registre s'especifica amb el format \[opció1 = valor1, opció2 = valor2...\].


## Examples

### Example #1
Enumera les taules d'un projecte de l'IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



