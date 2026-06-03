---
title: Table.ViewFunction
---

# Table.ViewFunction


Erstellt eine Funktion, die von einem Handler abgefangen werden kann, der (über Table.View) in einer Ansicht definiert wurde.


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Erstellt eine auf `function` basierende Ansichtsfunktion, die in einer von `Table.View` erstellten Ansicht verarbeitet werden kann.

Der `OnInvoke`\-Handler von `Table.View` kann zum Definieren eines Handlers für die Ansichtsfunktion verwendet werden.

Ebenso wie bei den Handlern für integrierte Vorgänge wird `function` zusätzlich zur Ansicht angewendet, wenn kein `OnInvoke`\-Handler angegeben wurde oder wenn dieser die Ansichtsfunktion nicht verarbeitet oder einen Fehler ausgibt.

Eine umfassendere Beschreibung von `Table.View` und benutzerdefinierten Ansichtsfunktionen finden Sie in der veröffentlichten Dokumentation für benutzerdefinierte Power Query-Connectors.



## Category
Table.Table construction
