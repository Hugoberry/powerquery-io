---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Crea una funció que un gestor definit en una visualització (amb Binary.View) pot interceptar.


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Crea una funció de visualització basada en <code>function</code> que es pot gestionar en una visualització creada per <code>Binary.View</code>.<br />El gestor <code>OnInvoke</code> de <code>Binary.View</code> es pot utilitzar per definir un gestor per a la funció de visualització.<br />De la mateixa manera que els gestors per a operacions integrades, <code>function</code> s'aplica a la part superior de la visualització si no s'especifica cap gestor <code>OnInvoke</code>, si no gestiona la funció de visualització o bé si el gestor mostra un error.<br />Consulteu la documentació publicada del connector personalitzat del Power Query per veure una descripció més completa de <code>Binary.View</code> i de les funcions de visualització personalitzades.<br />



## Category
Binary
