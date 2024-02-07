---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Remarks

Hent de indbyggede tabeller, der eksponeres af SparkPost connector med data, der aggregeres over en brugerangivet antal dage. Ved opdatering af disse tabeller eller ved opkald til API'EN SparkPost ved hjælp af denne connector skal du være opmærksom på, at API'EN SparkPost har en bundet grænse for API-overførselshastigheden. Hvis du kan se en 429 statuskode, der returneres fra SparkPost-serveren, har du nået grænsen for overførselshastighed og skal vente et øjeblik, før du foretager flere opkald. Når du vælger en værdi for antallet af dage parameter, skal du være opmærksom på, at API'EN kun gemmer 6 måneders data.


