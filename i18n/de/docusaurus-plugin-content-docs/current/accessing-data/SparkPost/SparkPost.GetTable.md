---
title: SparkPost.GetTable
---

# SparkPost.GetTable


Gibt eine Tabelle der verfügbaren Daten aus der SparkPost-API, Version 1, zurück.


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Remarks

Mithilfe dieser Funktion können Daten von einem bestimmten Endpunkt "Metrics" der SparkPost-API, Version 1, abgerufen werden. Wenn Sie diese Tabellen aktualisieren oder die SparkPost-API über diesen Connector aufrufen, denken Sie daran, dass für die SparkPost-API ein striktes API-Ratenlimit vorliegt. Wenn Ihnen vom SparkPost-Server ein Statuscode 429 zurückgegeben wird, haben Sie das Ratenlimit erreicht und müssen einige Minuten warten, bevor weitere Aufrufe möglich sind. Beachten Sie beim Auswählen eines Werts für den Parameter "Anzahl von Tagen", dass die API nur Daten aus sechs Monaten speichert.


## Examples

### Example #1 
Ruft die Zustellbarkeitsmetriken &#34;count_sent&#34; und &#34;count_rejected&#34; für alle campaign_ids ab (aggregiert über die letzten drei Tage).
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
Tabelle
```



