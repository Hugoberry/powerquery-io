---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Vrne zbirke poročil iz storitve Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Vrne tabelo večdimenzionalnih paketov iz storitve Adobe Analytics. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:    <ul><li><code>HierarchicalNavigation</code> : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je &#187;false&#171;).</li><li><code>MaxRetryCount</code> : Število ponovnih poskusov, ki bodo izvedeni pri pozivanju za rezultat poizvedbe. Privzeta vrednost je 120.</li><li><code>RetryInterval</code> : Čas med ponovnimi poskusi. Privzeta vrednost je 1 sekunda.</li><li><code>Implementation</code> : Navaja različico API-ja storitve Adobe Analytics. Veljavne vrednosti so: &#187;2.0&#171;. Privzeta nastavitev uporablja različico API-ja 1.4.</li></ul>    



## Category
Accessing data
