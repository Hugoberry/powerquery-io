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

Gibt die Schemasammlung für den ADO.NET-Datenquelle mit dem Anbieternamen "`providerName`" und der Verbindungszeichenfolge "`connectionString`" zurück. "`connectionString`" kann Text oder ein Datensatz mit Eigenschaft/Wert-Paaren sein. Eigenschaftswerte können entweder Text oder Zahlen enthalten. Ein optionaler Datensatzparameter "`options`" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:

-   `CommandTimeout` : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert beträgt zehn Minuten.
-   `SqlCompatibleWindowsAuth` : Ein logischer Wert (TRUE/FALSE), der angibt, ob SQL Server-kompatible Verbindungszeichenfolgenoptionen für die Windows-Authentifizierung bereitgestellt werden sollen. Der Standardwert lautet TRUE.
-   `TypeMap`



## Category
Accessing data
