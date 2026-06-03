---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Hiermee wordt een functie gemaakt die kan worden onderschept door een handler die is gedefinieerd in een weergave (via Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Hiermee wordt een functie op basis van `function` gemaakt die kan worden verwerkt in een weergave die is gemaakt met `Binary.View`.

De handler `OnInvoke` van `Binary.View` kan worden gebruikt om een handler voor de weergavefunctie te definiëren.

Net als bij handlers voor ingebouwde bewerkingen, wordt `function` boven op de weergave toegepast als de handler `OnInvoke` niet is opgegeven, als deze de weergavefunctie niet verwerkt of als een fout wordt geactiveerd door de handler.

Raadpleeg de gepubliceerde documentatie over de aangepaste connector van Power Query voor een completere beschrijving van `Binary.View` en aangepaste weergavefuncties.



## Category
Binary
