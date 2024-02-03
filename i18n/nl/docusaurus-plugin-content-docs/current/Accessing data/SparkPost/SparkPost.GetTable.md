---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Hiermee wordt een tabel met beschikbare metrische gegevens geretourneerd via de SparkPost-API v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Details

Deze functie kan worden gebruikt om gegevens op te halen van een specifiek eindpunt Metrische waarden van de SparkPost-API v1. Wanneer u deze tabellen vernieuwt of met deze connector een aanroep naar de SparkPost-API maakt, moet u er rekening mee houden dat de SparkPost-API een strikte API-tarieflimiet heeft. Als de statuscode 429 wordt geretourneerd van de SparkPost-server, hebt u de tarieflimiet bereikt en moet u enkele momenten wachten voordat u meer aanroepen kunt maken. Wanneer u een waarde kiest voor de parameter Aantal dagen, moet u er rekening mee houden dat de API slechts de gegevens van zes maanden opslaat.


## Examples

### Example #1 
Hiermee haalt u de metrische leveringswaarden count_sent en count_rejected op voor alle campaign_ids die de afgelopen drie dagen zijn verzameld. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabel
```



