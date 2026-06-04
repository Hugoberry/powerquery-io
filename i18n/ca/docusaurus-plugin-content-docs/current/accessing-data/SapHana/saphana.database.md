---
title: SapHana.Database
---

# SapHana.Database


Retorna els paquets en una base de dades SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula de paquets multidimensionals de la base de dades SAP HANA `server`. Es pot especificar un paràmetre de registre opcional, `options`, per controlar les opcions següents:

-   `Query` : Consulta SQL nativa que s'utilitza per recuperar dades. Si produeix diversos conjunts de resultats, només se'n retornarà el primer.
-   `Distribution` : Element SapHanaDistribution que defineix el valor de la propietat "Distribution" a la cadena de connexió. L'encaminament d'instruccions és el mètode d'avaluació del node de servidor correcte d'un sistema distribuït abans de l'execució de la instrucció. El valor per defecte és SapHanaDistribution.All.
-   `Implementation` : Permet especificar la implementació del connector SAP HANA que es farà servir.
-   `EnableColumnBinding` : Enllaçar variables a les columnes d'un conjunt de resultats SAP Hana a l'hora d'obtenir dades pot millorar el rendiment potencialment a cost d'un ús de la memòria una mica més alt. El valor per defecte és fals.
-   `ConnectionTimeout` : Duració que controla el temps que cal esperar abans de cancel·lar un intent per establir una connexió amb el servidor. El valor per defecte és de 15 segons.
-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte és de deu minuts.



## Category
Accessing data
