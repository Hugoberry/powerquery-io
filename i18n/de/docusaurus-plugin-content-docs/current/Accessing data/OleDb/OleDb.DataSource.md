---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Gibt eine Tabelle mit SQL-Tabellen und -Sichten aus der OLE DB-Datenquelle zurück.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Gibt eine Tabelle mit SQL-Tabellen und -Sichten aus der OLE DB-Datenquelle zurück, die durch die Verbindungszeichenfolge "<code>connectionString</code>" angegeben wird. "<code>connectionString</code>" kann Text oder ein Datensatz mit Eigenschaft/Wert-Paaren sein. Eigenschaftswerte können entweder Text oder Zahlen sein. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>CreateNavigationProperties</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob f&#252;r die zur&#252;ckgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).</li><li><code>NavigationPropertyNameGenerator</code> : Eine Funktion, die zur Erstellung von Namen f&#252;r Navigationseigenschaften verwendet wird.</li><li><code>Query</code> : Eine native SQL-Abfrage, die zum Abrufen von Daten verwendet wird. Wenn die Abfrage mehrere Resultsets erzeugt, wird nur das erste zur&#252;ckgegeben.</li><li><code>HierarchicalNavigation</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden sollen (Standardwert: TRUE).</li><li><code>ConnectionTimeout</code> : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabh&#228;ngig.</li><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li><li><code>SqlCompatibleWindowsAuth</code> : Ein logischer Wert (TRUE/FALSE), der angibt, ob SQL Server-kompatible Verbindungszeichenfolgenoptionen f&#252;r die Windows-Authentifizierung bereitgestellt werden sollen. Der Standardwert lautet TRUE.</li></ul>    Der Datensatzparameter wird beispielsweise als [option1 = value1, option2 = value2...] oder als [Query = "select ..."] angegeben.



## Category
Accessing data
