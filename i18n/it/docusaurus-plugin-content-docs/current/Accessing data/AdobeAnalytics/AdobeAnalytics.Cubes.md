---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Restituisce i gruppi di report in Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Restituisce una tabella di pacchetti multidimensionali da Adobe Analytics. È possibile specificare un parametro di record facoltativo, <code>options</code>, per controllare le opzioni seguenti:    <ul><li><code>HierarchicalNavigation</code> : Espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito &#232; true).</li><li><code>MaxRetryCount</code> : Numero di tentativi da eseguire durante il polling del risultato della query. Il valore predefinito &#232; 120.</li><li><code>RetryInterval</code> : Durata dell&#39;intervallo di tempo tra i tentativi. Il valore predefinito &#232; 1 secondo.</li><li><code>Implementation</code> : Specifica la versione API di Adobe Analytics. I valori validi sono: &quot;2.0&quot;. L&#39;impostazione predefinita usa la versione API 1.4</li></ul>    



## Category
Accessing data
