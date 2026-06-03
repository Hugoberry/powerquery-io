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

Gibt das Ergebnis der Ausführung von "`query`" mit der Verbindungszeichenfolge "`connectionString`" unter Verwendung des ADO.NET-Anbieters "`providerName`" zurück. Bei "`connectionString`" kann es sich um Text oder Eigenschaft/Wert-Paaren sein. Eigenschaftswerte können entweder Text oder Zahlen enthalten. Ein optionaler Datensatzparameter "`options`" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:

-   `CommandTimeout` : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert beträgt zehn Minuten.
-   `SqlCompatibleWindowsAuth` : Ein logischer Wert (TRUE/FALSE), der angibt, ob SQL Server-kompatible Verbindungszeichenfolgenoptionen für die Windows-Authentifizierung bereitgestellt werden sollen. Der Standardwert lautet TRUE.



## Category
Accessing data
