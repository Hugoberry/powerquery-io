---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Retourne une table des mesures disponibles à partir de l&#39;API SparkPost v1


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

Cette fonction peut être utilisée pour récupérer des données d'un point de terminaison " Métriques " particulier de l'API SparkPost v1. Quand vous actualisez ces tables ou passez des appels à l'API SparkPost à l'aide de ce connecteur, gardez à l'esprit que l'API SparkPost a un débit maximal d'API strict. Si le code d'état 429 est retourné par le serveur SparkPost, vous avez atteint le débit maximal et devez attendre quelques instants avant de passer d'autres appels. Quand vous choisissez une valeur pour le paramètre Nombre de jours, notez que l'API stocke uniquement l'équivalent de 6 mois de données.


## Examples

### Example #1 
Récupère les métriques de remise count_sent et count_rejected pour tous les campaign_ids agrégés des trois derniers jours. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
table
```



