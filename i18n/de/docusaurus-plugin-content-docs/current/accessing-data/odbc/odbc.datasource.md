---
title: Odbc.DataSource
---

# Odbc.DataSource


Gibt eine Tabelle mit SQL-Tabellen und Ansichten aus der ODBC-Datenquelle zurück.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle mit SQL-Tabellen und -Sichten aus der ODBC-Datenquelle zurück, die durch die Verbindungszeichenfolge "`connectionString`" angegeben wird. "`connectionString`" kann Text oder ein Datensatz mit Eigenschaft/Wert-Paaren sein. Eigenschaftswerte können entweder Text oder Zahlen enthalten. Ein optionaler Datensatzparameter "`options`" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:

-   `CreateNavigationProperties` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob für die zurückgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).
-   `HierarchicalNavigation` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).
-   `ConnectionTimeout` : Ein Zeitraum, der steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist 15 Sekunden.
-   `CommandTimeout` : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert beträgt zehn Minuten.
-   `SqlCompatibleWindowsAuth` : Ein logischer Wert (TRUE/FALSE), der angibt, ob SQL Server-kompatible Verbindungszeichenfolgenoptionen für die Windows-Authentifizierung bereitgestellt werden sollen. Der Standardwert lautet TRUE.


## Examples

### Example #1
Gibt die SQL-Tabellen und -Ansichten aus der angegebenen Verbindungszeichenfolge zurück.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
