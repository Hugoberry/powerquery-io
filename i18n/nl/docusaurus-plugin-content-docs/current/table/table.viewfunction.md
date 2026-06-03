---
title: Table.ViewFunction
---

# Table.ViewFunction


Hiermee wordt een functie gemaakt die kan worden onderschept door een handler die is gedefinieerd in een weergave (via Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Hiermee wordt een functie op basis van `function` gemaakt die kan worden verwerkt in een weergave die is gemaakt met `Table.View`.

De handler `OnInvoke` van `Table.View` kan worden gebruikt om een handler voor de weergavefunctie te definiëren.

Net als bij handlers voor ingebouwde bewerkingen, wordt `function` boven op de weergave toegepast als de handler `OnInvoke` niet is opgegeven, als deze de weergavefunctie niet verwerkt of als een fout wordt geactiveerd door de handler.

Raadpleeg de gepubliceerde documentatie over de aangepaste connector van Power Query voor een completere beschrijving van `Table.View` en aangepaste weergavefuncties.



## Category
Table.Table construction
