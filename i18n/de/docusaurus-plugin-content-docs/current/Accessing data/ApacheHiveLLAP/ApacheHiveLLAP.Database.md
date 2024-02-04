---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

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


## Details

Gibt eine Liste mit Tabellen aus Hive LLAP aus der Datenbank <code>database</code> auf dem Hive LLAP-Server <code>server</code> unter Verwendung des ausgewählten Protokolls <code>protocol</code> zurück. Der Port kann (getrennt durch einen Doppelpunkt) optional mit dem Server angegeben werden. Das Thrift-Transportprotokoll ist ein Aufzählungstyp mit den Werten "Standard" und "HTTP". Der optionale Parameter <code>options</code> kann angegeben werden, um die folgenden Optionen zu steuern:<ul>        <li><code>ConnectionTimeout</code>: Eine Zeitspanne, die steuert, wie lange ein Versuch zur Verbindungsherstellung mit dem Server dauern darf, bevor er abgebrochen wird. Der Standardwert ist vom Treiber abhängig.</li>        <li><code>CommandTimeout</code>: Eine Zeitspanne, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert ist vom Treiber abhängig.</li></ul>Der Parameter <code>options</code> wird als [option1 = value1, option2 = value2...] angegeben.


