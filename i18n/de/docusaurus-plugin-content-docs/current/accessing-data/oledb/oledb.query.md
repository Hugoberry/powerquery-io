---
title: OleDb.Query
---

# OleDb.Query


Gibt das Ergebnis der Ausführung einer systemeigenen Abfrage für eine OLE DB-Datenquelle zurück.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Gibt das Ergebnis der Ausführung von "`query`" mit der Verbindungszeichenfolge "`connectionString`" unter Verwendung von OLE DB zurück. "`connectionString`" kann Text oder ein Datensatz mit Eigenschaft/Wert-Paaren sein. Eigenschaftswerte können entweder Text oder Zahlen enthalten. Ein optionaler Datensatzparameter "`options`" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:

-   `ConnectionTimeout` : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabhängig.
-   `CommandTimeout` : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert beträgt zehn Minuten.
-   `SqlCompatibleWindowsAuth` : Ein logischer Wert (TRUE/FALSE), der angibt, ob SQL Server-kompatible Verbindungszeichenfolgenoptionen für die Windows-Authentifizierung bereitgestellt werden sollen. Der Standardwert lautet TRUE.



## Category
Accessing data
