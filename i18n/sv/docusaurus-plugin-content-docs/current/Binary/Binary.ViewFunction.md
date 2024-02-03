---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Skapar en funktion som kan fångas upp av en hanterare som har definierats i en vy (via Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Skapar en visningsfunktion utifrån <code>function</code>som kan hanteras i en vy som har skapats av <code>Binary.View</code>.<br /> Du kan använda <code>OnInvoke</code>-hanteraren av <code>Binary.View</code> för att definiera en hanterare för visningsfunktionen.<br />Som fallet är med hanterarna för de inbyggda åtgärderna, så används <code>function</code> över vyn om ingen <code>OnInvoke</code>-hanterare har angetts, om den inte hanterar visningsfunktionen eller om ett fel har utlösts av hanteraren.<br />Mer information finns under den publicerade Power Query anpassade anslutningsdokumentationen för en mer fullständig beskrivning av <code>Binary.View</code> och custom view functions.<br />



## Category
Binary
