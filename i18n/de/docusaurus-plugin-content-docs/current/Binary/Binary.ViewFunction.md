---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Erstellt eine Funktion, die von einem Handler abgefangen werden kann, der (über Binary.View) in einer Ansicht definiert wurde.


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Erstellt eine auf <code>function</code> basierende Ansichtsfunktion, die in einer von <code>Binary.View</code> erstellten Ansicht verarbeitet werden kann.<br />Der <code>OnInvoke</code>-Handler von <code>Binary.View</code> kann zum Definieren eines Handlers für die Ansichtsfunktion verwendet werden.<br />Ebenso wie bei den Handlern für integrierte Vorgänge wird <code>function</code> zusätzlich zur Ansicht angewendet, wenn kein <code>OnInvoke</code>-Handler angegeben wurde oder wenn dieser die Ansichtsfunktion nicht verarbeitet oder einen Fehler ausgibt.<br />Eine umfassendere Beschreibung von <code>Binary.View</code> und benutzerdefinierten Ansichtsfunktionen finden Sie in der veröffentlichten Dokumentation des benutzerdefinierter Power Query-Connectors.<br />



## Category
Binary
