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

Opretter en visningsfunktion baseret på `function`, der kan håndteres i en visning, der er oprettet af `Binary.View`.

Den `OnInvoke` handler for `Binary.View` kan bruges til at definere en handler for visningsfunktionen.

Ligesom med handlerne til indbyggede handlinger, hvis der ikke er angivet nogen `OnInvoke` handler, eller hvis den ikke håndterer visningsfunktionen, eller hvis der udløses en fejl af handleren, anvendes `function` i toppen af visningen.

Se den publicerede Power Query-dokumentation til brugerdefinerede connectors for en mere komplet beskrivelse af `Binary.View` og brugerdefinerede visningsfunktioner.



## Category
Binary
