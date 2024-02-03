---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Vrne tabelo z razpoložljivo metriko iz vmesnika API v1 storitve SparkPost


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

To funkcijo lahko uporabite za pridobivanje podatkov iz določene končne točke "Metrika" vmesnika API za SparkPost v1. Pri osveževanju teh tabel ali klicanju vmesnika API za SparkPost API s tem priključkom upoštevajte, da je za vmesnik API za SparkPost določena stroga omejitev števila klicev vmesnika API. Če strežnik SparkPost vrne kodo stanja 429, ste dosegli omejitev števila klicev, zato boste pred dodatnimi klici morali počakati nekaj trenutkov. Pri izbiranju vrednosti za parameter števila dni upoštevajte, da lahko vmesnik API shrani podatke samo za 6 mesecev.


## Examples

### Example #1 
Pridobi metriko dostavljivosti za &#34;count_sent&#34; in &#34;count_rejected&#34; za vse &#34;campaign_ids&#34;, združene v zadnjih treh dneh. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabela
```



