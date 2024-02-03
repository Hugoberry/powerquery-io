---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Atgriež pieejamās metrikas tabulu no SparkPost API v1


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

Šo funkciju var izmantot, lai izgūtu datus no konkrēta SparkPost API v1 galapunkta “Metrika”. Ja šīs tabulas tiek atsvaidzinātas vai izsaukumi uz SparkPost API tiek veikti, izmantojot šo savienotāju, ņemiet vērā, ka SparkPost API ir strikts API pieprasījumu saņemšanas biežuma ierobežojums. Ja no SparkPost servera tiek atgriezts statusa kods 429, tas nozīmē, ka tika sasniegts maksimālais atļautais pieprasījumu biežums. Pirms veikt jaunus izsaukumus, nedaudz uzgaidiet. Izvēloties vērtību parametram Dienu skaits, jāņem vērā, ka API saglabā datus tikai par 6 mēnešiem.


## Examples

### Example #1 
Tiek izgūta piegādes metriku count_sent un count_rejected saistībā ar visām kampaņām campaign_ids, kas apkopotas pēdējo trīs dienu laikā.
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabula
```



