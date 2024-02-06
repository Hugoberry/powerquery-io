---
title: SparkPost.GetTable
---

# SparkPost.GetTable


Returnerer en tabel over tilgængelige målepunkter fra version 1 af SparkPost-API&#39;en


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

Denne funktion kan bruges til at hente data fra et bestemt "Metrik"-slutpunkt i SparkPost API-v1. Ved at opdatere disse tabeller eller ved at foretage kald til API'EN SparkPost ved hjælp af denne connector, skal du huske, API'EN SparkPost har en bundet grænse for API-overførselshastighed. Hvis du kan se en 429 statuskode, der returneres fra SparkPost-serveren, har du nået grænsen for overførselshastighed og skal vente et øjeblik, før du foretager flere kald. Når du vælger en værdi for parameteren Antal dage, skal du være opmærksom på, at API'EN kun gemmer 6 måneder data.


## Examples

### Example #1 
Henter leveringsmetrikværdier for antallet af sendte og afviste kampagne-ide&#39;er over de seneste tre dage. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabel
```



