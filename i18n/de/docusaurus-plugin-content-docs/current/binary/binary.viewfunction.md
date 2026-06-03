---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Erstellt eine Funktion, die von einem Handler abgefangen werden kann, der (über Binary.View) in einer Ansicht definiert wurde.


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Erstellt eine auf `function` basierende Ansichtsfunktion, die in einer von `Binary.View` erstellten Ansicht verarbeitet werden kann.

Der `OnInvoke`\-Handler von `Binary.View` kann zum Definieren eines Handlers für die Ansichtsfunktion verwendet werden.

Ebenso wie bei den Handlern für integrierte Vorgänge wird `function` zusätzlich zur Ansicht angewendet, wenn kein `OnInvoke`\-Handler angegeben wurde oder wenn dieser die Ansichtsfunktion nicht verarbeitet oder einen Fehler ausgibt.

Eine umfassendere Beschreibung von `Binary.View` und benutzerdefinierten Ansichtsfunktionen finden Sie in der veröffentlichten Dokumentation des benutzerdefinierter Power Query-Connectors.



## Category
Binary
