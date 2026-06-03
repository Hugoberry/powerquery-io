---
title: Table.ViewFunction
---

# Table.ViewFunction


Skapar en funktion som kan fångas upp av en hanterare som har definierats i en vy (via Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Skapar en visningsfunktion utifrån `function`som kan hanteras i en vy som har skapats av `Table.View`.

Du kan använda `OnInvoke`\-hanteraren av `Table.View` för att definiera en hanterare för visningsfunktionen.

Som fallet är med hanterarna för de inbyggda åtgärderna, så används `function` över vyn om ingen `OnInvoke`\-hanterare har angetts, om den inte hanterar visningsfunktionen eller om ett fel har utlösts av hanteraren.

Mer information finns under den publicerade Power Query anpassade anslutningsdokumentationen för en mer fullständig beskrivning av `Table.View` och custom view functions.



## Category
Table.Table construction
