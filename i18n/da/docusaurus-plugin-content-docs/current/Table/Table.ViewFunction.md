---
title: Table.ViewFunction
---

# Table.ViewFunction


Opretter en funktion, der kan opfanges af en handler, som er defineret på en visning (via Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Opretter en visningsfunktion baseret på <code>function</code>, der kan håndteres i en visning, der er oprettet af <code>Table.View</code>.<br />Den > <code>OnInvoke</code> handler for <code>Table.View</code> kan bruges til at definere en handler for visningsfunktionen.<br />Ligesom med handlerne til indbyggede handlinger, hvis der ikke er angivet nogen <code>OnInvoke</code> handler, eller hvis den ikke håndterer visningsfunktionen, eller hvis der udløses en fejl af handleren, anvendes <code>function</code> i toppen af visningen.<br />Se den publicerede Power Query-dokumentation til brugerdefinerede connectors for en mere komplet beskrivelse af <code>Table.View</code> og brugerdefinerede visningsfunktioner.<br />



## Category
Table.Table construction
