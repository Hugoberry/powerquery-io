---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Returnerar rapportsviterna i Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Returnerar en tabell med flerdimensionella paket från Adobe Analytics. Du kan ange en valfri postparameter, <code>options</code>, om du vill styra följande alternativ:    <ul><li><code>HierarchicalNavigation</code> : Ett logiskt v&#228;rde (sant/falskt) som anger om du vill visa vilka tabeller som &#228;r grupperade efter schemanamn (standard &#228;r falskt).</li><li><code>MaxRetryCount</code> : Det antal &#229;terf&#246;rs&#246;k som ska utf&#246;ras n&#228;r en avs&#246;kning g&#246;rs f&#246;r fr&#229;gans resultat. Standardv&#228;rdet &#228;r 120.</li><li><code>RetryInterval</code> : Varaktigheten mellan &#229;terf&#246;rs&#246;k. Standardv&#228;rdet &#228;r 1 sekund.</li><li><code>Implementation</code> : Anger Adobe Analytics API-version. Giltiga v&#228;rden: 2.0. Standardv&#228;rdet &#228;r API-version 1.4.</li></ul>    



## Category
Accessing data
