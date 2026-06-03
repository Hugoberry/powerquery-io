---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Skapar en funktion som kan fångas upp av en hanterare som har definierats i en vy (via Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Skapar en visningsfunktion utifrån `function`som kan hanteras i en vy som har skapats av `Binary.View`.

Du kan använda `OnInvoke`\-hanteraren av `Binary.View` för att definiera en hanterare för visningsfunktionen.

Som fallet är med hanterarna för de inbyggda åtgärderna, så används `function` över vyn om ingen `OnInvoke`\-hanterare har angetts, om den inte hanterar visningsfunktionen eller om ett fel har utlösts av hanteraren.

Mer information finns under den publicerade Power Query anpassade anslutningsdokumentationen för en mer fullständig beskrivning av `Binary.View` och custom view functions.



## Category
Binary
