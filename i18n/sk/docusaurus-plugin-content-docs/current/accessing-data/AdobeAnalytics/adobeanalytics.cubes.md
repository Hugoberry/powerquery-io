---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Vráti balíky zostáv v službe Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Vráti tabuľku viacrozmerných balíkov zo služby Adobe Analytics. Zadaním voliteľného parametra záznamu, `options`, sa dajú ovládať tieto možnosti:

-   `HierarchicalNavigation` : Logická hodnota (True/False), ktorá nastavuje, či sa majú zobraziť tabuľky zoskupené podľa názvov schémy (predvolená hodnota je False).
-   `MaxRetryCount` : Počet opakovaní, ktoré sa majú vykonať pri zisťovaní výsledku dotazu. Predvolená hodnota je 120.
-   `RetryInterval` : Čas medzi opakovaním pokusov. Predvolená hodnota je 1 sekunda.
-   `Implementation` : Určuje verziu rozhrania API Adobe Analytics. Platné hodnoty sú: 2.0. Predvolená hodnota používa rozhranie API verzie 1.4.



## Category
Accessing data
