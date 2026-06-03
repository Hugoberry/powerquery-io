---
title: Sql.Databases
---

# Sql.Databases


Gibt eine Tabelle mit Datenbanken auf einem Server mit SQL Server zurück.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle mit Datenbanken auf dem angegebenen SQL-Server zurück: `server`. Der optionale Datensatzparameter „`options`“ kann angegeben werden, um die folgenden Optionen zu steuern:

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

Der Datensatzparameter wird beispielsweise als \[option1 = value1, option2 = value2...\] angegeben.  
  
Das Festlegen der Ausführung einer SQL-Abfrage auf dem Server wird nicht unterstützt. `Sql.Database` sollte stattdessen zum Ausführen einer SQL-Abfrage verwendet werden.



## Category
Accessing data
