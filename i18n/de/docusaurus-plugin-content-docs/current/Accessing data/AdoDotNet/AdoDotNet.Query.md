---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Gibt das Ergebnis der Ausführung einer systemeigenen Abfrage für eine ADO.NET-Datenquelle zurück.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Gibt das Ergebnis der Ausführung von "<code>query</code>" mit der Verbindungszeichenfolge "<code>connectionString</code>" unter Verwendung des ADO.NET-Anbieters "<code>providerName</code>" zurück. Bei "<code>connectionString</code>" kann es sich um Text oder Eigenschaft/Wert-Paaren sein. Eigenschaftswerte können entweder Text oder Zahlen enthalten. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li><li><code>SqlCompatibleWindowsAuth</code> : Ein logischer Wert (TRUE/FALSE), der angibt, ob SQL Server-kompatible Verbindungszeichenfolgenoptionen f&#252;r die Windows-Authentifizierung bereitgestellt werden sollen. Der Standardwert lautet TRUE.</li></ul>



## Category
Accessing data
