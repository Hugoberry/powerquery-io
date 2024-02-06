---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Gibt die Schemasammlung für eine ADO.NET-Datenquelle zurück.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Gibt die Schemasammlung für den ADO.NET-Datenquelle mit dem Anbieternamen "<code>providerName</code>" und der Verbindungszeichenfolge "<code>connectionString</code>" zurück. "<code>connectionString</code>" kann Text oder ein Datensatz mit Eigenschaft/Wert-Paaren sein. Eigenschaftswerte können entweder Text oder Zahlen enthalten. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li><li><code>SqlCompatibleWindowsAuth</code> : Ein logischer Wert (TRUE/FALSE), der angibt, ob SQL Server-kompatible Verbindungszeichenfolgenoptionen f&#252;r die Windows-Authentifizierung bereitgestellt werden sollen. Der Standardwert lautet TRUE.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
