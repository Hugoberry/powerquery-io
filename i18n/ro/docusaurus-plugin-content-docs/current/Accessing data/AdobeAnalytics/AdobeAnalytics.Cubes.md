---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Returnează suitele de rapoarte din Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Returnează un tabel de pachete multidimensionale din Adobe Analytics. Se poate specifica un parametru de înregistrare opțional, <code>options</code>, pentru a controla următoarele opțiuni:    <ul><li><code>HierarchicalNavigation</code> : O valoare logică (true/false) care setează dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este false).</li><li><code>MaxRetryCount</code> : Numărul de re&#238;ncercări de efectuat atunci c&#226;nd sondați după rezultatul interogării. Valoarea implicită este de 120.</li><li><code>RetryInterval</code> : Durata de timp dintre re&#238;ncercări. Valoarea implicită este de 1 secundă.</li><li><code>Implementation</code> : Specifică versiunea API Adobe Analytics. Valorile valide sunt: „2.0”. Valoarea implicită utilizează API versiunea 1.4.</li></ul>    



## Category
Accessing data
