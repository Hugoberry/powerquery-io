---
title: Binary.View
---

# Binary.View


## Description

Erstellt oder erweitert eine Binärdatei mit benutzerdefinierten Handlern für Abfrage- und Aktionsvorgänge.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Gibt eine Ansicht von <code>binary</code> zurück. Dabei werden die in <code>handlers</code> angegebenen Funktionen anstelle des Standardverhaltens eines Vorgangs verwendet, wenn der Vorgang auf die Ansicht angewendet wird.<br />Wenn <code>binary</code> angegeben ist, sind alle Handlerfunktionen optional. Wenn <code>binary</code> nicht angegeben ist, ist die <code>GetStream</code>-Handlerfunktion erforderlich. Wenn eine Handlerfunktion für einen Vorgang nicht angegeben wird, wird stattdessen das Standardverhalten des Vorgangs auf <code>binary</code> angewendet (mit Ausnahme von <code>GetExpression</code>).<br />Handlerfunktionen müssen einen Wert zurückgeben, der semantisch dem Ergebnis der Anwendung des Vorgangs auf <code>binary</code> (oder im Fall von <code>GetExpression</code> der sich ergebenden Ansicht) entspricht.<br />Wenn eine Handlerfunktion einen Fehler auslöst, wird das Standardverhalten des Vorgangs auf die Ansicht angewendet.<br /><code>Binary.View</code> kann zum Implementieren der Faltung zu einer Datenquelle angewendet werden – die Übersetzung von M-Abfragen in quellspezifische Vorgänge (z. B. zum Herunterladen eines Abschnitts einer Datei).<br />Eine umfassendere Beschreibung von <code>Binary.View</code> finden Sie in der veröffentlichten Dokumentation des benutzerdefinierter Power Query-Connectors.<br />


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
