---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Returnează un tabel de măsurători disponibile de la API-ul SparkPost v1


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

Această funcție se poate utiliza pentru a regăsi date dintr-un anumit punct final „Măsurători” din API-ul SparkPost v1. Când reîmprospătați aceste tabele sau apelați API-ul SparkPost utilizând acest conector, rețineți că API-ul SparkPost are o limită de rată API strictă. Dacă vedeți un cod de stare 429 returnat de serverul SparkPost, ați atins limita de rată și va trebui să așteptați câteva clipe înainte de a face mai multe apeluri. La alegerea unei valori pentru parametrul Număr de zile, rețineți faptul că API-ul stochează numai 6 luni de date.


## Examples

### Example #1 
Regăsește măsurătorile de livrare count_sent și count_rejected pentru toate campaign_ids agregate în ultimele trei zile. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabel
```



