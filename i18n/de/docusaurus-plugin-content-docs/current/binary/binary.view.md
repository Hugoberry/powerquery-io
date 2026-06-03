---
title: Binary.View
---

# Binary.View


Erstellt oder erweitert eine Binärdatei mit benutzerdefinierten Handlern für Abfrage- und Aktionsvorgänge.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Gibt eine Ansicht von `binary` zurück. Dabei werden die in `handlers` angegebenen Funktionen anstelle des Standardverhaltens eines Vorgangs verwendet, wenn der Vorgang auf die Ansicht angewendet wird.

Wenn `binary` angegeben ist, sind alle Handlerfunktionen optional. Wenn `binary` nicht angegeben ist, ist die `GetStream`\-Handlerfunktion erforderlich. Wenn eine Handlerfunktion für einen Vorgang nicht angegeben wird, wird stattdessen das Standardverhalten des Vorgangs auf `binary` angewendet (mit Ausnahme von `GetExpression`).

Handlerfunktionen müssen einen Wert zurückgeben, der semantisch dem Ergebnis der Anwendung des Vorgangs auf `binary` (oder im Fall von `GetExpression` der sich ergebenden Ansicht) entspricht.

Wenn eine Handlerfunktion einen Fehler auslöst, wird das Standardverhalten des Vorgangs auf die Ansicht angewendet.

`Binary.View` kann zum Implementieren der Faltung zu einer Datenquelle angewendet werden – die Übersetzung von M-Abfragen in quellspezifische Vorgänge (z. B. zum Herunterladen eines Abschnitts einer Datei).

Eine umfassendere Beschreibung von `Binary.View` finden Sie in der veröffentlichten Dokumentation des benutzerdefinierter Power Query-Connectors.


## Examples

### Example #1
Erstellen Sie eine Basisansicht, für die kein Zugriff auf die Daten erforderlich ist, um die Länge zu bestimmen.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
