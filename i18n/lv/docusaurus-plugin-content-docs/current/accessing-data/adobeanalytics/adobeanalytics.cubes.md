---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Tiek atgriezti atskaišu komplekti no pakalpojuma Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Tiek atgriezta daudzdimensiju pakotņu tabula no pakalpojuma Adobe Analytics. Var norādīt neobligātu ieraksta parametru `options`, lai kontrolētu tālāk norādītās opcijas.

-   `HierarchicalNavigation` : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).
-   `MaxRetryCount` : Norāda, cik atkārtotu mēģinājumu jāveic, pieprasot vaicājuma rezultātu. Noklusējuma vērtība ir 120.
-   `RetryInterval` : Laiks starp atkārtotiem mēģinājumiem. Noklusējuma vērtība ir viena sekunde.
-   `Implementation` : Norāda Adobe Analytics API versiju. Derīgās vērtības ir “2.0”. Pēc noklusējuma tiek izmantota API versija 1.4.



## Category
Accessing data
