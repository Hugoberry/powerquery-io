---
title: Informix.Database
---

# Informix.Database


Gibt eine Tabelle der SQL-Tabellen und -Sichten zurück, die in einer Informix-Datenbank verfügbar sind.


## Syntax

```powerquery
Informix.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle der SQL-Tabellen und -Sichten zurück, die in einer Informix-Datenbank auf dem Server „`server`“ in der Datenbankinstanz mit dem Namen „`database`“ verfügbar sind. Der Port kann optional mit dem Server (getrennt durch einen Doppelpunkt) angegeben werden. Der optionale Datensatzparameter „`options`“ kann angegeben werden, um die folgenden Optionen zu steuern:

-   `CreateNavigationProperties` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob für die zurückgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).
-   `NavigationPropertyNameGenerator` : Eine Funktion, die zur Erstellung von Namen für Navigationseigenschaften verwendet wird.
-   `Query` : Eine native SQL-Abfrage, die zum Abrufen von Daten verwendet wird. Wenn die Abfrage mehrere Resultsets erzeugt, wird nur das erste zurückgegeben.
-   `CommandTimeout` : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert beträgt zehn Minuten.
-   `ConnectionTimeout` : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabhängig.
-   `HierarchicalNavigation` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).

Der Datensatzparameter wird beispielsweise als \[option1 = value1, option2 = value2...\] oder \[Query = "select ..."\] angegeben.



## Category
Accessing data
