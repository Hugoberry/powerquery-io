---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Hiermit werden Daten aus Hive LLAP importiert.


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Gibt eine Liste mit Tabellen aus Hive LLAP aus der Datenbank `database` auf dem Hive LLAP-Server `server` unter Verwendung des ausgewählten Protokolls `protocol` zurück. Der Port kann (getrennt durch einen Doppelpunkt) optional mit dem Server angegeben werden. Das Thrift-Transportprotokoll ist ein Aufzählungstyp mit den Werten "Standard" und "HTTP". Der optionale Parameter `options` kann angegeben werden, um die folgenden Optionen zu steuern:

-   `ConnectionTimeout`: Eine Zeitspanne, die steuert, wie lange ein Versuch zur Verbindungsherstellung mit dem Server dauern darf, bevor er abgebrochen wird. Der Standardwert ist vom Treiber abhängig.
-   `CommandTimeout`: Eine Zeitspanne, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert ist vom Treiber abhängig.

Der Parameter `options` wird als \[option1 = value1, option2 = value2...\] angegeben.


