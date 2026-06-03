---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Hiermit werden Daten aus HDInsight Interactive Query importiert.


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Liste mit Tabellen aus HDInsight Interactive Query aus der Datenbank `database` auf dem HDInsight Interactive Query-Server `server` zurück. Der Port kann (getrennt durch einen Doppelpunkt) optional mit dem Server angegeben werden. Der optionale Parameter `options` kann angegeben werden, um die folgenden Optionen zu steuern:

-   `ConnectionTimeout`: Eine Zeitspanne, die steuert, wie lange ein Versuch zur Verbindungsherstellung mit dem Server dauern darf, bevor er abgebrochen wird. Der Standardwert ist vom Treiber abhängig.
-   `CommandTimeout`: Eine Zeitspanne, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert ist vom Treiber abhängig.

Der Parameter `options` wird als \[option1 = value1, option2 = value2...\] angegeben.


