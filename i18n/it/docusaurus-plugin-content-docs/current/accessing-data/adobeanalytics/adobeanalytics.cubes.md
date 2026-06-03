---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Restituisce i gruppi di report in Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di pacchetti multidimensionali da Adobe Analytics. È possibile specificare un parametro di record facoltativo, `options`, per controllare le opzioni seguenti:

-   `HierarchicalNavigation` : Espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito è true).
-   `MaxRetryCount` : Numero di tentativi da eseguire durante il polling del risultato della query. Il valore predefinito è 120.
-   `RetryInterval` : Durata dell'intervallo di tempo tra i tentativi. Il valore predefinito è 1 secondo.
-   `Implementation` : Specifica la versione API di Adobe Analytics. I valori validi sono: "2.0". L'impostazione predefinita usa la versione API 1.4



## Category
Accessing data
