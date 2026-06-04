---
title: Table.ViewFunction
---

# Table.ViewFunction


Crea una funció que un gestor definit en una visualització (amb Table.View) pot interceptar.


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Crea una funció de visualització basada en `function` que es pot gestionar en una visualització creada per `Table.View`.

El gestor `OnInvoke` de `Table.View` es pot utilitzar per definir un gestor per a la funció de visualització.

De la mateixa manera que els gestors per a operacions integrades, `function` s'aplica a la part superior de la visualització si no s'especifica cap gestor `OnInvoke`, si no gestiona la funció de visualització o bé si el gestor mostra un error.

Consulteu la documentació publicada del connector personalitzat del Power Query per veure una descripció més completa de `Table.View` i de les funcions de visualització personalitzades.



## Category
Table.Table construction
