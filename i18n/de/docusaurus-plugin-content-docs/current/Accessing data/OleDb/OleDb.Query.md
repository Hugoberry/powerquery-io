---
title: OleDb.Query
---

# OleDb.Query


## Description

Gibt das Ergebnis der Ausführung einer systemeigenen Abfrage für eine OLE DB-Datenquelle zurück.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Gibt das Ergebnis der Ausführung von "<code>query</code>" mit der Verbindungszeichenfolge "<code>connectionString</code>" unter Verwendung von OLE DB zurück. "<code>connectionString</code>" kann Text oder ein Datensatz mit Eigenschaft/Wert-Paaren sein. Eigenschaftswerte können entweder Text oder Zahlen enthalten. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>ConnectionTimeout</code> : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabh&#228;ngig.</li><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li><li><code>SqlCompatibleWindowsAuth</code> : Ein logischer Wert (TRUE/FALSE), der angibt, ob SQL Server-kompatible Verbindungszeichenfolgenoptionen f&#252;r die Windows-Authentifizierung bereitgestellt werden sollen. Der Standardwert lautet TRUE.</li></ul>



## Category
Accessing data
