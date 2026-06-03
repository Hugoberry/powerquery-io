---
title: OleDb.DataSource
---

# OleDb.DataSource


Gibt eine Tabelle mit SQL-Tabellen und -Sichten aus der OLE DB-Datenquelle zurück.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle mit SQL-Tabellen und -Sichten aus der OLE DB-Datenquelle zurück, die von der Verbindungszeichenfolge `connectionString`angegeben wird. `connectionString` kann Text oder ein Datensatz von Eigenschaftswertpaaren sein. Eigenschaftswerte können entweder Text oder Zahlen sein. Ein optionaler Datensatzparameter, `options`, kann zur Angabe zusätzlicher Eigenschaften angegeben werden. Der Datensatz kann die folgenden Felder enthalten:

-   `CreateNavigationProperties` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob für die zurückgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).
-   `NavigationPropertyNameGenerator` : Eine Funktion, die zur Erstellung von Namen für Navigationseigenschaften verwendet wird.
-   `Query` : Eine native SQL-Abfrage, die zum Abrufen von Daten verwendet wird. Wenn die Abfrage mehrere Resultsets erzeugt, wird nur das erste zurückgegeben.
-   `HierarchicalNavigation` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden sollen (Standardwert: TRUE).
-   `ConnectionTimeout` : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabhängig.
-   `CommandTimeout` : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert beträgt zehn Minuten.
-   `SqlCompatibleWindowsAuth` : Ein logischer Wert (TRUE/FALSE), der angibt, ob SQL Server-kompatible Verbindungszeichenfolgenoptionen für die Windows-Authentifizierung bereitgestellt werden sollen. Der Standardwert lautet TRUE.

Der Datensatzparameter wird beispielsweise als \[option1 = value1, option2 = value2...\] oder \[Query = "select ..."\] angegeben.



## Category
Accessing data
