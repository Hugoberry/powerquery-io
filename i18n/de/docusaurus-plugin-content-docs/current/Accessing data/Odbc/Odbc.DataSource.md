---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Gibt eine Tabelle mit SQL-Tabellen und Ansichten aus der ODBC-Datenquelle zurück.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Gibt eine Tabelle mit SQL-Tabellen und -Sichten aus der ODBC-Datenquelle zurück, die durch die Verbindungszeichenfolge "<code>connectionString</code>" angegeben wird. "<code>connectionString</code>" kann Text oder ein Datensatz mit Eigenschaft/Wert-Paaren sein. Eigenschaftswerte können entweder Text oder Zahlen enthalten. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>CreateNavigationProperties</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob f&#252;r die zur&#252;ckgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).</li><li><code>HierarchicalNavigation</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).</li><li><code>ConnectionTimeout</code> : Ein Zeitraum, der steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist 15 Sekunden.</li><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li><li><code>SqlCompatibleWindowsAuth</code> : Ein logischer Wert (TRUE/FALSE), der angibt, ob SQL Server-kompatible Verbindungszeichenfolgenoptionen f&#252;r die Windows-Authentifizierung bereitgestellt werden sollen. Der Standardwert lautet TRUE.</li></ul>


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
