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

Opretter en visningsfunktion baseret på `function`, der kan håndteres i en visning, der er oprettet af `Table.View`.

Den > `OnInvoke` handler for `Table.View` kan bruges til at definere en handler for visningsfunktionen.

Ligesom med handlerne til indbyggede handlinger, hvis der ikke er angivet nogen `OnInvoke` handler, eller hvis den ikke håndterer visningsfunktionen, eller hvis der udløses en fejl af handleren, anvendes `function` i toppen af visningen.

Se den publicerede Power Query-dokumentation til brugerdefinerede connectors for en mere komplet beskrivelse af `Table.View` og brugerdefinerede visningsfunktioner.



## Category
Table.Table construction
