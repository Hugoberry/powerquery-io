---
title: Sql.Database
---

# Sql.Database


Gibt eine Tabelle mit SQL-Tabellen, Ansichten und gespeicherten Funktionen aus der SQL Server-Datenbank zurück.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle mit SQL-Tabellen, -Sichten und gespeicherten Funktionen aus der SQL Server-Datenbank „`database`“ auf dem Server „`server`“ zurück. Der Port kann optional mit dem Server (getrennt durch einen Doppelpunkt oder ein Komma) angegeben werden. Der optionale Datensatzparameter „`options`“ kann angegeben werden, um die folgenden Optionen zu steuern:

-   `Query` : Eine native SQL-Abfrage, die zum Abrufen von Daten verwendet wird. Wenn die Abfrage mehrere Resultsets erzeugt, wird nur das erste zurückgegeben.
-   `CreateNavigationProperties` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob für die zurückgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).
-   `NavigationPropertyNameGenerator` : Eine Funktion, die zur Erstellung von Namen für Navigationseigenschaften verwendet wird.
-   `MaxDegreeOfParallelism` : Eine Zahl, die den Wert der maxdop-Abfrageklausel in der generierten SQL-Abfrage festlegt.
-   `CommandTimeout` : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert beträgt zehn Minuten.
-   `ConnectionTimeout` : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabhängig.
-   `HierarchicalNavigation` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).
-   `MultiSubnetFailover` : Ein logischer Wert (TRUE/FALSE), der den Wert der Eigenschaft "MultiSubnetFailover" in der Verbindungszeichenfolge festlegt (Standardwert: FALSE).
-   `UnsafeTypeConversions` : Ein logischer Wert (TRUE/FALSE), der bei Festlegung auf TRUE versucht, Typkonvertierungen zu falten. Ein fehlerhafter Versuch kann dazu führen, dass die gesamte Abfrage nicht erfolgreich ausgeführt werden kann. Nicht für die allgemeine Verwendung empfohlen.
-   `ContextInfo` : Ein Binärwert, der verwendet wird, um vor dem Ausführen der einzelnen Befehle die CONTEXT\_INFO festzulegen.
-   `OmitSRID` : Ein logischer Wert (TRUE/FALSE), der bei Festlegung auf TRUE die SRID auslässt, wenn Well-Known Text aus Geometrie- und Geografietypen generiert wird.
-   `EnableCrossDatabaseFolding` : Ein logischer Wert (wahr/falsch), der bei WAHR das Query Folding von Datenbanken auf demselben Server zulässt. Der Standardwert ist FALSCH.

Der Datensatzparameter wird beispielsweise als \[option1 = value1, option2 = value2...\] oder \[Query = "select ..."\] angegeben.



## Category
Accessing data
