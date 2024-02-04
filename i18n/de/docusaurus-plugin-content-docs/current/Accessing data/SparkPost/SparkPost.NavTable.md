---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Details

Hiermit laden Sie die integrierten, vom SparkPost-Connector verfügbar gemachten Tabellen mit Daten, die über eine vom Benutzer angegebene Anzahl von Tagen aggregiert werden. Wenn Sie diese Tabellen aktualisieren oder die SparkPost-API über diesen Connector aufrufen, denken Sie daran, dass für die SparkPost-API ein striktes API-Ratenlimit vorliegt. Wenn Ihnen vom SparkPost-Server ein Statuscode 429 zurückgegeben wird, haben Sie das Ratenlimit erreicht und müssen einige Minuten warten, bevor weitere Aufrufe möglich sind. Beachten Sie beim Auswählen eines Werts für den Parameter "Anzahl von Tagen", dass die API nur Daten aus sechs Monaten speichert.


