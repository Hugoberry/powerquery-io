---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Opretter en funktion, der kan opfanges af en handler, som er defineret på en visning (via Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Opretter en visningsfunktion baseret på <code>function</code>, der kan håndteres i en visning, der er oprettet af <code>Binary.View</code>.<br />Den <code>OnInvoke</code> handler for <code>Binary.View</code> kan bruges til at definere en handler for visningsfunktionen.<br />Ligesom med handlerne til indbyggede handlinger, hvis der ikke er angivet nogen <code>OnInvoke</code> handler, eller hvis den ikke håndterer visningsfunktionen, eller hvis der udløses en fejl af handleren, anvendes <code>function</code> i toppen af visningen.<br />Se den publicerede Power Query-dokumentation til brugerdefinerede connectors for en mere komplet beskrivelse af <code>Binary.View</code> og brugerdefinerede visningsfunktioner.<br />



## Category
Binary
