---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Restituisce una tabella di metriche disponibili dall&#39;API SparkPost v1


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

È possibile usare questa funzione per recuperare dati da un particolare endpoint "Metrics" dell'API SparkPost v1. Quando si aggiornano queste tabelle o si effettuano chiamate all'API SparkPost con questo connettore, tenere presente che l'API SparkPost prevede un rigido limite di velocità dell'API. Se il server SparkPost restituisce un codice di stato 429, il limite di velocità è stato raggiunto ed è necessario attendere qualche istante prima di effettuare altre chiamate. Quando si sceglie un valore per il parametro relativo al numero di giorni, tenere presente che l'API archivia solo i dati degli ultimi sei mesi.


## Examples

### Example #1 
Recupera le metriche count_sent e count_rejected per deliverability per tutti gli elementi campaign_ids aggregati negli ultimi tre giorni. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabella
```



