---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Returnerar rapportsviterna i Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med flerdimensionella paket från Adobe Analytics. Du kan ange en valfri postparameter, `options`, om du vill styra följande alternativ:

-   `HierarchicalNavigation` : Ett logiskt värde (sant/falskt) som anger om du vill visa vilka tabeller som är grupperade efter schemanamn (standard är falskt).
-   `MaxRetryCount` : Det antal återförsök som ska utföras när en avsökning görs för frågans resultat. Standardvärdet är 120.
-   `RetryInterval` : Varaktigheten mellan återförsök. Standardvärdet är 1 sekund.
-   `Implementation` : Anger Adobe Analytics API-version. Giltiga värden: 2.0. Standardvärdet är API-version 1.4.



## Category
Accessing data
