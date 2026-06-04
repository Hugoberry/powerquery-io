---
title: SparkPost.GetTable
---

# SparkPost.GetTable


Retorna una taula de mètriques disponibles de l'API de SparkPost v1


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

Aquesta funció es pot utilitzar per recuperar dades des d'un extrem en particular de "Mètriques" de l'API de SparkPost v1. Quan actualitzeu aquestes taules o feu trucades a l'API de SparkPost utilitzant aquest connector, tingueu en compte que l'API de SparkPost té un límit de velocitat estricte. Si veieu que es retorna el codi d'estat 429 des del servidor de SparkPost, significa que heu assolit el límit de velocitat i haureu d'esperar una estona per fer més trucades. Quan trieu un valor per al paràmetre Nombre de dies, tingueu en compte que l'API només emmagatzema 6 mesos de dades.


## Examples

### Example #1
Permet recuperar les mètriques de lliurament count\_sent i count\_rejected per a tots els valors campaign\_ids agregats durant els últims tres dies.
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
taula
```



