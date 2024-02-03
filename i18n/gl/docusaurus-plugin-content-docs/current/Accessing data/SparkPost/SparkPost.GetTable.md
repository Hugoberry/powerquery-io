---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Devolve unha táboa das medidas dispoñibles da API v1 de SparkPost


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

Esta función pódese usar para recuperar datos dun extremo concreto de "Medidas" da API SparkPost v1. Cando actualice estas táboas ou faga chamadas á API SparkPost mediante este conector, teña en conta que a API SparkPost ten un límite de taxa de API estrito. Se o servidor SparkPost devolve un código de estado 429, significa que acadou o límite de taxa e terá que agardar uns intres antes de realizar máis chamadas. Cando escolla un valor para o parámetro Número de días, teña en conta que a API só almacena 6 meses de datos.


## Examples

### Example #1 
Recupera as medidas de entrega count_sent e count_rejected de todos os identificadores campaign_ids dos últimos tres días. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
táboa
```



