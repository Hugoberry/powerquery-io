---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Returnerer rapportpakkerne i Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Returnerer en tabel over multidimensionelle pakker fra Adobe Analytics. Der kan angives en valgfri postparameter, <code>options</code>, til at styre følgende indstillinger:    <ul><li><code>HierarchicalNavigation</code> : En logisk v&#230;rdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er false).</li><li><code>MaxRetryCount</code> : Det antal fors&#248;g, der skal udf&#248;res, n&#229;r der foresp&#248;rges efter resultatet af foresp&#248;rgslen. Standardv&#230;rdien er 120.</li><li><code>RetryInterval</code> : Varigheden af tidsintervallet mellem nye fors&#248;g. Standardv&#230;rdien er 1 sekund.</li><li><code>Implementation</code> : Angiver Adobe Analytics API-version. Gyldige v&#230;rdier er: &quot;2.0&quot;. Standard bruger API-version 1.4.</li></ul>    



## Category
Accessing data
