---
title: Odbc.Query
---

# Odbc.Query


## Description

Gibt das Ergebnis der Ausführung einer systemeigenen Abfrage für eine ODBC-Datenquelle zurück.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Gibt das Ergebnis der Ausführung von "<code>query</code>" mit der Verbindungszeichenfolge "<code>connectionString</code>" unter Verwendung von ODBC zurück. "<code>connectionString</code>" kann Text oder ein Datensatz mit Eigenschaft/Wert-Paaren sein. Eigenschaftswerte können entweder Text oder Zahlen enthalten. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>ConnectionTimeout</code> : Ein Zeitraum, der steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist 15 Sekunden.</li><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li><li><code>SqlCompatibleWindowsAuth</code> : Ein logischer Wert (TRUE/FALSE), der angibt, ob SQL Server-kompatible Verbindungszeichenfolgenoptionen f&#252;r die Windows-Authentifizierung bereitgestellt werden sollen. Der Standardwert lautet TRUE.</li></ul>


## Examples

### Example #1 
Gibt das Ergebnis einer einfachen Abfrage für die angegebene Verbindungszeichenfolge zurück.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
