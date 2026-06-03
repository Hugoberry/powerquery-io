---
title: MySQL.Database
---

# MySQL.Database


Gibt eine Tabelle der SQL-Tabellen, Ansichten und gespeicherten Skalarfunktionen zurück, die in einer MySQL-Datenbank verfügbar sind.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle der SQL-Tabellen, -Sichten und gespeicherten Skalarfunktionen zurück, die in einer MySQL-Datenbank auf dem Server „`server`“ in der Datenbankinstanz mit dem Namen „`database`“ verfügbar sind. Der Port kann optional mit dem Server (getrennt durch einen Doppelpunkt) angegeben werden. Der optionale Datensatzparameter „`options`“ kann angegeben werden, um die folgenden Optionen zu steuern:

-   `Encoding` : Ein TextEncoding-Wert, der den Zeichensatz zum Codieren aller an den Server gesendeten Abfragen angibt (der Standardwert ist NULL).
-   `CreateNavigationProperties` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob für die zurückgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).
-   `NavigationPropertyNameGenerator` : Eine Funktion, die zur Erstellung von Namen für Navigationseigenschaften verwendet wird.
-   `Query` : Eine native SQL-Abfrage, die zum Abrufen von Daten verwendet wird. Wenn die Abfrage mehrere Resultsets erzeugt, wird nur das erste zurückgegeben.
-   `CommandTimeout` : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert beträgt zehn Minuten.
-   `ConnectionTimeout` : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabhängig.
-   `TreatTinyAsBoolean` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob tinyint-Spalten auf dem Server als logische Werte erzwungen werden. Der Standardwert lautet TRUE.
-   `OldGuids` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob char(36)-Spalten (bei FALSE) oder binary(16)-Spalten (bei TRUE) als GUIDs behandelt werden. Der Standardwert lautet FALSE.
-   `ReturnSingleDatabase` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob alle Tabellen aus sämtlichen Datenbanken (bei FALSE) oder Tabellen und Sichten der angegebenen Datenbank (bei TRUE) zurückgegeben werden. Der Standardwert lautet FALSE.
-   `HierarchicalNavigation` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).

Der Datensatzparameter wird beispielsweise als \[option1 = value1, option2 = value2...\] oder \[Query = "select ..."\] angegeben.



## Category
Accessing data
