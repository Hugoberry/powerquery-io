---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Hiermit importieren Sie Daten aus QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Hiermit wird eine Tabelle der verfügbaren Tabellen in QuickBooks Online zurückgegeben. Der optionale Datensatzparameter <code>options</code> kann angegeben werden, um die folgenden Optionen zu steuern:          <ul>            <li><code>ConnectionTimeout</code>: Ein Zeitraum, der steuert, wie lange ein Versuch zur Verbindungsherstellung mit dem Server dauern darf, bevor er abgebrochen wird.</li>            <li><code>CommandTimeout</code>: Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird.</li>          </ul>        Der Datensatzparameter wird als [option1 = value1, option2 = value2...] angegeben.    


