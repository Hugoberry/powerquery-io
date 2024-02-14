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

Hiermee wordt een functie op basis van <code>function</code> gemaakt die kan worden verwerkt in een weergave die is gemaakt met <code>Binary.View</code>.<br />De handler <code>OnInvoke</code> van <code>Binary.View</code> kan worden gebruikt om een handler voor de weergavefunctie te definiëren.<br />Net als bij handlers voor ingebouwde bewerkingen, wordt <code>function</code> boven op de weergave toegepast als de handler <code>OnInvoke</code> niet is opgegeven, als deze de weergavefunctie niet verwerkt of als een fout wordt geactiveerd door de handler.<br />Raadpleeg de gepubliceerde documentatie over de aangepaste connector van Power Query voor een completere beschrijving van <code>Binary.View</code> en aangepaste weergavefuncties.<br />



## Category
Binary
