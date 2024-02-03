---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Az 1-es verziójú SparkPost API-ból elérhető mérőszámok tábláját adja vissza


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

A függvény segítségével az 1-es verziójú SparkPost API „Metrics” (Mérőszámok) végpontjairól kérhetők le adatok. A táblák frissítésekor, illetve a SparkPost API az összekötővel való meghívásakor vegye figyelembe, hogy a SparkPost API szigorú API-kvótával rendelkezik. Ha a SparkPost-kiszolgáló 429-es állapotkódot ad vissza, elérte a kvótát, és néhány pillanatot várnia kell a további hívások előtt. A Number of days (Napok száma) paraméter értékének megadásakor vegye figyelembe, hogy az API csak 6 hónapnyi adatot tárol.


## Examples

### Example #1 
Beolvassa az elmúlt három napban összesített összes campaign_id count_sent és count_rejected kézbesíthetőségi mutatóit. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
táblázat
```



