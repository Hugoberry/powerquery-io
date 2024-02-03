---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Tiek atgriezti atskaišu komplekti no pakalpojuma Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Tiek atgriezta daudzdimensiju pakotņu tabula no pakalpojuma Adobe Analytics. Var norādīt neobligātu ieraksta parametru <code>options</code>, lai kontrolētu tālāk norādītās opcijas.    <ul><li><code>HierarchicalNavigation</code> : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).</li><li><code>MaxRetryCount</code> : Norāda, cik atkārtotu mēģinājumu jāveic, pieprasot vaicājuma rezultātu. Noklusējuma vērtība ir 120.</li><li><code>RetryInterval</code> : Laiks starp atkārtotiem mēģinājumiem. Noklusējuma vērtība ir viena sekunde.</li><li><code>Implementation</code> : Norāda Adobe Analytics API versiju. Derīgās vērtības ir “2.0”. Pēc noklusējuma tiek izmantota API versija&#160;1.4.</li></ul>    



## Category
Accessing data
