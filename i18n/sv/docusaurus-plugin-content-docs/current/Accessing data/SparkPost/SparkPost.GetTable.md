---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Returnerar en tabell över tillgängliga mått från SparkPost API v1


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

Den här funktionen kan användas för att hämta data från en viss Mått-slutpunkt för SparkPost API v1. När du uppdaterar de här tabellerna eller anropar SparkPost API:et med den här anslutningsappen så bör du tänka på att SparkPost API:et har en strikt hastighetsbegränsning. Om du ser statuskod 429 returnerad från SparkPost-servern så har du uppnått hastighetsgränsen och behöver vänta en stund innan du gör några fler anrop. När du väljer ett värde för parametern Antal dagar så bör du observera att API:et endast lagrar 6 månaders data.


## Examples

### Example #1 
Hämtar levererbarhetsmått för count_sent och count_rejected för alla campaign_ids sammanställt för de senaste tre dagarna.
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabell
```



