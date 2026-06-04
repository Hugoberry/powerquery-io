---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Crea una funció que un gestor definit en una visualització (amb Binary.View) pot interceptar.


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Crea una funció de visualització basada en `function` que es pot gestionar en una visualització creada per `Binary.View`.

El gestor `OnInvoke` de `Binary.View` es pot utilitzar per definir un gestor per a la funció de visualització.

De la mateixa manera que els gestors per a operacions integrades, `function` s'aplica a la part superior de la visualització si no s'especifica cap gestor `OnInvoke`, si no gestiona la funció de visualització o bé si el gestor mostra un error.

Consulteu la documentació publicada del connector personalitzat del Power Query per veure una descripció més completa de `Binary.View` i de les funcions de visualització personalitzades.



## Category
Binary
