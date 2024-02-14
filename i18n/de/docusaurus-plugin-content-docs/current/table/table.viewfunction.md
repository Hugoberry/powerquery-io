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

Erstellt eine auf <code>function</code> basierende Ansichtsfunktion, die in einer von <code>Table.View</code> erstellten Ansicht verarbeitet werden kann.<br />Der <code>OnInvoke</code>-Handler von <code>Table.View</code> kann zum Definieren eines Handlers für die Ansichtsfunktion verwendet werden.<br />Ebenso wie bei den Handlern für integrierte Vorgänge wird <code>function</code> zusätzlich zur Ansicht angewendet, wenn kein <code>OnInvoke</code>-Handler angegeben wurde oder wenn dieser die Ansichtsfunktion nicht verarbeitet oder einen Fehler ausgibt.<br />Eine umfassendere Beschreibung von <code>Table.View</code> und benutzerdefinierten Ansichtsfunktionen finden Sie in der veröffentlichten Dokumentation für benutzerdefinierte Power Query-Connectors.<br />



## Category
Table.Table construction
